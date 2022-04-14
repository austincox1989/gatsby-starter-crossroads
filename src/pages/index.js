import * as React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(getSettings);
  const logo = data.kontentItemSettings.elements.footer_logo.value[0]
  console.log(logo.url)

  return (
    <Layout>
      <SEO title='Home' />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src={logo.url}
        width={logo.width}
        quality={75}
        formats={['auto', 'webp', 'avif']}
        alt='A Gatsby astronaut'
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to='/page-2/'>Go to page 2</Link> <br />
        <Link to='/using-typescript/'>Go to "Using TypeScript"</Link> <br />
        <Link to='/using-ssr'>Go to "Using SSR"</Link> <br />
        <Link to='/using-dsg'>Go to "Using DSG"</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;

export const getSettings = graphql`
  query SettingsQuery {
    kontentItemSettings {
      id
      elements {
        header_logo {
          value {
            description
            height
            url
            width
          }
        }
        footer_logo {
          value {
            description
            height
            url
            width
          }
        }
      }
    }
  }
`;
