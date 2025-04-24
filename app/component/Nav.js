"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt4 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { IoMdArrowDropright } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from "next/navigation";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="w-5/6 mx-auto py-5">
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center">
        <div>
          <Link href="/">
            <h1 className="font-semibold text-2xl">obeespace</h1>
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <Link href="/about">
            <p
              className={
                pathname === "/about"
                  ? "border-b-2 border-gray-500 px-1 py-1"
                  : "text-black"
              }
            >
              About
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={
                pathname === "/contact"
                  ? "border-b-2 border-gray-500 px-1 py-1"
                  : "text-black"
              }
            >
              Contact
            </p>
          </Link>
        </div>

        <button className="bg-gray-300 rounded-xl px-4 py-2 text-black hover:bg-gray-500 cursor-pointer">
          Download CV
        </button>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between">
        <div>
          <Link href="/">
            <h1 className="font-semibold text-2xl">obeespace</h1>
          </Link>
        </div>

        <div className="flex gap-3">
          <Link href="cart">
            <MdOutlineShoppingCart className="text-2xl" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative">
              {toggleMenu ? (
                <motion.p whileTap={{ scale: 0.7 }}>
                  <IoMdClose
                    className="text-2xl cursor-pointer"
                    onClick={() => setToggleMenu((prev) => !prev)}
                  />
                </motion.p>
              ) : (
                <motion.p whileTap={{ scale: 0.7 }}>
                  <HiMenuAlt4
                    className="text-2xl cursor-pointer"
                    onClick={() => setToggleMenu((prev) => !prev)}
                  />
                </motion.p>
              )}
            </div>
          </div>
        </div>
        {toggleMenu && (
          <div className="bg-gray-100 z-50 text-gray-900 h-max w-40 absolute top-20 right-8 py-4 rounded-xl shadow-md">
            <div className="flex flex-col gap-3 items-center w-5/6 mx-auto text-lg font-semibold ">
              <Link
                href="/about"
                className="hover:bg-gray-700 w-full hover:text-white text-center rounded-md"
              >
                <p
                  className=" hover:border-green-700 px-3 py-2"
                  onClick={() => setToggleMenu((prev) => !prev)}
                >
                  Shop
                </p>
              </Link>

              <Link
                href="/contact"
                className="hover:bg-gray-700 w-full hover:text-white text-center rounded-md"
              >
                <p
                  className=" hover:border-green-700 px-3 py-2"
                  onClick={() => setToggleMenu((prev) => !prev)}
                >
                  events
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
