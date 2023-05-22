"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="rounded-md ">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-0">
        <div className=" flex pr-3 items-center justify-end h-12">
          <Link href="/" className="pr-5">
            <img src="/logo.png" alt="logo" width={70} height={40} />
          </Link>
          <div className=" bg-blue-800 rounded-md">
            <div className=" hidden md:block">
              <div className="ml-3 mr-3 flex space-x-3">
                <Link
                  href="/create-prompt"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
                >
                  전문프롬프트제작
                </Link>
                <Link
                  href="/bank"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
                >
                  프롬프트뱅크
                </Link>
                <Link
                  href="help"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
                >
                  Help Center
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
                >
                  Contact us
                </Link>
                <Link
                  href="/faq"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
                >
                  FAQs
                </Link>
                <Link
                  href="/references"
                  className="text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
                >
                  구축사례
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-blue-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="bg-blue-800 px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/create-prompt"
              className="block text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
            >
              전문프롬프트제작
            </Link>
            <Link
              href="/bank"
              className="block text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
            >
              프롬프트뱅크
            </Link>
            <Link
              href="help"
              className="block text-gray-300 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
            >
              Help Center
            </Link>
            <Link
              href="/contact"
              className="block text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
            >
              Contact us
            </Link>
            <Link
              href="/faq"
              className="block text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
            >
              FAQs
            </Link>
            <Link
              href="/references"
              className="block text-gray-100 hover:bg-gray-700 hover:text-white px-0 py-1 rounded-md text-sm font-medium"
            >
              구축사례
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
