import React, { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import logo from "/public/image/Hero/LOGO.png";

const Faqs = () => {
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        {
            category: "GENERAL INQUIRIES",
            questions: [
                {
                    question:
                        "What is MIGS Masters Institute for Graphics Inc.?",
                    answer: "MIGS Masters is a premier graphic design school dedicated to empowering aspiring artists to thrive in the creative world. We offer a comprehensive curriculum, industry-standard resources, and a supportive community to help you hone your design skills and launch your dream career.",
                },
                {
                    question:
                        "Do I need prior design experience to enroll at MIGS Masters?",
                    answer: "While some prior experience can be helpful, it's not mandatory. Our programs are designed to cater to students at various skill levels. We offer introductory courses to build a strong foundation and advanced programs for those looking to refine their expertise.",
                },
                {
                    question:
                        "What makes MIGS Masters different from other graphic design schools?",
                    answer: "MIGS Masters focuses on providing a well-rounded education that goes beyond technical skills. We foster a collaborative learning environment, connect you with industry professionals, and equip you with the creative problem-solving skills necessary to succeed in the dynamic world of graphic design.",
                },
                {
                    question:
                        "How can I learn more about MIGS Masters' programs?",
                    answer: "We encourage you to visit our website to explore our program offerings, course descriptions, and admissions information. You can also contact us directly to speak with an admissions advisor who can answer your specific questions.",
                },
            ],
        },
        {
            category: "CURRICULUM AND COURSES",
            questions: [
                {
                    question:
                        "What types of graphic design programs does MIGS Masters offer?",
                    answer: "MIGS Masters offers a variety of programs, including certificate programs. We cover various design disciplines, such as visual communication, branding, user experience (UX) design, and motion graphics (depending on program offerings).",
                },
                {
                    question:
                        "Can I take individual courses without enrolling in a full program?",
                    answer: "Our course offerings may vary, but MIGS Masters may offer standalone courses in specific design skills or software programs (depending on program structure).",
                },
                {
                    question: "What kind of software will I learn to use?",
                    answer: "MIGS Masters equips you with the latest industry-standard design software. The specific programs you'll learn will depend on your chosen program, but might include tools like Adobe Photoshop, CorelDraw, Sketch Up, Corel Video Studio, and potentially others depending on the curriculum.",
                },
                {
                    question:
                        "I don't have a formal art background. Can I still apply?",
                    answer: "We encourage you to apply! MIGS Masters offers programs for students at various skill levels. If you have a strong passion for design and a willingness to learn, we can help you develop your skills.",
                },
            ],
        },
        {
            category: "FINANCIAL AID AND COSTS",
            questions: [
                {
                    question:
                        "What is the tuition fee for MIGS Masters programs?",
                    answer: "Tuition fees vary depending on the program you choose. We encourage you to visit our website or contact our admissions office for detailed information about tuition costs and potential scholarship opportunities.",
                },
            ],
        },
    ];

    return (
        <>
            <Head title="FAQs" />
            <section className="font-sans text-gray-900 dark:text-gray-100 antialiased h-full overflow-y-auto">
                <div className="pt-4 bg-gray-100 dark:bg-gray-900">
                    <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                        <Link href={route("landing.show")}>
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-12 w-auto mb-6"
                            />
                        </Link>

                        <div className="w-full sm:max-w-4xl my-6 py-4 px-8 bg-white dark:bg-gray-800 shadow-md rounded-lg">
                            <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
                                FREQUENTLY ASKED QUESTIONS (FAQ’s)
                            </h1>
                        </div>

                        <div className="max-w-4xl w-full p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                            {faqs.map((section, index) => (
                                <div key={index} className="mb-8">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                                        {section.category}
                                    </h2>

                                    {section.questions.map((faq, idx) => (
                                        <div
                                            key={idx}
                                            className="mb-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm transition-shadow hover:shadow-md"
                                        >
                                            <button
                                                onClick={() =>
                                                    toggle(`${index}-${idx}`)
                                                }
                                                className="flex justify-between items-center w-full text-left text-lg font-semibold p-4 bg-gray-200 dark:bg-gray-700 rounded-t-lg focus:outline-none transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                                            >
                                                {faq.question}
                                                <span className="ml-2 text-gray-600 dark:text-gray-400">
                                                    {open === `${index}-${idx}`
                                                        ? "−"
                                                        : "+"}
                                                </span>
                                            </button>

                                            <div
                                                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                                    open === `${index}-${idx}`
                                                        ? "max-h-screen p-4"
                                                        : "max-h-0"
                                                }`}
                                            >
                                                <p className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 p-4 border-t border-gray-200 dark:border-gray-700 rounded-b-lg">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faqs;
