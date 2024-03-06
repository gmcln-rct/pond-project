import "./global.scss";
import React from "react";
import Head from "next/head";

import Header from "./components/header";
import Footer from "./components/footer";
// import Share from "./components/share";

import Script from "next/script";

// Fonts

import { WorkSans } from "next/font/google";
import { ProximaNova } from "next/font/google";
import { MinionPro } from "next/font/google";

export const metadata = {
  title: "Ponder | Pond Management and Monitoring",
  template: "%s | Verbing",
  description:
    "Little Bear Environmental Consulting LLC provides a variety of natural resource services for municipalities, non-profit organizations, and private landowners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        {/* <meta name="author" content="Glenn McClanan, Rio Create LLC" /> */}
        {/* <meta
          name="keywords"
          content="brazilian portuguese, verb conjugation, flashcards, language learning, verbs, flashcards, education, Brazil"
        />
        <meta name="application-name" content="Verbing" />
        <meta name="apple-mobile-web-app-title" content="Verbing" />
        <meta name="msapplication-TileColor" content="#5e376c" />
        <meta name="theme-color" content="#5e376c" />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://verbing.ninja" />
        <meta property="og:site_name" content="Verbing" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://site-social-images.s3.amazonaws.com/verbing-ogimage.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@glennmcclanan" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta
          name="twitter:image"
          content="https://site-social-images.s3.amazonaws.com/verbing-twittercard.jpg"
        />

        <link rel="canonical" href="https://verbing.ninja" />
        <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        /> */}
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
        <main>{children}</main>
        {/* <Share /> */}
        {/* <Footer /> */}
        {/* <GoogleAnalytics gaId="G-PLTQ0Q1S3Z" /> */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-PLTQ0Q1S3Z" /> */}
      </body>
    </html>
  );
}
