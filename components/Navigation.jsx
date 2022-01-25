import { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="flex items-center p-3 flex-wrap text-white bg-purple-700">
      <div
        id="logo"
        className="lg:text-xl p-2 mr-4 inline-flex items-center font-serif font-bold"
      >
        <Link href="/">
        <span>
        <img className="h-10 w-10" src="/assets/Logo.png" alt="Online Spaces" />
        </span>
        </Link>
      </div>
      <button
        onClick={() => setShowNav(!showNav)}
        type="button"
        className="inline-flex p-3 text-white hover:text-gray-300 focus:text-white focus:outline-none lg:hidden ml-auto"
      >
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 -53 384 384"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </button>

      <div className="w-full flex-grow lg:inline-flex lg:flex-grow lg:w-auto">
        <div
          className={
            "lg:inline-flex lg:flex-row lg:ml-auto flex flex-col " +
            (showNav ? "" : "hidden")
          }
        >
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-600">
              Home
            </a>
          </Link>

          <Link href="/About">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-600">
              About
            </a>
          </Link>
          <Link href="/Contact">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-600">
              Contact Us
            </a>
          </Link>
          <Link href="/Pricing">
            <a className="lg:inline-flex lg:w-auto px-3 py-2 rounded hover:bg-blue-600">
              Pricing
            </a>
          </Link>
        <Link href="/SignUp"><button className="text-white ml-2 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-bold">
        Try One Free Meeting!
        </button></Link>
        </div>
      </div>
      
    </header>
  );
};

export default Navigation;