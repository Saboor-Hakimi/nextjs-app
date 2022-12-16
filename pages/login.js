import Nav from "../components/nav";

import Footer from "../components/footer";
import { useState } from "react";

import axios from "axios";

export default function About() {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [auth, setAuth] = useState({ auth: false, token: null });

  async function doLogin() {
    axios
      .post(backendUrl + "/api/auth/local", {
        identifier: "rypuxi@mailinator.com",
        password: "Pa$$w0rd!",
      })
      .then((response) => {
        setAuth({ auth: true, token: response.data.jwt });
        localStorage.setItem("token", response.data.jwt);
      });
  }

  // scroll smooth
  const scrollSmooth = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Nav />
      <div className="bg-dark">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-white">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-center lg:py-16 lg:px-8">
          {/* button to login the user */}
          <button className="btn btn-primary m-2 btn-wide" onClick={doLogin}>
            Login
          </button>
        </div>
      </div>

      {/* div with height to fill the page */}

      <div className="h-24"></div>
      <div className="h-24"></div>
      <div className="h-12"></div>

      {/* a floating button in bottom left to scroll back to top */}

      <div className="fixed bottom-0 right-0 m-4">
        <a href="" onClick={scrollSmooth}>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </button>
        </a>
      </div>

      <Footer />
    </div>
  );
}
