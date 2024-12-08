import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'cccollage',
  tagline: '',
  favicon: 'img/cccollage.ico',

  // Set the production url of your site here
  url: 'https://cccollage.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'samisnotavailable',
  projectName: 'cccollage', 
  deploymentBranch: 'gh-pages',
  trailingSlash: false,


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          /* Please change this to your repo.
           Remove this to remove the "edit this page" links.
           editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            */
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'featured-artists', 
        path: 'featured-artists', 
        routeBasePath: 'featured-artists', 
        sidebarPath: require.resolve('./sidebarsArtists.js'), 
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://samisnotavailable.github.io/cccollage/img/cccollage-social-card.png' },
        { property: 'og:image', content: 'https://samisnotavailable.github.io/cccollage/img/cccollage-social-card.png' },
        { property: 'og:title', content: 'cccollage' },
        { property: 'og:description', content: 'Your source and directory for all things collage!' },
      ],
      image: '/img/cccollage-social-card.png',
      navbar: {
        title: '',
        logo: {
          alt: 'cccollage logo',
          src: '/img/cccollage-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/featured-artists/get-featured', label: 'Featured Artists', position: 'left' },
          { to: '/about-me', label: 'About the Author', position: 'right' },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
              {
                label: 'What is Collage?',
                to: '/docs/category/what-is-collage',
              },
              {
                label: 'Why Collage?',
                to: '/docs/why-collage',
              },
              {
                label: 'Getting Your Sources',
                to: '/docs/category/getting-your-sources',
              },
              {
                label: 'How to Collage',
                to: '/docs/category/how-to-collage',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: 'Coming Soon',
                href: 'https://pbs.twimg.com/media/Fw7q2p-XwAEjq9F.jpg',
              },
            ],
          },
          {
            title: 'Featured Artists',
            items: [
              {
                label: 'Get Featured',
                to: '/featured-artists/get-featured',
              },
            ]
          },
          {
            title: 'Get to Know Me',
            items: [
              {
                label: 'About Me',
                to: '/about-me',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/diendenoel/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cccollage by Diende.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
