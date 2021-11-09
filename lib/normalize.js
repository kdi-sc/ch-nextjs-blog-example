import { urlObjectKeys } from "next/dist/shared/lib/utils";

//Normalizes our data that we get back from Content Hub Graphql endpoint
export function normalizePosts(postsFromEdge4CH) {
    /* Need an object like this...
      - title
      - slug
      - excerpt
      - date
      - coverImage
        - responsiveImage
      - author
        - name
        - picture
            - url
    */
            
    const posts = postsFromEdge4CH.map((p) => {        
        let imageUrl = p.contentAssets?.assets?.[0]?.urls;
        if (Object.values(imageUrl)[0].url)
            imageUrl = Object.values(imageUrl)[0].url;
        else 
            imageUrl = `https://picsum.photos/2000/1000`;                 
        
        let normalizedPost = {
        title: p.articleTitle,
        slug: p.articleTitle,
        excerpt: p.articleIntro? p.artilceIntro : p.articleContent,
        date: p.articlePublicationDate,
        content: p.articleContent + p.articleAdditionalContent,
        ogImage: {
          url: imageUrl
        },
        coverImage: {
            url: imageUrl,
            width: 2000,
            height: 1000,
            aspectRatio: 100,
            alt: `Image for ${p.articleTitle}`,
            title: `Image for ${p.articleTitle}` ,
            bgColor: null,          
        },
      }
  
      if (true) { //TODO Get Author name and picture with the graphql query
        normalizedPost.author = {
          name: p.articleAuthor, //TODO Get Author name and picture with the graphql query
          picture: {
            url: `https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50`, //TODO Get Author name and picture with the graphql query
          },
        }
      }
  
      return normalizedPost
    })

    return posts
  }