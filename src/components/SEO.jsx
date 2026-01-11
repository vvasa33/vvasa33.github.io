import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  canonical,
  keywords,
  image,
  twitterHandle,
  author = "Viswanath Vasa",
  name = "Viswanath Vasa",
  type = "website"
}) {
  const siteUrl = "https://vvasa33.github.io";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | ${name}` : name}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content="index,follow" />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || name} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={`${siteUrl}${image}`} />}
      <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />
      <meta property="og:site_name" content={name} />
      {/* Add og:image when you have a preview image */}
      {/* <meta property="og:image" content={`${siteUrl}/og-image.jpg`} /> */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      <meta name="twitter:title" content={title || name} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}
      {/* <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} /> */}
    </Helmet>
  );
}
