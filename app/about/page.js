"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import homeImg from "../../public/homeimg.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import FloatingSocials from "../component/FloatingSocials";
import Link from "next/link";

const page = () => {
  return (
    <motion.main initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }} className="w-5/6 mx-auto py-10">
      <div className="flex flex-col gap-4 justify-center lg:w-4/6 mx-auto">
        <div className="flex justify-center"><Image src={homeImg} alt="" className="rounded-full h-32 w-32" /></div>
        <p className="lg:text-5xl text-3xl font-black text-center ">
        Crafting scalable, user-focused digital products
        </p>
        <p className="text-center text-gray-500">
          Utilizing the powers of the <span className="underline text-gray-800 font-semibold">javascript</span> ecosystem and python
          lightweight yet very friendly pluggins for <span className="underline text-gray-800 font-semibold">AI integrations</span>, we craft
          state of the art <span className="underline text-gray-800 font-semibold">full-stack</span> software solutions that prioritize performance, speed
          and euhoric customer experiences.
        </p>
        <motion.div whileTap={{ scale: 0.7 }} className="flex justify-center mt-4">
          <Link
            href="https://wa.link/r1m90e" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-black w-fit rounded-xl px-4 py-2 flex items-center gap-1 text-white hover:bg-gray-700 cursor-pointer"
          >
            Contact Me <IoMdArrowDropright />
          </Link>
        </motion.div>
      </div>
      <FloatingSocials/>
    </motion.main>
  );
};

export default page;
