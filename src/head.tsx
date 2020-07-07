import React from 'react';
// eslint-disable-next-line no-unused-vars
import Helmet, { HelmetProps } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';


interface HeadProps extends HelmetProps {
  description?: string
  absoluteTitle?: boolean
}

const Head: React.FC<HeadProps> = ({
  title,
  description,
  absoluteTitle,
  children,
  ...rest
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  title = title || site.siteMetadata.title
  description = description || site.siteMetadata.description;

  return (
    <Helmet {...rest}
      title={title}
      titleTemplate={absoluteTitle ? '%s' : `%s | ${description}`}
    >
      <meta name={`description`} content={description} />
      <meta property={`og:title`} content={title} />
      <meta property={`og:description`} content={description} />
      <meta property={`og:type`} content={`website`} />
      <meta name={`twitter:card`} content={`summary`} />
      <meta name={`twitter:creator`} content={site.siteMetadata.author} />
      <meta name={`twitter:title`} content={title} />
      <meta name={`twitter:description`} content={description} />

      <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Montserrat:400,700,900&display=swap' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap' />
      <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap' />

      {children}
    </Helmet>
  )
}

export default Head;
