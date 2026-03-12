import Image from "next/image";
import React from "react";
import homeImg from "../../public/homeimg.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import FloatingSocials from "../component/FloatingSocials";
import Link from "next/link";
import AnimatedMain from "../component/AnimatedMain";

export const metadata = {
  title: "About",
  description:
    "Learn how Obeespace designs scalable software products with a strong focus on performance, reliability, and user experience.",
  alternates: {
    canonical: "/about",
  },
};

const page = () => {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Obinna Ugwu",
    url: "https://obeespace.com/about",
    image: "https://obeespace.com/homeimg.jpg",
    jobTitle: "Full-Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Obeespace",
    },
    sameAs: [
      "https://github.com/obeespace",
      "https://instagram.com/0beenna",
      "https://www.linkedin.com/in/obinna-ugwu-04b0a617b/",
    ],
  };

  return (
    <AnimatedMain className="w-5/6 mx-auto py-10" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="flex flex-col gap-4 justify-center lg:w-4/6 mx-auto">
        <div className="flex justify-center">
          <Image
            src={homeImg}
            alt="Portrait of Obinna Ugwu"
            className="rounded-full h-32 w-32"
            priority
            sizes="128px"
          />
        </div>
        <p className="lg:text-5xl text-3xl font-black text-center ">
          Crafting scalable, user-focused digital products
        </p>
        <p className="text-center text-gray-500">
          Utilizing the powers of the <span className="underline text-gray-800 font-semibold">javascript</span> ecosystem and python
          lightweight yet very friendly pluggins for <span className="underline text-gray-800 font-semibold">AI integrations</span>, we craft
          state of the art <span className="underline text-gray-800 font-semibold">full-stack</span> software solutions that prioritize performance, speed
          and euhoric customer experiences.
        </p>
        <div className="flex justify-center mt-4">
          <Link
            href="https://wa.link/r1m90e" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black w-fit rounded-xl px-4 py-2 flex items-center gap-1 text-white hover:bg-gray-700 cursor-pointer"
          >
            Contact Me <IoMdArrowDropright />
          </Link>
        </div>
      </div>
      <FloatingSocials />
    </AnimatedMain>
  );
};

export default page;
