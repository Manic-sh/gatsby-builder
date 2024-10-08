const path = require('path');
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
        publicAPIKey: '0f9e8947659247f9a7ae2506f4375e34',
        templates: {
          // Render every `page` model as a new page using the
          // src/templates/builderPage.jsx template based on the URL provided in Builder.io
          page: path.resolve('src/templates/page.jsx'),
        },
      },
    },
  ],
};
