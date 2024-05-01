"use client";

import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import { useAppSelector } from "@/redux/hook";

const Navbar = () => {
  const cartItem = useAppSelector((store) => store.cart.products);
  console.log(cartItem);
  const items = [
    <li key="item1">
      <Link href="/">Home</Link>
    </li>,
    <li key="item2">
      <Link href="/category">Categories</Link>
    </li>,
    <li key="item2">
      <Link href="/products">Products</Link>
    </li>,
    <li key="item2">
      <Link href="/flash-sale">Flash Sale</Link>
    </li>,
    <li key="item2">
      <Link href="/">About Us</Link>
    </li>,
    <li key="item2">
      <Link href="/">Contact Us</Link>
    </li>,
    <li key="item2">
      <Link href="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
        <span>{cartItem?.length || 0}</span>
      </Link>
    </li>,
  ];
  return (
    <div className=" bg-base-100">
      <div className="navbar max-w-[1230px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {items}
            </ul>
          </div>

          <Link href="/">
            <h1 className="font-semibold text-2xl ">
              Sea<span className="text-main"> Sprout</span>
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-lg">
            {items}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            className="btn px-10 btn-active border-main bg-main hover:bg-transparent hover:shadow-md transition-all mr-3 hover:scale-105"
            href={"/dashboard"}
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
