import Link from "next/link";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content gap-4">
        <div>
          <Link href="/">
            <h1 className="font-semibold text-2xl ">
              Sea<span className="text-main"> Sprout</span>
            </h1>
          </Link>
          <span className="w-72">
            <i>
              We are many variations of passages available but the majority have
              suffered.
            </i>
          </span>
          <div className="flex items-center gap-2 mt-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="border-2 border-base-100 rounded-full shadow-md p-1"
                width="35"
                height="35"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#039be5"
                  d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                ></path>
                <path
                  fill="#fff"
                  d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="border-2 border-base-100 rounded-full shadow-md p-1"
                width="35"
                height="35"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#03A9F4"
                  d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                ></path>
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="border-2 border-base-100 rounded-full shadow-md p-1"
                width="35"
                height="35"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#0288D1"
                  d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                ></path>
                <path
                  fill="#FFF"
                  d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link href="/products" className="link link-hover">
            Trending Products
          </Link>
          <Link href="/" className="link link-hover">
            Categories
          </Link>
          <Link href="/" className="link link-hover">
            About Us
          </Link>
          <Link href="/" className="link link-hover">
            Contact Us
          </Link>
          <Link href="/" className="link link-hover">
            Customer Care
          </Link>
        </nav>
        <nav className="text-center">
          <h6 className="footer-title">Legal</h6>
          <Link href="/" className="link link-hover">
            Terms of use
          </Link>
          <Link href="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-36">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input w-52 input-bordered join-item"
              />
              <button className="btn px-3 join-item border-second bg-second hover:bg-main">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <CopyRight />
    </>
  );
};

export default Footer;
