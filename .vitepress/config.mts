import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: 'DappyKit',
  description: 'SocialFi SDK',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          {text: 'Intro', link: '/getting-started/index.html'},
        ]
      },
      {
        text: 'Components',
        items: [
          {text: 'SDK', link: '/components/sdk'},
          {text: 'Verification', link: '/components/verification'},
          {
            text: 'Contracts', link: '/components/contracts', items: [
              {text: 'SocialConnections.sol', link: '/components/contracts/social-connections'},
              {text: 'FilesystemChanges.sol', link: '/components/contracts/filesystem-changes'},
              {text: 'UserVerification.sol', link: '/components/contracts/user-verification'},
            ]
          },
        ]
      }
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/DappyKit/'},
      {icon: 'twitter', link: 'https://twitter.com/DappyKit'},
    ]
  }
}))
