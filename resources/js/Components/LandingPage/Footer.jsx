import React from "react";
import Logo from "/public/image/Footer/LOGO 1.png";

const Footer = () => {
    const links = [
        {
            title: "Quick Links",
            items: [
                "Home",
                "About Us",
                "Services",
                // "Our Team",
                // "Testimonials",
                // "Contact Us",
            ],
        },
        {
            title: "Follow us",
            items: [
                {
                    name: "Facebook",
                    url: "https://www.facebook.com/Migsinstitute4graphics/",
                },
                {
                    name: "Youtube",
                    url: "https://www.youtube.com/@MigsMastersInstituteforGraphic",
                },
            ],
        },
        { title: "Legal", items: ["Privacy Policy", "Terms & Conditions"] },
    ];

    return (
        <footer className="bg-primary dark:bg-gray-900 pt-4">
            <div className="container mx-auto max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center">
                            <img
                                src={Logo}
                                className="h-8 me-3"
                                alt="MIGSINC Logo"
                            />
                            <span className="text-2xl uppercase text-white font-semibold dark:text-white">
                                MIGSINC
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {links.map((section, index) => (
                            <div key={index}>
                                <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                                    {section.title}
                                </h2>
                                <ul className="text-white dark:text-gray-400 font-medium">
                                    {section.items.map((item, idx) =>
                                        typeof item === "string" ? (
                                            <li key={idx} className="mb-4">
                                                <a
                                                    href="#"
                                                    className="hover:underline"
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ) : (
                                            <li key={idx} className="mb-4">
                                                <a
                                                    href={item.url}
                                                    className="hover:underline"
                                                    target="_blank"
                                                >
                                                    {item.name}
                                                </a>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-white dark:text-gray-400">
                        © 2024{" "}
                        <a href="#" className="hover:underline">
                            MIGSINC
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:mt-0">
                        <span className="text-sm text-white dark:text-gray-400">
                            Designed & Developed By{" "}
                            <a
                                href="https://bb88advertising.com/"
                                target="_blank"
                                className="hover:underline"
                            >
                                BB 88 Advertising and Digital Solutions Inc.
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
