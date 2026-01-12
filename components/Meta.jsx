import Head from "next/head";
import React from "react";

const Meta = ({ title, href, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_URL}${href}`} />
      <meta
        name="application-name"
        content="Kocaman Hukuk & Danışmanlık | Ankara Çankaya Aile Hukuku - Ceza Hukuku - İş ve Sosyal Güvenlik Hukuku - İcra Hukuku - Tazminat Hukuku"
      />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
};

export default Meta;
