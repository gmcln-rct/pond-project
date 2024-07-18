import "./global.scss";
import React from "react";
import Head from "next/head";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title:
    "Little Bear Environmental | Environmental Consultants for NY & NJ",
  template: "%s | Little Bear Environmental",
  description:
    "Little Bear Environmental provides a variety of natural resource services for municipalities, non-profit organizations, and private landowners.",
};

import Script from "next/script";

const gaTag = process.env.GOOGLE_ANALYTICS;
const gaScript = "https://www.googletagmanager.com/gtag/js?id=" + gaTag;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="author" content="Little Bear Environmental" />
        <meta
          name="keywords"
          content="lake management, pond management, aquatic plants, pesticide application, invasive species control, 
          pond restoration, algae control, aquatic weed control, water quality testing, 
          environmental consulting, aeration systems, 
          sustainable lake management, eco-friendly pond care, 
          New York, New Jersey, NY, NJ, Westchester County, Long Island, Hudson Valley, North Jersey, Central Jersey"
        />
        <meta name="application-name" content="Little Bear Environmental" />
        <meta
          name="apple-mobile-web-app-title"
          content="Little Bear Environmental"
        />
        <meta name="msapplication-TileColor" content="#5e376c" />
        <meta name="theme-color" content="#5e376c" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://Littlebearenvironmental.com" /> */}
        <meta property="og:site_name" content="Little Bear Environmental" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="../public/images/social/pond-og-image.jpg"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
        {/* Google Analytics */}
      </Head>
      {/* <Script src={gaScript}></Script> */}
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
