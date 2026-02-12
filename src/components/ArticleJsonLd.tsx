interface ArticleJsonLdProps {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    author: string;
    url: string;
}

export function ArticleJsonLd({
    title,
    description,
    image,
    datePublished,
    author,
    url,
}: ArticleJsonLdProps) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        image,
        datePublished,
        author: {
            "@type": "Organization",
            name: author,
        },
        publisher: {
            "@type": "Organization",
            name: "Hormel Company Limited",
            logo: {
                "@type": "ImageObject",
                url: `${url.split("/blog")[0]}/hormel_logo_black_main.png`,
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
