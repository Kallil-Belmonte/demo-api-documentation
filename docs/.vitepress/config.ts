import { defineConfig } from 'vitepress';

export default defineConfig({
  /**
   * @see AppConfigs { @link https://vitepress.vuejs.org/config/app-configs }
   */
  lang: 'en-US',
  title: 'Demo',
  titleTemplate: 'API Documentation',
  description: 'A simple API documentation.',
  head: [
    ['link', { rel: 'shortcut icon', href: '/images/favicon.ico', type: 'image/x-icon' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  /**
   * @see ThemeConfigs { @link https://vitepress.vuejs.org/config/theme-configs }
   * @see ThemeIntroduction { @link https://vitepress.vuejs.org/guide/theme-introduction }
   */
  themeConfig: {
    logo: '/images/logo.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present',
    },

    localeLinks: {
      text: 'Lang',
      items: [{ text: 'Português', link: '/br/' }],
    },

    /**
     * @see Nav { @link https://vitepress.vuejs.org/guide/theme-nav }
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
        text: 'App',
        link: 'https://vitepress.vuejs.org',
      },
    ],

    /**
     * @see Sidebar { @link https://vitepress.vuejs.org/guide/theme-sidebar#sidebar }
     */
    sidebar: {
      '/endpoints/': [
        {
          text: 'General',
          collapsible: true,
          items: [
            { text: 'Introduction', link: 'endpoints/general/' },
            { text: 'Types', link: 'endpoints/general/types' },
          ],
        },
        {
          text: 'Products',
          collapsible: true,
          items: [
            { text: 'Summary', link: 'endpoints/products/' },
            { text: 'Types', link: 'endpoints/products/types' },
            { text: 'POST', link: 'endpoints/products/post' },
            { text: 'PUT', link: 'endpoints/products/put' },
            { text: 'GET', link: 'endpoints/products/get' },
            { text: 'DELETE', link: 'endpoints/products/delete' },
          ],
        },
        {
          text: 'Users',
          collapsible: true,
          items: [
            { text: 'Summary', link: 'endpoints/users/' },
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
          collapsible: true,
          items: [
            { text: 'Getting Started', link: 'config/' },
            { text: 'Environments', link: 'config/environments' },
            { text: 'HTTP Verbs', link: 'config/http-verbs' },
            { text: 'HTTP Status', link: 'config/http-status' },
          ],
        },
      ],
    },
  },
});
