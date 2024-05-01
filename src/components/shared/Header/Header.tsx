"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ffmlogo from "@/assets/images/ffmlogo.png";
import Image from "next/image";

const Headers = () => {
  // State variable to toggle mobile menu
  const [menu, setMenu] = useState(false);

  return (
    <nav className="z-10 fixed w-full bg-base-100">
      <div className="md:max-w-[1230px] mx-auto ">
        <div className="py-4 container h-24 font-semibold flex justify-between items-center ">
          <div className=" ">
            <div className="cursor-pointer flex items-center gap-1">
              <Link href="/" className=" text-white duration-500">
                <h1 className="font-semibold text-2xl ">
                  Sea<span className="text-main"> Sprout</span>
                </h1>
              </Link>
            </div>
          </div>

          <div className=" ">
            <ul className="hidden cursor-pointer md:flex gap-7 items-center justify-center">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>About Us</li>
              <li>
                <Link href="/category">Categories</Link>
              </li>

              <li>
                <Link href="/products">All Products</Link>
              </li>
              <li>
                <Link href="/flash-sale">Flash Sale</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>

              <li>
                <Link
                  href="/dashboard/all-products"
                  className="btn duration-500 cursor-pointer"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden duration-500 transition-all">
            {!menu ? (
              <AiOutlineMenu size={25} />
            ) : (
              <AiOutlineClose className="text-main" size={25} />
            )}
          </div>
        </div>
        {/* mobile menu  */}

        <div>
          <div
            className={
              !menu
                ? "hidden"
                : "absolute duration-500 transition-all bg-main  font-semibold w-full  h-screen md:hidden px-8"
            }
          >
            <li className="py-6 list-none">
              <Link href="/">Home</Link>
            </li>
            <div className="border-b-2 border-white"></div>
            <li className="py-6 list-none"> ABout Us</li>
            <div className="border-b-2 border-white"></div>
            <li className="py-6 list-none">
              {" "}
              <Link href="/category">Categories</Link>
            </li>

            <div className="border-b-2 border-white"></div>
            <li className="py-6 list-none">
              <Link href="/products">All Products</Link>
            </li>
            <div className="border-b-2 border-white"></div>
            <li className="py-6 list-none">
              <Link href="/flash-sale">Flash Sale</Link>
            </li>
            <div className="border-b-2 border-white"></div>
            <li className="py-6 list-none">
              <Link href="/contact-us">Contact Us</Link>
            </li>

            <div className="border-b-2 border-white"></div>

            <li className="py-6 list-none">
              <Link href="/dashboard/all-products" className=" cursor-pointer">
                <button className="btn">Dashboard</button>
              </Link>
            </li>

            <div className="py-6 list-none"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
