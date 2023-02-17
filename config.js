// TODO
const headerConfig = {
  logo: 'https://sabitaneupane.github.io/devbucket',
  logoLink: 'https://nsabita.com.np/wp-content/uploads/2021/05/cropped-Sabita-Neupane-logo.png',
  title:
    "<a href=''><img class='img-responsive' src='https://nsabita.com.np/wp-content/uploads/2021/05/cropped-Sabita-Neupane-logo.png' alt='' /></a>",
  githubUrl: '',
  helpUrl: '',
  tweetText: '',
  social: `<li>
      <a href="" target="_blank" rel="noopener">
        <div class="twitterBtn">
          <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
        </div>
      </a>
    </li>
    <li>
      <a href="" target="_blank" rel="noopener">
        <div class="discordBtn">
          <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
        </div>
      </a>
    </li>`,
  links: [{ text: '', link: '' }],
  search: {
    enabled: true,
    indexName: '',
    algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
    algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
  },
};

const sidebarConfig = {
  forcedNavOrder: [
    '/programming-languages-libraries-and-frameworks',
    '/software-design-and-architecture',
    '/web-application-design-principles-and-architecture',
    '/data-structure-and-algorithm',
  ],
  collapsedNav: [
    '/programming-languages-libraries-and-frameworks',
    '/software-design-and-architecture',
    '/web-application-design-principles-and-architecture',
    '/data-structure-and-algorithm',
  ],
  links: [{ text: 'About Me: Sabita Neupane', link: 'https://nsabita.com.np' }],
  frontLine: false,
  ignoreIndex: true,
  title: '',
};

const siteMetadataConfig = {
  title: 'DevBucket',
  description:
    'DevBucket is go-to daily resource for everything related to programming, including software and system design, coding, data structures and algorithms, as well as interview preparation topics and learning resources.',
  ogImage: null,
  docsLocation: '',
  favicon: '',
};

// TODO
const pwaConfig = {
  enabled: false, // disabling this will also remove the existing service worker.
  manifest: {
    name: 'DevBucket',
    short_name: 'DevBucket',
    start_url: '/',
    background_color: '#6b37bf',
    theme_color: '#6b37bf',
    display: 'standalone',
    crossOrigin: 'use-credentials',
    icons: [
      {
        src: 'src/pwa-512.png',
        sizes: `512x512`,
        type: `image/png`,
      },
    ],
  },
};

const config = {
  gatsby: {
    pathPrefix: '/devbucket',
    siteUrl: 'https://sabitaneupane.github.io',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: headerConfig,
  sidebar: sidebarConfig,
  siteMetadata: siteMetadataConfig,
  pwa: pwaConfig,
};

module.exports = config;
