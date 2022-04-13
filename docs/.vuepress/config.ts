import { defineConfig } from 'vuepress/config';

export default defineConfig({
  /**
   * @see Head { @link https://v1.vuepress.vuejs.org/config/#head }
   */
  head: [
    ['link', { rel: 'shortcut icon', href: '/images/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * @see Title { @link https://v1.vuepress.vuejs.org/config/#title }
   * @see Description { @link https://v1.vuepress.vuejs.org/config/#description }
   */
  title: 'API Documentation Demo',
  description: 'A simple API Documentation.',

  /**
   * @see Locales { @link https://v1.vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config }
   */
  // locales: {
  //   '/': {
  //     lang: 'en-US',
  //     title: 'API Documentation Demo',
  //     description: 'A simple API Documentation.',
  //   },
  //   '/br': {
  //     lang: 'pt-BR',
  //     title: 'API Documentation Demo',
  //     description: 'Uma simples documentação de API.',
  //   },
  // },

  /**
   * @see Config { @link https://v1.vuepress.vuejs.org/theme/default-theme-config }
   */
  themeConfig: {
    logo: '/images/logo.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Endpoints',
        link: '/endpoints/',
      },
      {
        text: 'Config',
        link: '/config/',
      },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' },
        ],
      },
      {
        text: 'App',
        link: 'https://v1.vuepress.vuejs.org',
      },
    ],
    sidebar: {
      '/endpoints': [
        {
          title: 'Products',
          path: '/endpoints/products/',
          collapsable: false,
          children: ['endpoints/products/', 'endpoints/products/get', 'endpoints/products/post'],
        },
        {
          title: 'Users',
          path: '/endpoints/users/',
          collapsable: false,
          children: ['endpoints/users/', 'endpoints/users/get', 'endpoints/users/post'],
        },
      ],
    },
  },

  /**
   * @see Plugin { @link https://v1.vuepress.vuejs.org/zh/plugin }
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
});
