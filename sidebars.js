/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  eventStreamSidebar: [
    {
      type: "category",
      label: "eventStream",
      link: {
        type: "generated-index",
        title: "Core Features",
        description: "Introduction to nexSys Features",
        keywords: ["eventStream"],
      },
      items: [
        "eventStream/installation",
        {
          type: "category",
          label: "Affs",
          link: {
            type: "generated-index",
            title: "Core Features",
            description: "Introduction to nexSys Features",
            keywords: ["nexSys"],
          },
          items: ["nexSys/affs/functions"],
        },
      ],
    },
  ],
  nexSysSidebar: [
    {
      type: "category",
      label: "nexSys",
      link: {
        type: "generated-index",
        title: "Core Features",
        description: "Introduction to nexSys Features",
        keywords: ["nexSys"],
      },
      items: [
        {
          type: "category",
          label: "Affs",
          link: {
            type: "generated-index",
            title: "Core Features",
            description: "Introduction to nexSys Features",
            keywords: ["nexSys"],
          },
          items: ["nexSys/affs/functions"],
        },
      ],
    },
  ],
  nexMapSidebar: [
    {
      type: "category",
      label: "nexSys",
      link: {
        type: "generated-index",
        title: "Core Features",
        description: "Introduction to nexSys Features",
        keywords: ["nexSys"],
      },
      items: [
        {
          type: "category",
          label: "Affs",
          link: {
            type: "generated-index",
            title: "Core Features",
            description: "Introduction to nexSys Features",
            keywords: ["nexSys"],
          },
          items: ["nexSys/affs/functions"],
        },
      ],
    },
  ],
  nexGuiSidebar: [
    {
      type: "category",
      label: "nexSys",
      link: {
        type: "generated-index",
        title: "Core Features",
        description: "Introduction to nexSys Features",
        keywords: ["nexSys"],
      },
      items: [
        {
          type: "category",
          label: "Affs",
          link: {
            type: "generated-index",
            title: "Core Features",
            description: "Introduction to nexSys Features",
            keywords: ["nexSys"],
          },
          items: ["nexSys/affs/functions"],
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;

const SidebarsConfig = {
  docs: [
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "installation",
        "configuration",
        "playground",
        "typescript-support",
      ],
    },
    {
      type: "category",
      label: "Guides",
      link: {
        type: "generated-index",
        title: "Docusaurus Guides",
        description:
          "Let's learn about the most important Docusaurus concepts!",
        keywords: ["guides"],
        image: "/img/docusaurus.png",
      },
      items: [
        "guides/creating-pages",
        {
          type: "category",
          label: "Docs",
          link: {
            type: "doc",
            id: "guides/docs/introduction",
          },
          items: [
            "guides/docs/create-doc",
            {
              type: "category",
              label: "Sidebar",
              link: {
                type: "doc",
                id: "guides/docs/sidebar/index",
              },
              items: [
                "guides/docs/sidebar/items",
                "guides/docs/sidebar/autogenerated",
                "guides/docs/sidebar/multiple-sidebars",
              ],
            },
            "guides/docs/versioning",
            "guides/docs/multi-instance",
          ],
        },
        "blog",
        {
          type: "category",
          label: "Markdown Features",
          link: {
            type: "doc",
            id: "guides/markdown-features/introduction",
          },
          items: [
            "guides/markdown-features/react",
            "guides/markdown-features/tabs",
            "guides/markdown-features/code-blocks",
            "guides/markdown-features/admonitions",
            "guides/markdown-features/toc",
            "guides/markdown-features/assets",
            "guides/markdown-features/links",
            "guides/markdown-features/plugins",
            "guides/markdown-features/math-equations",
            "guides/markdown-features/diagrams",
            "guides/markdown-features/head-metadata",
          ],
        },
        "styling-layout",
        "swizzling",
        "static-assets",
        "search",
        "browser-support",
        "seo",
        "using-plugins",
        "deployment",
        {
          type: "category",
          label: "Internationalization",
          link: { type: "doc", id: "i18n/introduction" },
          items: [
            {
              type: "doc",
              id: "i18n/tutorial",
              label: "Tutorial",
            },
            {
              type: "doc",
              id: "i18n/git",
              label: "Using Git",
            },
            {
              type: "doc",
              id: "i18n/crowdin",
              label: "Using Crowdin",
            },
          ],
        },
        "guides/whats-next",
      ],
    },
    {
      type: "category",
      label: "Advanced Guides",
      link: { type: "doc", id: "advanced/index" },
      items: [
        "advanced/architecture",
        "advanced/plugins",
        "advanced/routing",
        "advanced/ssg",
        "advanced/client",
      ],
    },
    {
      type: "category",
      label: "Upgrading",
      link: {
        type: "doc",
        id: "migration/index",
      },
      items: [
        "migration/v3",
        // TODO do we want to keep upgrade docs for older Docusaurus versions?
        // It contains links to docs of current version :/
        {
          type: "category",
          label: "To Docusaurus v2",
          items: [
            "migration/v2/migration-overview",
            "migration/v2/migration-automated",
            "migration/v2/migration-manual",
            "migration/v2/migration-versioned-sites",
            "migration/v2/migration-translated-sites",
          ],
        },
      ],
    },
  ],
  api: [
    "cli",
    "docusaurus-core",
    {
      type: "autogenerated",
      dirName: "api",
    },
  ],
};
