const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: '',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: '',
    title: "<a href=''><img class='img-responsive' src='' alt='' /></a>",
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
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // TODO: add trailing slash if enabled above
      '/test',
    ],
    collapsedNav: [
      '/codeblock', // TODO: add trailing slash if enabled above
    ],
    links: [{ text: 'Sabita Neupane', link: 'https://nsabita.com.np' }],
    frontLine: true,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'DevBucket',
    description:
      'DevBucket is go-to daily resource for everything related to programming, including software and system design, coding, data structures and algorithms, as well as interview preparation topics and learning resources.',
    ogImage: null,
    docsLocation: '',
    favicon: '',
  },
  pwa: {
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
  },
};

module.exports = config;
