// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SSI Snap",
  tagline: "Self-Sovereign Identity is cool",
  url: "https://ssi-snap-docs.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "blockchain-lab-um", // Usually your GitHub org/user name.
  projectName: "ssi-snap-docs", // Usually your repo name.

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
            "https://github.com/blockchain-lab-um/ssi-snap-docs/edit/master/",
        },
        blog: {
          blogSidebarTitle: "Titles",
          blogSidebarCount: "ALL",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/blockchain-lab-um/ssi-snap-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "SSI Snap Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "get_started",
            position: "left",
            label: "Quickstart",
          },
          { to: "/docs/intro", label: "Docs", position: "left" },
          { to: "https://medium.com/@blockchainlabum", label: "Blog", position: "left" },
          {
            href: "https://github.com/blockchain-lab-um/ssi-snap",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "Documentation",
            to: "/docs/intro",
          },
          {
            label: "Website",
            href: "https://blockchain-lab.um.si/",
          },
          {
            label: "GitHub",
            href: "https://github.com/blockchain-lab-um",
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/company/blockchain-lab-um",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/blockchainlabum",
          },
          {
            label: "Email",
            href: "mailto:blockchain-lab@um.si",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Blockchain Lab:UM. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
