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
  // title: 'API Documentation Demo',
  // description: 'A simple API documentation.',

  /**
   * @see Locales { @link https://v1.vuepress.vuejs.org/guide/i18n.html#site-level-i18n-config }
   */
  locales: {
    '/': {
      lang: 'en-US',
      title: 'API Documentation Demo',
      description: 'A simple API documentation.',
    },
    '/br/': {
      lang: 'pt-BR',
      title: 'API Documentation Demo',
      description: 'Uma simples documentação de API.',
    },
  },

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
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
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
            text: 'App',
            link: 'https://vuepress.vuejs.org',
          },
        ],
        sidebar: {
          '/endpoints': [
            {
              title: 'Endpoints',
              path: '/endpoints/',
              collapsable: true,
              children: ['endpoints/'],
            },
            {
              title: 'Products',
              path: '/endpoints/products/',
              collapsable: true,
              children: [
                'endpoints/products/',
                'endpoints/products/types',
                'endpoints/products/post',
                'endpoints/products/put',
                'endpoints/products/get',
                'endpoints/products/delete',
              ],
            },
            {
              title: 'Users',
              path: '/endpoints/users/',
              collapsable: true,
              children: [
                'endpoints/users/',
                'endpoints/users/types',
                'endpoints/users/post',
                'endpoints/users/put',
                'endpoints/users/get',
                'endpoints/users/delete',
              ],
            },
          ],
        },
      },
      '/br/': {
        selectText: 'Idiomas',
        label: 'Português',
        ariaLabel: 'Idiomas',
        nav: [
          {
            text: 'Endpoints',
            link: '/br/endpoints/',
          },
          {
            text: 'Configuração',
            link: '/br/config/',
          },
          {
            text: 'App',
            link: 'https://vuepress.vuejs.org',
          },
        ],
        sidebar: {
          '/br/endpoints': [
            {
              title: 'Endpoints',
              path: '/br/endpoints/',
              collapsable: true,
              children: ['endpoints/'],
            },
            {
              title: 'Products',
              path: '/br/endpoints/products/',
              collapsable: true,
              children: [
                'endpoints/products/',
                'endpoints/products/types',
                'endpoints/products/post',
                'endpoints/products/put',
                'endpoints/products/get',
                'endpoints/products/delete',
              ],
            },
            {
              title: 'Users',
              path: '/br/endpoints/users/',
              collapsable: true,
              children: [
                'endpoints/users/',
                'endpoints/users/types',
                'endpoints/users/post',
                'endpoints/users/put',
                'endpoints/users/get',
                'endpoints/users/delete',
              ],
            },
          ],
        },
      },
    },
  },

  /**
   * @see Plugin { @link https://v1.vuepress.vuejs.org/zh/plugin }
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
});
