module.exports = {
  title: 'accesible.es - accesibilidad web',
  customFields: {
    heroTitle: 'guía de accesibilidad web',
  },
  tagline: 'Pautas de accesibilidad resumidas',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'accesible.es',
      logo: {
        alt: '',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/accesible/accesible_es',
          label: 'GitHub',
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
              to: 'docs/',
            },
            {
              label: 'Accesibilidad',
              to: 'docs/accesibilidad',
            },
            {
              label: 'Recursos',
              to: 'docs/recursos',
            }            
          ],
        },
        {
          title: 'Pautas',
          items: [
            {
              label: 'Color',
              to: 'docs/color',
            },
            {
              label: 'Contenido',
              to: 'docs/contenido',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/accesible/accesible_es',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/accesible_es',
            }, 
            {
              label: 'Linkedin',
              href: 'https://linkedin.com/company/accesible',
            }                     
          ],
        },
      ],
      copyright: `accesible.es ${new Date().getFullYear()}.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
