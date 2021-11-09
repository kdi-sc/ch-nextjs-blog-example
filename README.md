# A statically generated blog example using Next.js and Sitecore (Experience Edge for Content Hub).

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using [Sitecore](https://www.sitecore.com/) as the data source.

## Demo

### [https://next-js-blog-sitecore-demo.vercel.app/](https://next-js-blog-sitecore-demo.vercel.app/)

## Deploy your own

Using the Deploy Button below, you'll deploy the Next.js project as well as connect it to your Sitecore Content Hub instance using the Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmedkrimi%2Fnext.js-blog-sitecore-demo&env=SITECORE_CONTENTHUB_PUBLIC_URL,SITECORE_CONTENTHUB_PREVIEW_ACCESS_TOKEN,SITECORE_CONTENTHUB_DELIVERY_ACCESS_TOKEN&project-name=nextjs-blog-sitecore-demo&repo-name=next.js-blog-sitecore-demo&demo-title=Next.js%20Blog%20Sitecore%20Demo&demo-description=Astatically%20generated%20blog%20example%20using%20Next.js%20and%20Sitecore%20Experience%20Edge%20for%20Content%20Hub%20as%20the%20data%20source&demo-url=https%3A%2F%2Fnext-blog-sitecore.vercel.app%2F&demo-image=https%3A%2F%2Fnext-blog-sitecore.vercel.app%2F)

### Related examples

- [WordPress](/examples/cms-wordpress)
- [DatoCMS](/examples/cms-datocms)
- [Sanity](/examples/cms-sanity)
- [TakeShape](/examples/cms-takeshape)
- [Prismic](/examples/cms-prismic)
- [Strapi](/examples/cms-strapi)
- [Agility CMS](/examples/cms-agilitycms)
- [Cosmic](/examples/cms-cosmic)
- [ButterCMS](/examples/cms-buttercms)
- [Storyblok](/examples/cms-storyblok)
- [GraphCMS](/examples/cms-graphcms)
- [Kontent](/examples/cms-kontent)
- [Ghost](/examples/cms-ghost)
- [Blog Starter](/examples/blog-starter)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example cms-sitecore cms-sitecore-app
# or
yarn create next-app --example cms-sitecore cms-sitecore-app
```

## Configuration

### Prerequisites
To use the Delivery platform features, you need to:

1. Get the required license
2. Have your system configured
3. Enable content publishing

For more details check : https://docs.stylelabs.com/contenthub/4.1.x/content/user-documentation/experience-edge/content-delivery/prerequisites.html

### Step 1. Get your instance public Url and API Tokens. 

First, Follow [The Quickstart Guide](https://docs.stylelabs.com/contenthub/4.1.x/content/user-documentation/experience-edge/content-delivery/quickstart-guide.html)to create a content collection and publish the content collection.  

### Step 2. Authentication

The Delivery Platform provides 2 GraphQL APIs:
- [Preview API](https://docs.stylelabs.com/contenthub/4.1.x/content/user-documentation/experience-edge/content-delivery/apis/preview-api.html) exposing a preview of the content. Optimized for live access of the latest data. is app works support both Preview and Delivery Platform.
- [Delivery API](https://docs.stylelabs.com/contenthub/4.1.x/content/user-documentation/experience-edge/content-delivery/apis/delivery-api.html) exposes your published content with an identical structure to the Preview API. It is optimized for performance and high availability.

#### Generate an authentication key
To create an authentication key for the Delivery API:

1. On the main menu bar, click Content and select Content collections.
2. On the Content collections page, select the content collection for which you want to create an API key.
3. On the Collection detail page, on the upper right, click More actions dots icon and then select API keys icon API keys.
4. In the API keys dialog box, click + API key.
5. In the API keys dialog box, enter a name for the key and select Preview then click Create.
6. Copy and save for future use the generated token which represents your API key. 
7. Repeat Step 5 and 6 for the delivery API Key. 

This project includes a setup script which you can use to set up the content model expected by the source code.

**TODO** Details the bulk import of some blog/articles into Content Hub. 

#### Create the content model manually

### Step 3. Set up environment variables

We will use all APIs Tokens copied in the Step above.
Next, copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `SITECORE_CONTENTHUB_PUBLIC_URL` should be the **Content Hub Instance Url**
- `SITECORE_CONTENTHUB_PREVIEW_ACCESS_TOKEN` should be the **[Preview API Key](https://docs.stylelabs.com/contenthub/4.1.x/content/user-documentation/experience-edge/content-delivery/apis/preview-api.html)**
- `SITECORE_CONTENTHUB_DELIVERY_ACCESS_TOKEN` should be the **[Delivery API Key](https://docs.stylelabs.com/contenthub/4.1.x/content/user-documentation/experience-edge/content-delivery/apis/delivery-api.html)**

Your `.env.local` file should look like this:

```bash
SITECORE_CONTENTHUB_PUBLIC_URL=https://...
SITECORE_CONTENTHUB_PREVIEW_ACCESS_TOKEN=...
SITECORE_CONTENTHUB_DELIVERY_ACCESS_TOKEN=...
```

### Step 4. Run Next.js in development mode
```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

### Step 7. Try preview mode (To be completed later). 

### Step 8. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

This will deploy the Next.js project as well as connect it to your Sitecore Content Hub instance specified in the Vercel Environment Variables. Make sure to add `SITECORE_CONTENTHUB_PUBLIC_URL`, `SITECORE_CONTENTHUB_PREVIEW_ACCESS_TOKEN`, `SITECORE_CONTENTHUB_DELIVERY_ACCESS_TOKEN` as an [Environment Variable](https://vercel.com/docs/environment-variables) as well.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmedkrimi%2Fnext.js-blog-sitecore-demo&env=SITECORE_CONTENTHUB_PUBLIC_URL,SITECORE_CONTENTHUB_PREVIEW_ACCESS_TOKEN,SITECORE_CONTENTHUB_DELIVERY_ACCESS_TOKEN&project-name=nextjs-blog-sitecore-demo&repo-name=next.js-blog-sitecore-demo&demo-title=Next.js%20Blog%20Sitecore%20Demo&demo-description=Astatically%20generated%20blog%20example%20using%20Next.js%20and%20Sitecore%20Experience%20Edge%20for%20Content%20Hub%20as%20the%20data%20source&demo-url=https%3A%2F%2Fnext-blog-sitecore.vercel.app%2F&demo-image=https%3A%2F%2Fnext-blog-sitecore.vercel.app%2F)


##### TASKS
- Polish Responsive Image 
- Add Multilingual support
- Add preview vs Delivery Switch 







