import React from "react";
import { Link } from "@inertiajs/react";

import logo from "/public/image/Hero/LOGO.png";
import smallLogo from "/public/image/Hero/LOGO 1.png";

const menuItems = [
    { name: "Home", href: "#", isActive: true },
    { name: "About Us", href: "#", isActive: false },
    { name: "Services", href: "#", isActive: false },
    { name: "Our Team", href: "#", isActive: false },
    { name: "Testimonials", href: "#", isActive: false },
    { name: "Contact Us", href: "#", isActive: false },
];

import FBicon from "/public/image/Hero/F.png";
import YTicon from "/public/image/Hero/YT.png";
import IGicon from "/public/image/Hero/IG.png";

// Define social media links
const socialLinks = [
    { href: "https://facebook.com", icon: FBicon, alt: "Facebook" },
    { href: "https://youtube.com", icon: YTicon, alt: "YouTube" },
    { href: "https://instagram.com", icon: IGicon, alt: "Instagram" },
];

const Navbar = () => {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 pt-4">
                    <a
                        href="https://flowbite.com"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        {/* Large Logo - hidden on small screens */}
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-12 w-auto hidden md:block"
                        />

                        {/* Small Logo - visible on small screens */}
                        <img
                            src={smallLogo}
                            alt="Small Logo"
                            className="h-12 w-auto block md:hidden"
                        />
                    </a>
                    <div className="flex items-center space-x-2">
                        <Link
                            href="/login"
                            className="font-bold text-md md:text-xl hover:underline"
                        >
                            Sign In
                        </Link>
                        <span className="text-dark">|</span> {/* Separator */}
                        <Link
                            href="/register"
                            className="font-bold text-md md:text-xl hover:underline"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>
            </nav>

            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block" id="navbar-default">
                        <div className="flex justify-between items-center">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className={`block py-1 px-3 text-lg tight rounded ${
                                                item.isActive
                                                    ? "text-accent font-arialRounded tracking-tight hover:underline bg-skyBlue md:bg-transparent md:text-accent dark:text-white md:dark:text-blue-500"
                                                    : "text-accent font-arialRounded tracking-tight hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                            }`}
                                            aria-current={
                                                item.isActive
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Social Media Icons */}
                            <div className="hidden sm:flex space-x-4">
                                <h1 className="text-gray-400 font-arialRounded text-xl">
                                    Follow us:
                                </h1>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:text-gray-400"
                                    >
                                        <img
                                            src={social.icon}
                                            alt={social.alt}
                                            className="w-auto h-7"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
