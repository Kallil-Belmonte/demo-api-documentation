import { defineConfig } from 'vitepress';

export default defineConfig({
  /**
   * @see SiteConfig { @link https://vitepress.dev/reference/site-config }
   */
  lang: 'en-US',
  title: 'Demo',
  titleTemplate: 'API Documentation',
  description: 'A demo API documentation.',
  head: [
    ['link', { rel: 'shortcut icon', href: '/images/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * @see DefaultThemeConfig { @link https://vitepress.dev/reference/default-theme-config }
   */
  themeConfig: {
    logo: '/images/logo.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present',
    },

    /**
     * @see Nav { @link https://vitepress.dev/reference/default-theme-config#nav }
     */
    nav: [
      {
        text: 'Endpoints',
        link: '/endpoints/general/',
      },
      {
        text: 'Config',
        link: '/config/',
      },
      {
        text: 'Lang',
        items: [{ text: 'Português', link: '/br/' }],
      },
      {
        text: 'App',
        link: 'https://vitepress.vuejs.org',
      },
    ],

    /**
     * @see Sidebar { @link https://vitepress.dev/reference/default-theme-config#sidebar }
     */
    sidebar: {
      '/endpoints/': [
        {
          text: 'General',
          collapsed: true,
          items: [
            { text: 'Introduction', link: 'endpoints/general/index' },
            { text: 'Types', link: 'endpoints/general/types' },
          ],
        },
        {
          text: 'Products',
          collapsed: true,
          items: [
            { text: 'Summary', link: 'endpoints/products/index' },
            { text: 'Types', link: 'endpoints/products/types' },
            { text: 'POST', link: 'endpoints/products/post' },
            { text: 'PUT', link: 'endpoints/products/put' },
            { text: 'GET', link: 'endpoints/products/get' },
            { text: 'DELETE', link: 'endpoints/products/delete' },
          ],
        },
        {
          text: 'Users',
          collapsed: true,
          items: [
            { text: 'Summary', link: 'endpoints/users/index' },
            { text: 'Types', link: 'endpoints/users/types' },
            { text: 'POST', link: 'endpoints/users/post' },
            { text: 'PUT', link: 'endpoints/users/put' },
            { text: 'GET', link: 'endpoints/users/get' },
            { text: 'DELETE', link: 'endpoints/users/delete' },
          ],
        },
      ],
      '/config/': [
        {
          text: 'Config',
          collapsed: false,
          items: [
            { text: 'Getting Started', link: 'config/index' },
            { text: 'Environments', link: 'config/environments' },
            { text: 'HTTP Verbs', link: 'config/http-verbs' },
            { text: 'HTTP Status', link: 'config/http-status' },
          ],
        },
      ],
    },
  },

  /**
   * @see i18n { @link https://vitepress.dev/guide/i18n }
   */
  locales: {
    br: {
      label: 'Português',
      lang: 'pt-BR',
      link: '/br/',
      titleTemplate: 'Documentação API',
      description: 'Uma documentação de API demo.',
      themeConfig: {
        footer: {
          message: 'Lançado sob a licença MIT.',
          copyright: 'Copyright © 2022-presente',
        },
        nav: [
          {
            text: 'Endpoints',
            link: '/br/endpoints/general/',
          },
          {
            text: 'Configuração',
            link: '/br/config/',
          },
          {
            text: 'Lang',
            items: [{ text: 'English', link: '/' }],
          },
          {
            text: 'App',
            link: 'https://vitepress.vuejs.org',
          },
        ],
        sidebar: {
          '/endpoints/': [
            {
              text: 'Geral',
              collapsed: true,
              items: [
                { text: 'Introdução', link: 'endpoints/general/index' },
                { text: 'Tipos', link: 'endpoints/general/types' },
              ],
            },
            {
              text: 'Produtos',
              collapsed: true,
              items: [
                { text: 'Sumário', link: 'endpoints/products/index' },
                { text: 'Tipos', link: 'endpoints/products/types' },
                { text: 'POST', link: 'endpoints/products/post' },
                { text: 'PUT', link: 'endpoints/products/put' },
                { text: 'GET', link: 'endpoints/products/get' },
                { text: 'DELETE', link: 'endpoints/products/delete' },
              ],
            },
            {
              text: 'Usuários',
              collapsed: true,
              items: [
                { text: 'Summary', link: 'endpoints/users/index' },
                { text: 'Tipos', link: 'endpoints/users/types' },
                { text: 'POST', link: 'endpoints/users/post' },
                { text: 'PUT', link: 'endpoints/users/put' },
                { text: 'GET', link: 'endpoints/users/get' },
                { text: 'DELETE', link: 'endpoints/users/delete' },
              ],
            },
          ],
          '/config/': [
            {
              text: 'Configuração',
              collapsed: false,
              items: [
                { text: 'Começando', link: 'config/index' },
                { text: 'Ambientes', link: 'config/environments' },
                { text: 'Verbos HTTP', link: 'config/http-verbs' },
                { text: 'Status HTTP', link: 'config/http-status' },
              ],
            },
          ],
        },
      },
    },
  },
});
