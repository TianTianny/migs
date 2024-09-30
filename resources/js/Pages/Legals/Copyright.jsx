import React from "react";
import { Link, Head } from "@inertiajs/react";
import logo from "/public/image/Hero/LOGO.png";

const Copyright = () => {
    return (
        <>
            <Head title="Copyright" />
            <section className="font-sans text-gray-900 dark:text-gray-100 antialiased h-full overflow-y-auto">
                <div class="pt-4 bg-gray-100 dark:bg-gray-900">
                    <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                        <Link href={route("landing.show")}>
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        </Link>

                        <div className="w-full sm:max-w-5xl mt-6 p-8 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                MIGS Masters Institute for Graphics Inc.
                                Copyright Notice
                            </h1>

                            <div className="prose dark:prose-invert max-w-full px-2 text-gray-700 dark:text-gray-300">
                                <p className="mb-4">
                                    The core principles of our Copyright Notice
                                    remain essential: protecting our creative
                                    work and fostering respect for intellectual
                                    property. Here's some additional information
                                    to consider:
                                </p>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Protecting Creativity: Respecting Copyright
                                </h4>
                                <p class="mb-4">
                                    At MIGS Masters Institute for Graphics Inc.,
                                    we champion both artistic expression and
                                    intellectual property rights. This Copyright
                                    Notice outlines the ownership of the
                                    creative materials displayed on our website
                                    and how you can use them responsibly.
                                </p>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Copyrighted Material:
                                </h4>
                                <p class="mb-4">
                                    The content displayed on our website,
                                    including text, course materials, logos,
                                    images, design elements, videos, and other
                                    creative works, is protected by copyright
                                    laws and international treaties. This
                                    material is the exclusive property of MIGS
                                    Masters or its respective licensors.
                                </p>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Authorized Use:
                                </h4>
                                <p class="mb-4">
                                    You are welcome to browse our website and
                                    access its content for personal,
                                    non-commercial purposes. You may also share
                                    snippets of our content with proper
                                    attribution, including a clear link back to
                                    our website{" "}
                                    <a
                                        href="migsinc.com"
                                        target="_blank"
                                        className="text-blue-500 hover:underline"
                                    >
                                        www.migsinc.com
                                    </a>
                                    .
                                </p>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Copyright Infringement:
                                </h4>
                                <p class="mb-4">
                                    MIGS Masters takes copyright infringement
                                    seriously. If you believe that any content
                                    displayed on our website infringes upon your
                                    copyright, please contact us immediately
                                    with a detailed notification. We will take
                                    appropriate action in accordance with
                                    applicable laws.
                                </p>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Respecting Rights:
                                </h4>
                                <p class="mb-4">
                                    By respecting copyright, we can foster a
                                    vibrant and inspiring online space for
                                    aspiring designers and design education. We
                                    appreciate your cooperation in protecting
                                    intellectual property.
                                </p>

                                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
                                    MIGS Masters Institute for Graphics Inc.:
                                    Copyright Considerations Beyond the Basics
                                </h1>
                                <p class="mb-4">
                                    The core principles of copyright are
                                    outlined in our Copyright Notice. This
                                    additional information delves deeper into
                                    specific scenarios you may encounter:
                                </p>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Using MIGS Masters Resources in Your Work:
                                </h4>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>
                                        <span className="font-bold">
                                            Course Materials:
                                        </span>
                                        The educational materials provided in
                                        MIGS Masters programs, including
                                        handouts, presentations, and video
                                        lectures, are for your personal learning
                                        purposes only. You may not share them
                                        with others outside the program without
                                        permission.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Fonts and Stock Photos:
                                        </span>
                                        Certain fonts and stock photos used in
                                        MIGS Masters resources may have specific
                                        licensing terms. These terms will
                                        typically be outlined within the course
                                        materials themselves. Always respect the
                                        usage rights associated with such
                                        resources.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Creating Derivative Works:
                                        </span>
                                        If a MIGS Masters project prompts you to
                                        create derivative works (e.g., a logo
                                        inspired by a design concept), ensure
                                        you have the necessary rights to use any
                                        underlying creative elements. This may
                                        involve using royalty-free resources or
                                        obtaining permission from the copyright
                                        holder.
                                    </li>
                                </ul>

                                <h4 class="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Sharing Your Work:
                                </h4>
                                <ul className="list-disc pl-5 space-y-2 mb-6">
                                    <li>
                                        <span className="font-bold">
                                            Student Portfolios:
                                        </span>
                                        We encourage you to showcase your work
                                        created at MIGS Masters in your online
                                        portfolio. When doing so, it's important
                                        to clearly identify MIGS Masters as the
                                        source of any educational materials used
                                        in your projects.
                                    </li>
                                    <li>
                                        <span className="font-bold">
                                            Client Work:
                                        </span>
                                        For design work you create for clients,
                                        ensure you have the necessary rights to
                                        use any resources you incorporate into
                                        your final product. This includes fonts,
                                        stock photos, and any elements not
                                        originally created by you.
                                    </li>
                                </ul>

                                <p className="mb-4">
                                    We hope this additional information
                                    clarifies copyright considerations when
                                    using MIGS Masters resources and creating
                                    your own design work. If you have any
                                    further questions, please don't hesitate to
                                    contact us!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Copyright;
