const SEO = ({
  Helmet,
  title,
  description,
  noindex = false,
  canonicalUrl,
  image,
  imageAlt,
  imageWidth = "1200",
  imageHeight = "630",
  type = "website",
  siteName = import.meta.env.VITE_WEBSITE_NAME,
  locale = "en_US",
  author,
  publishedAt,
  updatedAt,
  keywords,
  twitterHandle,
  twitterCardType = "summary_large_image",
  themeColor,
  // Article-specific
  articleSection,
  articleTags = [],
}) => {
  if (!Helmet) return null;

  const fullTitle = `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* ── Basic ── */}
      {title && <title>{fullTitle}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && Array.isArray(keywords) && keywords?.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      {author && <meta name="author" content={author} />}
      {themeColor && <meta name="theme-color" content={themeColor} />}

      {/* ── Robots ── */}
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />

      {/* ── Canonical ── */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      {title && <meta property="og:title" content={fullTitle} />}
      {description && <meta property="og:description" content={description} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {siteName && <meta property="og:site_name" content={siteName} />}
      {locale && <meta property="og:locale" content={locale} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:secure_url" content={image} />}
      {image && imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      {image && <meta property="og:image:width" content={imageWidth} />}
      {image && <meta property="og:image:height" content={imageHeight} />}
      {image && <meta property="og:image:type" content="image/jpeg" />}

      {/* ── Article-specific OG ── */}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {type === "article" && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === "article" && updatedAt && (
        <meta property="article:modified_time" content={updatedAt} />
      )}
      {type === "article" && articleSection && (
        <meta property="article:section" content={articleSection} />
      )}
      {type === "article" &&
        articleTags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* ── Twitter Card ── */}
      <meta name="twitter:card" content={twitterCardType} />
      {twitterHandle && (
        <meta
          name="twitter:site"
          content={`@${twitterHandle.replace("@", "")}`}
        />
      )}
      {twitterHandle && (
        <meta
          name="twitter:creator"
          content={`@${twitterHandle.replace("@", "")}`}
        />
      )}
      {title && <meta name="twitter:title" content={fullTitle} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {image && imageAlt && (
        <meta name="twitter:image:alt" content={imageAlt} />
      )}

      {/* ── Dates ── */}
      {publishedAt && (
        <meta name="article:published_time" content={publishedAt} />
      )}
      {updatedAt && <meta name="article:modified_time" content={updatedAt} />}
    </Helmet>
  );
};

export default SEO;
