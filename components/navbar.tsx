"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          {/* 메뉴1 */}
          <div className="flex space-x-4">
            <div>
              <Link
                href="/"
                className="flex items-center py-5 px-2 text-gray-700"
              >
                <Image src="/logo.png" alt="logo" width={120} height={70} />

                {/* <span className="font-bold p-1 text-red-500">프롬프트마켓</span> */}
              </Link>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              <Link
                href="/create-prompt"
                className="link-p py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                전문프롬프트제작
              </Link>
              <Link
                href="/bank"
                className="link-p py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                프롬프트뱅크
              </Link>
              <Link
                href="/help"
                className="link-p py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Help Center
              </Link>
              <Link
                href="/contact"
                className="link-p py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                Contact Us
              </Link>
              <Link
                href="/faq"
                className="link-p py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                FAQs
              </Link>
              <Link
                href="/references"
                className="link-p py-5 px-3 text-gray-700 hover:text-gray-900"
              >
                구축사례
              </Link>
              
            </div>
          </div>

          {/* 메뉴2 */}
          <div className="link-p hidden lg:flex items-center space-x-1">
            <a href="#" className="py-5 px-3">
              Login
            </a>
            {/* <a
              href="#"
              className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
            >
              Signup
            </a> */}
          </div>

          {/* mobile menu */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu items */}
      <div className={classNames("lg:hidden", { hidden: !menuToggle })}>
        <Link href="/create-prompt" className="block py-2 px-4 text-sm hover:bg-gray-200">
        전문프롬프트제작
        </Link>
        <Link href="/bank" className="block py-2 px-4 text-sm hover:bg-gray-200">
        프롬프트뱅크
        </Link>
        <Link href="/help" className="block py-2 px-4 text-sm hover:bg-gray-200">
        Help Center
        </Link>
        <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">
        Contact Us
        </Link>
        <Link href="/faq" className="block py-2 px-4 text-sm hover:bg-gray-200">
        FAQs
        </Link>
        <Link href="/references" className="block py-2 px-4 text-sm hover:bg-gray-200">
        구축사례
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
