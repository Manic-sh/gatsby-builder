import * as React from 'react';
import { Link } from 'gatsby';
import builder, { BuilderComponent } from '@builder.io/react';
import config from '../config';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

builder.init(config.builderAPIKey);

const NotFoundPage = () => {
  const [notFound, setNotFound] = React.useState(false);
  // modelName is page by default
  return notFound ? (
    <NotFound /> // Your 404 content
  ) : (
    <BuilderComponent
      model='page'
      contentLoaded={(content) => {
        if (!content) {
          setNotFound(true);
        }
      }}
    >
      {/* <div className='loading'>
        No matching page generated, checking Builder.io ...
      </div> */}
    </BuilderComponent>
  );
};
export default NotFoundPage;

export const NotFound = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to='/'>Go home</Link>.
      </p>
    </main>
  );
};

// export default NotFoundPage;

export const Head = () => <title>Not found</title>;
