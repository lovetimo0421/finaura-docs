import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/finaura-docs/",
  title: "Finaura Docs",
  description: "Empower your digital assets with limitless possibilities",
  head: [["link", { rel: "icon", href: "/finaura-docs/logo.png" }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Getting Started", link: "/what-is-finaura" },
      { text: "Help", link: "/glossary" },
      { text: "Development", link: "/overview" },
    ],

    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "What is Finaura", link: "/what-is-finaura" },
          { text: "Tutorials", link: "/tutorials" },
        ],
      },
      {
        text: "Help",
        items: [
          { text: "Glossary", link: "/glossary" },
          { text: "Support", link: "/support" },
        ],
      },
      {
        text: "Development",
        items: [
          { text: "Overview", link: "/overview" },
          { text: "Integration", link: "/setup" },
        ],
      },
    ],

    search: {
      provider: "local",
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024-present <a href="https://www.finaura.io/">Finaura.io</a>',
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/lovetimo0421/Finaura" },
    ],
  },
});
