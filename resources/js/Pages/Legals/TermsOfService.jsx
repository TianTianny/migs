import React from "react";
import { Link, Head } from "@inertiajs/react";
import logo from "/public/image/Hero/LOGO.png";

const TermsOfService = () => {
    return (
        <>
            <Head title="Terms and Conditions" />
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
                                Terms of Service and Conditions
                            </h1>

                            <div className="prose dark:prose-invert max-w-full px-2 text-gray-700 dark:text-gray-300">
                                <p className="mb-4">
                                    Welcome to MIGS Masters: A World of Design
                                    Awaits!
                                </p>
                                <p className="mb-4">
                                    At MIGS Masters Institute for Graphics Inc.
                                    we're thrilled to welcome you to our vibrant
                                    online space dedicated to fostering
                                    exceptional design talent. These Terms of
                                    Use establish a foundation for a positive
                                    and productive experience for everyone who
                                    visits our website.
                                </p>
                                <p className="mb-4">
                                    By accessing or using our website, you agree
                                    to be bound by these Terms of Use. We
                                    believe in clear communication, so if you
                                    have any concerns about these terms, please
                                    don't hesitate to contact us before
                                    proceeding.
                                </p>

                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Exploring MIGS Masters Responsibly:
                                </h2>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Respectful Community:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters is a hub for creativity and
                                    collaboration. We encourage respectful
                                    behavior and dialogue. Any activity deemed
                                    offensive, harassing, or illegal will not be
                                    tolerated.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Content Ownership:
                                </h4>
                                <p className="mb-4">
                                    The content displayed on our website,
                                    including text, images, videos, design
                                    elements, and logos, is the intellectual
                                    property of MIGS Masters or its respective
                                    licensors. Copying, distributing, modifying,
                                    or reproducing this content without our
                                    express written permission is strictly
                                    prohibited.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Authorized Use:
                                </h4>
                                <p className="mb-4">
                                    Our website is intended for lawful and
                                    educational purposes. Activities that
                                    violate the law, infringe upon the rights of
                                    others, or disrupt website operations are
                                    strictly forbidden.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Your Responsibilities:
                                </h4>
                                <p className="mb-4">
                                    Accurate Information: If you create an
                                    account on our website, you are responsible
                                    for providing accurate and complete
                                    information.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Maintaining Security:
                                </h4>
                                <p className="mb-4">
                                    It is your responsibility to safeguard your
                                    login credentials and keep your account
                                    information secure.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Staying Up-to-Date:
                                </h4>
                                <p className="mb-4">
                                    Email Communication: We primarily use email
                                    to communicate official announcements,
                                    important updates, and valuable resources
                                    related to the design world. Please ensure
                                    your email address associated with MIGS
                                    Masters is current and active.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Multiple Channels:
                                </h4>
                                <p className="mb-4">
                                    In addition to email, we recommend regularly
                                    checking our website and following us on
                                    social media (if applicable) to stay
                                    informed about new content, upcoming events,
                                    and design industry trends.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Taking Responsibility:
                                </h4>
                                <p className="mb-4">
                                    It's your responsibility to stay informed.
                                    MIGS Masters is not liable for any
                                    consequences arising from your inability to
                                    receive or respond to notifications sent
                                    through email, the website, or social media.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Addressing Liability:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters, its staff, officers,
                                    directors, and representatives cannot be
                                    held responsible for any loss, harm, or
                                    damages arising from your use of our
                                    website. This includes direct, indirect,
                                    incidental, or consequential damages. This
                                    limitation of liability applies regardless
                                    of the legal basis for the claim, such as
                                    negligence, contract, or any other legal
                                    theory.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Account Termination:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters reserves the right to terminate
                                    user accounts or services under certain
                                    circumstances, particularly in cases where
                                    the Terms of Use are violated. Whenever
                                    possible, we will provide users with advance
                                    notice and the reason for termination.
                                    However, we also reserve the right to take
                                    immediate action in certain situations. MIGS
                                    Masters values open communication and may
                                    offer an appeals process for users who wish
                                    to challenge a service or account
                                    termination decision.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Third-Party Links:
                                </h4>
                                <p className="mb-4">
                                    Our website may contain links to external
                                    resources, such as design software
                                    tutorials, industry blogs, or online
                                    portfolios. MIGS Masters is not responsible
                                    for the content or actions of these
                                    third-party sites. We encourage you to
                                    review the privacy policies and terms of use
                                    of any external links you visit, as they
                                    operate independently of MIGS Masters.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Building a Thriving Design Community:
                                </h4>
                                <p className="mb-4">
                                    By staying informed and actively engaging
                                    with MIGS Masters, you contribute to a
                                    vibrant online design community. We
                                    encourage you to explore all that we offer
                                    and embark on a rewarding design journey
                                    with us! If you have any questions, please
                                    don't hesitate to contact us.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Limitations of Liability:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters strives to provide accurate and
                                    up-to-date information on our website.
                                    However, we cannot guarantee the accuracy,
                                    completeness, or timeliness of the content.
                                    Additionally, we are not responsible for the
                                    content of external websites linked from our
                                    site. You use our website at your own risk.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    A Continuously Evolving Landscape:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters reserves the right to modify
                                    the content and functionality of our website
                                    at any time. We may also update these Terms
                                    of Use periodically. Your continued use of
                                    the website following any modifications
                                    constitutes your acceptance of the changes.
                                </p>

                                <h4 className="text-md font-semibold text-gray-800 dark:text-gray-100 mb-4">
                                    Termination:
                                </h4>
                                <p className="mb-4">
                                    MIGS Masters reserves the right to terminate
                                    your access to our website for any violation
                                    of these Terms of Use.
                                </p>
                                <p className="mb-4">
                                    If you have any questions about these Terms
                                    of Use, please don't hesitate to contact us.
                                    We value open communication and are here to
                                    assist you.
                                </p>
                                <p className="mb-4">
                                    Thank you for choosing MIGS Masters! We look
                                    forward to being a part of your creative
                                    journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsOfService;
