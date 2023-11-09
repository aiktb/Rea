import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitepress'

import { feed } from './theme/utils/feed-rss'

export default defineConfig({
  lang: 'en-US',
  title: 'aiktb',
  description: 'A technology-driven blog created by aiktb.',
  lastUpdated: true,
  cleanUrls: true,
  appearance: 'force-dark',
  markdown: {
    lineNumbers: true,
  },
  buildEnd: feed,
  sitemap: {
    hostname: 'https://aiktb.com',
  },
  rewrites: {
    ':blog/:num.:title.md': ':blog/:title.md',
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/ReaFooter.vue', import.meta.url)),
        },
      ],
    },
  },
  themeConfig: {
    logo: '/logo.svg',
    outline: {
      level: [2, 3],
      label: 'Table of Contents',
    },
    search: {
      provider: 'local',
    },
    editLink: {
      pattern: 'https://github.com/aiktb/Rea/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog', activeMatch: '/blog/?' },
      { text: 'Projects', link: '/projects' },
      { text: 'Memos', link: '/memos' },
    ],
    socialLinks: [
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <title>Github</title>
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/>
                </svg>`,
        },
        link: 'https://github.com/aiktb',
        ariaLabel: 'GitHub',
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <title>Twitter</title>
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"/>
                </svg>`,
        },
        link: 'https://twitter.com/aiktb39',
        ariaLabel: 'Twitter',
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <title>RSS Feed</title>
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9"/>
                </svg>`,
        },
        link: '/feed.xml',
        ariaLabel: 'RSS Feed',
      },
    ],
  },
  head: [
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
    ['meta', { name: 'theme-color', content: '#13212e' }],
    // https://developer.chrome.com/blog/auto-dark-theme/
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'preload',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Paytone+One&family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        as: 'style',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Paytone+One&family=Raleway:ital,wght@0,400;0,700;1,400;1,700&display=swap',
      },
    ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-MCQSMRVDJN',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){ dataLayer.push(arguments); }
       gtag('js', new Date());
       gtag('config', 'G-MCQSMRVDJN');`,
    ],
  ],
})
