import { defineConfig } from 'vuepress/config';

export default defineConfig({
  /**
   * @see Head { @link https://v1.vuepress.vuejs.org/config/#head }
   */
  head: [
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
  //   '/br/': {
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
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/',
      },
      {
        text: 'App',
        link: 'https://v1.vuepress.vuejs.org',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['', 'using-vue'],
        },
      ],
    },
  },

  /**
   * @see Plugin { @link https://v1.vuepress.vuejs.org/zh/plugin }
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
});
