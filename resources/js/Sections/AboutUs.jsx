import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

import aboutUsVector from "/public/image/AboutUs/vector 9.png";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section
                data-aos="fade-up"
                className="bg-white container h-full sm:h-full py-20 mx-auto"
            >
                <div
                    className="flex flex-col items-center justify-center"
                    data-aos="fade-up"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl uppercase text-accent font-arial font-bold">
                        About Us
                    </h1>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-arial text-center font-semibold text-accent tracking-wide">
                        Masters Institute for Graphics Inc. (MIGS)
                    </h4>
                </div>

                <div className="flex p-4 sm:justify-center py-4 gap-4">
                    <div
                        className="w-1/2 p-4 items-center hidden sm:block"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <img
                            src={aboutUsVector}
                            alt="Logo"
                            className="h-full w-full"
                        />
                    </div>
                    <div className="w-full sm:w-1/2" data-aos="fade-up">
                        <div className="flex flex-col gap-2">
                            <p className="text-md leading-normal font-arial text-gray-600">
                                Is a premier educational institution dedicated
                                to nurturing and enhancing the talent and
                                creativity of students in the field of graphics
                                and visual arts. Our mission is to provide
                                comprehensive, industry-relevant training that
                                empowers students to excel in their creative
                                pursuits and professional careers.
                            </p>
                            <p className="text-md leading-normal font-arial text-gray-600">
                                At MIGS, we believe that every student possesses
                                unique potential and creativity. Our goal is to
                                unlock that potential through a blend of
                                theoretical knowledge, practical skills, and
                                hands-on experience. We offer a wide range of
                                programs and courses designed to cater to
                                different skill levels and interests, from
                                beginners to advanced professionals.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 py-2 items-center">
                            <h1
                                className="text-2xl font-arial text-center font-semibold text-accent"
                                data-aos="fade-up"
                            >
                                OUR CORE VALUES:
                            </h1>
                            <div
                                className="w-full bg-primary py-2 justify-center text-center group"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <h1 className="text-lg text-white font-arialRounded">
                                    INNOVATION
                                </h1>
                                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                                    <p className="text-white text-md font-compact tracking-widest p-1">
                                        We encourage innovative thinking and
                                        creative problem-solving.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="w-full bg-primary py-2 justify-center text-center group"
                                data-aos="fade-up"
                                data-aos-delay="150"
                            >
                                <h1 className="text-lg text-white font-arialRounded">
                                    EXCELLENCE
                                </h1>
                                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                                    <p className="text-white text-md font-compact tracking-widest p-1">
                                        We strive for excellence in all our
                                        programs and student outcomes.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="w-full bg-primary py-2 justify-center text-center group"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <h1 className="text-lg text-white font-arialRounded">
                                    COMMUNITY
                                </h1>
                                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                                    <p className="text-white text-md font-compact tracking-widest p-1">
                                        We foster a supportive and collaborative
                                        learning environment.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="w-full bg-primary py-2 justify-center text-center group"
                                data-aos="fade-up"
                                data-aos-delay="250"
                            >
                                <h1 className="text-lg text-white font-arialRounded">
                                    INTEGRITY
                                </h1>
                                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                                    <p className="text-white text-md font-compact tracking-widest p-1">
                                        We uphold the highest standards of
                                        integrity and ethical conduct.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
