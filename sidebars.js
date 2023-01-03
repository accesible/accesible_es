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
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // document ID
      label: 'Intro', // sidebar label
    },
    {
      type: 'doc',
      id: 'accesibilidad', // document ID
      label: 'Accesibilidad', // sidebar label
    },
    {
      type: 'doc',
      id: 'recursos', // document ID
      label: 'Recursos', // sidebar label
    },
    {
      type: "category",
      label: "WCAG", // sidebar label
      link: { type: "doc", id: "wcag" },
      items: [
        {
          type: 'autogenerated',
          dirName: 'wcag', // Generate sidebar slice from docs/tutorials/easy
        },
      ],
    },
    {
      type: "category",
      label: "Pautas", // sidebar label
      link: { type: "doc", id: "pautas" },
      items: [
        {
          type: 'autogenerated',
          dirName: 'pautas', // Generate sidebar slice from docs/tutorials/easy
        },
      ],
    },
  ],
};

module.exports = sidebars;
