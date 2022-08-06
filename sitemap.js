const sitemap = require('algolia-sitemap');

// You need an API key with `browse` permission
const algoliaConfig = {
  appId: '76BKM7M8KH',
  apiKey: '6a3733767ee79f463721b21e4b74729f',
  indexName: 'archery',
};

sitemap({
  algoliaConfig,
  // ... 
});

// Turn a record into a sitemap entry
function hitToParams({ url }) {
  return { loc: url };
}

sitemap({
  algoliaConfig,
  hitToParams,
  // The URL of the sitemaps directory
  sitemapLoc: 'https://aiegoo.github.io/archery/sitemaps/',
  // The directory with all sitemaps (default: `sitemaps`)
  outputFolder: 'sitemaps',
});
