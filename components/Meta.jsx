import Head from "next/head";
import React from "react";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;
