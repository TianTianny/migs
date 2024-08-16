import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import MessageIcon from "/public/image/ContactUs/MESSAGE.png";
import PhoneIcon from "/public/image/ContactUs/CALL.png";
import MapPinIcon from "/public/image/ContactUs/LOCATION.png";

const ContactUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            <section className="min-h-full bg-white sm:h-full pt-20 px-4 mx-auto">
                <div className="flex flex-col items-center justify-center">
                    <h1
                        className="text-4xl md:text-5xl text-accent font-arial font-bold"
                        data-aos="fade-up"
                    >
                        Contact Us
                    </h1>
                    <h4
                        className="text-lg md:text-xl font-arial text-center font-semibold text-accent tracking-wide"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Any questions or remarks? Just write us a message!
                    </h4>
                </div>
                <form className="max-w-lg mx-auto mt-6 space-y-4">
                    <div
                        className="flex flex-col md:flex-row md:space-x-4 space-y-5 md:space-y-0"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-accent"
                            placeholder="Enter a valid email address"
                            required
                        />
                        <input
                            type="text"
                            id="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-accent"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-xl w-full px-5 py-2.5 text-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        Submit
                    </button>
                </form>

                <div className="relative">
                    <div className="absolute container hidden sm:block mx-auto inset-x-0 bottom-0 py-5 h-4/6 bg-gray-100 z-0"></div>

                    {/* Content Container */}
                    <div className="container relative z-10 mx-auto px-36 hidden sm:flex flex-row gap-4 py-10 mt-4 justify-between">
                        <div
                            className="flex flex-col items-center flex-1"
                            data-aos="fade-up"
                        >
                            <div className="flex bg-primary rounded-full w-36 h-36 p-4 justify-center items-center shadow-lg">
                                <img
                                    src={MessageIcon}
                                    alt="Message Icon"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h1 className="mt-4 text-center text-lg font-medium text-accent">
                                info@migsinc.com
                            </h1>
                        </div>
                        <div
                            className="flex flex-col items-center flex-1"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="flex bg-primary rounded-full w-36 h-36 p-4 justify-center items-center shadow-lg">
                                <img
                                    src={PhoneIcon}
                                    alt="Phone Icon"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h1 className="mt-4 text-center text-lg font-medium text-accent">
                                +63 916 291 1218
                            </h1>
                        </div>
                        <div
                            className="flex flex-col items-center flex-1"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="flex bg-primary rounded-full w-36 h-36 p-4 justify-center items-center shadow-lg">
                                <img
                                    src={MapPinIcon}
                                    alt="Map Pin Icon"
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <h1 className="mt-4 text-center text-lg font-medium text-accent">
                                D-3 2F Plaza Victoria, Santo Rosario St., Sto
                                Domingo, Angeles City 2009 Pampanga Philippines
                            </h1>
                        </div>
                    </div>
                </div>

                {/* <div className="relative bg-gray-100 mt-36 mx-auto max-w-6xl h-[240px] flex items-center justify-center"> */}
                <div className="sm:hidden container h-[240px] flex items-start justify-start">
                    <div className=" inset-0">
                        <div
                            className="flex sm:hidden flex-row items-center gap-2 my-2"
                            data-aos="fade-up"
                        >
                            <h1 className="mt-4 text-start text-lg font-medium text-accent">
                                info@migsinc.com
                            </h1>
                        </div>
                        <div
                            className="flex sm:hidden flex-row items-center gap-2 my-2"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <h1 className="mt-4 text-start text-lg font-medium text-accent">
                                +63 916 291 1218
                            </h1>
                        </div>
                        <div
                            className="flex sm:hidden flex-row items-center gap-2 my-2"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <h1 className="mt-4 text-start text-lg font-medium text-accent">
                                D-3 2F Plaza Victoria, Santo Rosario St., Sto
                                Domingo, Angeles City 2009 Pampanga Philippines
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
