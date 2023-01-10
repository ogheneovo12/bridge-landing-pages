import Head from 'next/head';
import React from 'react';

export interface ISEO_META {
    property?: string;
    content?: string;
}

export interface ISEO {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    metas?: ISEO_META[];
}

const SEO = ({ title, description, keywords, image, metas = [] }: ISEO) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="image" content={image} />
        <meta property="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        {Array.isArray(metas) &&
            metas?.map((info) => <meta key={info?.property} property={info?.property} content={info?.content} />)}
    </Head>
);

export default SEO;
