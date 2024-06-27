import "./global.scss";
import React from "react";
import Head from "next/head";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Little Bear Environmental | Environmental consulting serving New York & New Jersey",
  template: "%s | Little Bear Environmental",
  description:
    "Little Bear Environmental provides a variety of natural resource services for municipalities, non-profit organizations, and private landowners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />

        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
        {/* <meta name="author" content="Glenn McClanan, Rio Create LLC" /> */}
        <meta
          name="keywords"
          content="lake management,
          pond management,
          aquatic ecosystem management,
          lake and pond maintenance,
          lake and pond restoration, algae control
          aquatic weed control, water quality testing
          New York environmental consulting, New Jersey environmental consulting"
        />
        <meta name="application-name" content="Little Bear Environmental" />
        <meta name="apple-mobile-web-app-title" content="Little Bear Environmental" />
        <meta name="msapplication-TileColor" content="#5e376c" />
        <meta name="theme-color" content="#5e376c" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://Littlebearenvironmental.ninja" /> */}
        <meta property="og:site_name" content="Little Bear Environmental" />
        <meta property="og:locale" content="en_US" />
        {/* <meta
          property="og:image"
          content="https://site-social-images.s3.amazonaws.com/verbing-ogimage.jpg"
        />` */}

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body className="main-layout">
        <Header />
        <div className="content-wrapper">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
