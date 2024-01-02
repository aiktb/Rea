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
    hostname: 'https://aiktb.dev',
  },
  rewrites: {
    ':blog/:num.:title.md': ':blog/:title.md',
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(new URL('./theme/components/VFooter.vue', import.meta.url)),
        },
      ],
    },
  },
  head: [
    // https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color
    ['meta', { name: 'theme-color', content: '#13212e' }],
    // https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    /* Number font: Montserrat, Letter font: Raleway, Code font: JetBrains Mono
       Raleway font has ugly number, so use Montserrat for number. */
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&text=1234567890&display=swap',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,700;1,400;1,700&family=JetBrains+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap',
      },
    ],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-TJQVDW3EZK',
      },
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
       function gtag(){ dataLayer.push(arguments); }
       gtag('js', new Date());
       gtag('config', 'G-TJQVDW3EZK');`,
    ],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: false,
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
          svg: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24">
                  <title>Github</title>
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"/>
                </svg>`,
        },
        link: 'https://github.com/aiktb',
        ariaLabel: 'GitHub',
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24">
                  <title>Twitter</title>
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 4l11.733 16H20L8.267 4zm0 16l6.768-6.768m2.46-2.46L20 4"/>
                </svg>`,
        },
        link: 'https://twitter.com/aiktb39',
        ariaLabel: 'Twitter',
      },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24">
                  <title>RSS Feed</title>
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0M4 4a16 16 0 0 1 16 16M4 11a9 9 0 0 1 9 9"/>
                </svg>`,
        },
        link: '/feed.xml',
        ariaLabel: 'RSS Feed',
      },
      // {
      //   icon: {
      //     svg: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" viewBox="0 0 24 24">
      //             <title>GitHub Sponsors</title>
      //             <path fill="currentColor" fill-opacity="0" d="M12 20L20.5 11V7L17 5.5L12 7L7 5.5L3.5 7V11L12 20Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></animate></path><path fill="none" stroke="currentColor" stroke-dasharray="30" stroke-dashoffset="30" stroke-linecap="round" stroke-width="2" d="M12 8C12 8 12 8 12.7578 7C13.6343 5.84335 14.9398 5 16.5 5C18.9853 5 21 7.01472 21 9.5C21 10.4251 20.7209 11.285 20.2422 12C19.435 13.206 12 21 12 21M12 8C12 8 12 8 11.2422 7C10.3657 5.84335 9.06021 5 7.5 5C5.01472 5 3 7.01472 3 9.5C3 10.4251 3.27914 11.285 3.75777 12C4.56504 13.206 12 21 12 21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="30;0"></animate></path>
      //           </svg>`,
      //   },
      //   link: 'https://github.com/sponsors/aiktb',
      //   ariaLabel: 'Github Sponsors',
      // },
      {
        icon: {
          svg: `<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" viewBox="0 0 24 24"
                  <title>Buy Me a Coffee</title>
                  <mask><path d="M5 6C5 4 7 6 11.5 6C16 6 19 4 19 6L19 7C19 8.5 17 9 12.5 9C8 9 5 9 5 7L5 6Z"></path></mask><mask id="iconifyVue1"><path fill="#fff" d="M10.125 18.15C10.04 17.29 9.4 11.98 9.4 11.98C9.4 11.98 11.34 12.31 12.5 11.73C13.66 11.16 14.98 11 14.98 11C14.98 11 14.4 17.96 14.35 18.46C14.3 18.96 13.45 19.3 12.95 19.3L11.23 19.3C10.73 19.3 10.21 19 10.125 18.15Z"></path></mask><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M7.5 10.5C7.5 10.5 8.33 17.43 8.5 19C8.67 20.57 10 21 11 21L13 21C14.5 21 15.875 19.86 16 19C16.125 18.14 17 7 17 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></animate></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M16.5 6C16.5 3.5 14 3 12 3C10 3 9.1 3.43 8 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;24"></animate></path></g><rect width="16" height="5" x="20" y="4" fill="currentColor" mask="url(#iconifyVue0)"><animate fill="freeze" attributeName="x" begin="0.4s" dur="0.4s" values="20;4"></animate></rect><rect width="8" height="10" x="8" y="20" fill="currentColor" fill-opacity=".3" mask="url(#iconifyVue1)"><animate fill="freeze" attributeName="y" begin="1s" dur="0.4s" values="20;10"></animate></rect>
                </svg>`,
        },
        link: 'https://www.buymeacoffee.com/aiktb',
        ariaLabel: 'Buy Me a Coffee',
      },
    ],
  },
})
