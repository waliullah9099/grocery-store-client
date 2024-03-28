import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  const items = [
    <li key="item1">
      <Link href="/">Home</Link>
    </li>,
    <li key="item2">
      <Link href="about">Categories</Link>
    </li>,
    <li key="item2">
      <Link href="/products">Products</Link>
    </li>,
    <li key="item2">
      <Link href="/products">Flash Sale</Link>
    </li>,
    <li key="item2">
      <Link href="/products">About Us</Link>
    </li>,
    <li key="item2">
      <Link href="/products">Contact Us</Link>
    </li>,
  ];
  return (
    <div className="navbar bg-base-100 max-w-[1230px] mx-auto">
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
        <Link href={"/dashboard"}>Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
