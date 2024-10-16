// src/templates/page.jsx
import * as React from 'react';
import { graphql } from 'gatsby';
import { Builder, builder, BuilderComponent } from '@builder.io/react';
import config from '../config';
import NotFoundPage from '../pages/404';

// Initialize the Builder SDK with your organization's API Key
// Find the API Key on: https://builder.io/account/settings
builder.init(config.builderAPIKey);

// Your template populates your Gatsby pages with your Builder page content.
function PageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const page = models.onePage?.content;

  const [content, setContent] = React.useState(page);
  const [notFound, setNotFound] = React.useState(!page);

  React.useEffect(() => {
    async function fetchBuilderContent() {
      if (typeof window !== 'undefined') {
        const content = await builder
          .get('page', {
            url: window.location.pathname,
          })
          .promise();

        if (content) {
          // Update the page content if it's not already set
          setContent(content);
          setNotFound(!content);

          // if the page title is found,
          // set the document title to the page title
          if (content?.data.title) {
            document.title = content.data.title;
          }
        }
      }
    }
    fetchBuilderContent();
  }, [window.location.pathname]);

  console.log({ content, notFound });

  // if (!Builder.isEditing && !Builder.isPreviewing && !page) {
  //   return <NotFoundPage />;
  // } else {
  //   return (
  //     <div className='hero py-0'>
  //       <BuilderComponent model='page' content={page} />
  //     </div>
  //   );
  // }

  if (notFound) {
    return <NotFoundPage />;
  } else {
    return (
      <div className='hero py-0'>
        <BuilderComponent model='page' content={content} />
      </div>
    );
  }
}

export default PageTemplate;

// pageQuery is a GraphQL query that
// fetches each page's content from Builder.
// Your content is rendered within the
// PageTemplate using BuilderComponent, provided by Builder's SDK.
export const pageQuery = graphql`
  query ($path: String!) {
    allBuilderModels {
      onePage(target: { urlPath: $path }, options: { cachebust: true }) {
        content
      }
    }
  }
`;
