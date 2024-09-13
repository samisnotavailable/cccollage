// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'cccollage',
  tagline: 'WELCOME TO',
  favicon: 'img/cccollage.ico',

  // Set the production url of your site here
  url: 'https://github.com/samisnotavailable',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cccollage/',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
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
          {to: '/blog', label: 'Blog', position: 'left'},
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
              {
                label: 'Artists to Follow',
                to: '/docs/category/artists-to-follow',
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
            title: 'About Me',
            items: [
              {
                label: 'Diende Noel',
                to: '/docs/about',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/diendenoel/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} cccollage by Diende Noel.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
