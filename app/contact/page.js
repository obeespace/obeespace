import React from "react";
import ContactClient from "../component/ContactClient";

export const metadata = {
  title: "Contact",
  description:
    "Contact Obeespace for high-performance websites, web apps, and product development support.",
  alternates: {
    canonical: "/contact",
  },
};

const page = () => {
  const contactPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Obeespace",
    url: "https://obeespace.com/contact",
    description:
      "Reach out to Obeespace to discuss your software product, website, or business automation goals.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <ContactClient />
    </>
  );
  };

export default page;
