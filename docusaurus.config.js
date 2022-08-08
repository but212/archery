// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Archery Kinect Game',
  tagline: 'TEAMC',
  url: 'https://aiegoo.github.io/',
  baseUrl: '/archery/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aiegoo', // Usually your GitHub org/user name.
  projectName: 'archery', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aiegoo/archery/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/aiegoo/archery/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  plugins: [
 //   [
 //     '@docusaurus/plugin-sitemap',
 //     { 
 //      id: 'default',
 //      changefreq: 'daily',
 //      ignorePatterns: ['/software/0.28/**','/software/0.27/**','/software/0.26/**','/software/0.25/**','/software/0.23/**','/software/0.16/**'],
 //      filename: 'sitemap.xml',
 //     },
 //   ],
  ],
    
  //themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Archery Kinect Game',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Project Info',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/aiegoo/archery',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Project Info',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/archery%20game',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/aiegoo',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/aiegoo',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/aiegoo/archery',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KOCCA, Kidp and Joyfun collaboration program for TeamC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
        magicComments: [
        // Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
      },
      algolia: {
        contextualSearch: true,
        // The application ID provided by Algolia
        appId: '76BKM7M8KH',
        
            // Public API key: it is safe to commit it
            apiKey: '6a3733767ee79f463721b21e4b74729f',
        
            indexName: 'xr-archery'
            
          },
      colorMode: {
        defaultMode: 'dark'
      },
    }),
};

module.exports = config;

//module.exports = {
//  plugins: [
//    [
//      '@docusaurus/plugin-sitemap',
//      {
//        changefreq: 'weekly',
//        priority: 0.5,
//        ignorePatterns: ['/tags/**'],
//        filename: 'sitemap.xml',
//      },
//    ],
//  ],
//};
