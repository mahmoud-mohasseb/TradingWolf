// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: "TradingWolf",
  tagline: "IMPROVE TRADING SKILLS WITH SMART ALGORITHMS",
  url: "https://tradingwolf.com/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  // favicon: 'img/favicon.ico',
  favicon:
    "https://www.tradingwolf.com/wp-content/uploads/2022/07/tradingwolf-icon.png.webp",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "TradeWolf_trade with us",
        content: `📈&nbsp; If you like to trade, visit our website <a target="_blank" rel="noopener noreferrer" href="https://tradingwolf.com/">TradingWolf</a>! &nbsp;`,
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      metadata: [{ name: "keywords", content: "tradingwolf, blog" }],
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: "💹 Tradingwolf",
          src: "https://www.tradingwolf.com/wp-content/uploads/2022/07/tradingwolf-logo.png.webp",
          // src: "https://cdn.dribbble.com/users/60166/screenshots/17217488/media/02728f99e977931182d683b6792a17b1.jpg?compress=1&resize=400x300",
          // srcDark: `/logos/`,
          href: "/",
          target: "_self",
          width: 180,
          height: 150,
          style: {
            width: "282px",
            height: "55px",
          },
        },
        items: [
          {
            type: "localeDropdown",
            position: "right",
            dropdownItemsBefore: [],
          },
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Getting Started",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://discord.com/invite/tradingwolf",
            className: "pseudo-icon discord-icon",
            position: "right",
          },
          {
            to: "https://www.tradingwolf.com/",
            label: "OurWebsite",
            position: "left",
          },
          {
            to: "https://www.tradingwolf.com/pricing-plans/",
            label: "SignUp",
            position: "left",
          },
          {
            to: "https://www.tradingwolf.com/features/overlay-indicators/",
            label: "TradingView",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          href: "/",
          // src:"./assets/tradingwolf-icon.png",
          src: "https://www.tradingwolf.com/wp-content/uploads/2022/07/tradingwolf-icon.png.webp",
          // srcDark:
          //   "https://cdn.dribbble.com/users/60166/screenshots/17217488/media/02728f99e977931182d683b6792a17b1.jpg?compress=1&resize=400x300",
          alt: "",
        },
        links: [
          {
            title: "Docs",
            items: [
              // {
              //   label: 'Tutorial',
              //   to: '/docs/intro',
              // },
              {
                label: "FQA",
                to: "/docs/category/-fqa",
              },

              {
                label: "Technical-analytics",
                to: "/docs/category/-technical-analytics",
              },
              {
                label: "technical-oscillators",
                to: "https://www.tradingwolf.com/features/technical-oscillators/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: "Discord",
                href: "https://discord.com/invite/tradingwolf",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Affiliate Program",
                href: "https://www.tradingwolf.com/referral-terms/",
              },
              {
                label: "Refund Terms",
                href: "https://www.tradingwolf.com/refund/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}TradingWolf.com. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
