const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `My Builder Site`,
    siteUrl: `https://qa-milancorpbuilder.netlify.app/`,
  },
  plugins: [
    {
      resolve: '@builder.io/gatsby',
      options: {
        // Replace with your Public API Key
        publicAPIKey: process.env.GATSBY_BUILDER_IO,
        templates: {
          // Render every `page` model as a new page using the
          // src/templates/builderPage.jsx template based on the URL provided in Builder.io
          page: path.resolve('src/templates/page.jsx'),
        },
      },
    },
  ],
};
