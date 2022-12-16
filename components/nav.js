import Link from "next/link";

import { useState, useEffect } from "react";

export default function Nav() {
  {
    /* effect to hide the entire component when scrolling down and show when scrolling up */
  }

  const [auth, setAuth] = useState({ auth: false, token: null });

  async function doLogin() {}

  const [scroll, setScroll] = useState(0);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScroll(window.scrollY);
  //   });
  // }, []);

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (scroll > 100) {
      setShow(false);
    } else {
      setShow(true);
    }

    return () => {
      setShow(true);
    };
  }, [scroll]);

  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        // dispaly top 0 sticky
        position: "sticky",
        top: 0,
        zIndex: 100,
        // make the transition smooth when scrolling up and down
        transition: "all 0.5s ease",
      }}
    >
      {/* a fansy minimal menu using tailwind css with home, users and uploads */}
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <span className="font-semibold text-xl tracking-tight">Home</span>
          </Link>
        </div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/users"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Users
            </Link>
            <Link
              href="/uploads"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Uploads
            </Link>
            <Link
              href="/blog"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
            >
              About
            </Link>
          </div>

          {/* navigation bar elements aligned to the right side of the screen */}
          <div>
            <Link href="/login">
              <button
                className="btn inline-block text-md px-4 py-2 leading-none rounded text-white  hover:text-gray-800 hover:bg-white mt-4 lg:mt-0"
                onClick={doLogin}
              >
                Login
              </button>
            </Link>
            <div className="inline m-1"></div>
            <Link href="/signup">
              <button className="btn inline-block text-md px-4 py-2 leading-none rounded text-white  hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
