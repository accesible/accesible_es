// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Guía rápida de accesibilidad web',
  tagline: 'La guía fácil sobre la accesibilidad web',
  url: 'https://accesible.es',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'accesible', // Usually your GitHub org/user name.
  projectName: 'accesible_es', // Usually your repo name.
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl: 'https://github.com/accesible/accesible_es/tree/main/',
        },
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      metadata: [{name: 'twitter:card', content: 'summary'}],
      navbar: {
        title: 'Accesible.es',
        logo: {
          alt: 'Logotipo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Intro',
          },
          {
            type: 'doc',
            docId: 'pautas',
            position: 'left',
            label: 'Pautas',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/accesible',
            label: 'Ver en gitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Intro',
            items: [
              {
                label: 'Manifiesto',
                to: '/manifiesto',
              },
              {
                label: 'Accesibilidad',
                to: '/accesibilidad',
              },
              {
                label: 'Recursos',
                to: '/recursos',
              }
            ],
          },
          {
            title: 'Red',
            items: [
              {
                label: 'Twitter',
                to: 'https://twitter.com/accesible_es',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/accesible',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/accesible',
              },
            ],
          },

        ],
        copyright: `accesible.es - ${new Date().getFullYear()} 🤙 `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
