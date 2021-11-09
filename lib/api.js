import { normalizePosts } from './normalize'

const POST_GRAPHQL_QUERY = `
# Write your query or mutation here
{
  allM_ContentCollection(
    where: { contentCollectionName_eq: "Edge Financial Blog" }
  ) {
    total
    results {
        contentCollection : contentCollectionToContent {
        total
        contentItems: results {
          id
          contentName: content_Name
          contentTypeToContent {
            id
          }          
          ... on M_Content_3b004 {
            articleTitle: _b004_Title
            articleIntro: _b004_Intro
            articleContent : _b004_Content
            articleAdditionalContent: _b004_AdditionalContent
            articlePublicationDate: content_PublicationDate
            articleAuthor: createdBy
          }                  
         contentAssets: cmpContentToMasterLinkedAsset {
            total
            assets: results {
              id
              urls              
            }
          }
        }
      }
    }
  }
}

`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://mohk-edgefinancial-410.stylelabs.io/api/graphql/preview/v1`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-GQL-Token': `${
          preview
            ? process.env.SITECORE_CONTENTHUB_PREVIEW_ACCESS_TOKEN
            : process.env.SITECORE_CONTENTHUB_PREVIEW_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())  
  
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.allM_ContentCollection?.results?.[0]
}

function extractPostEntries(fetchResponse) {
  const data = fetchResponse?.data?.allM_ContentCollection?.results?.[0]?.contentCollection?.contentItems
  const normalizedPosts = normalizePosts(data)
  
  return normalizedPosts || null 
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}

// export async function getAllPostsWithSlug() {
//   const entries = await fetchGraphQL(
//     `query {
//       postCollection(where: { slug_exists: true }, order: date_DESC) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`
//   )
//   return extractPostEntries(entries)
// }

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    POST_GRAPHQL_QUERY,
    preview
  )
  return extractPostEntries(entries)
}

// export async function getPostAndMorePosts(slug, preview) {
//   const entry = await fetchGraphQL(
//     `query {
//       postCollection(where: { slug: "${slug}" }, preview: ${
//       preview ? 'true' : 'false'
//     }, limit: 1) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     preview
//   )
//   const entries = await fetchGraphQL(
//     `query {
//       postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
//       preview ? 'true' : 'false'
//     }, limit: 2) {
//         items {
//           ${POST_GRAPHQL_FIELDS}
//         }
//       }
//     }`,
//     preview
//   )
//   return {
//     post: extractPost(entry),
//     morePosts: extractPostEntries(entries),
//   }
// }
