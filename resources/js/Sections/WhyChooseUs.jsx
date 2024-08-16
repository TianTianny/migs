import React, { useState, useEffect } from "react";

import BannerItemRight from "@/Components/LandingPage/BannerItemRight";
import BannerItemLeft from "@/Components/LandingPage/BannerItemLeft";
import Object1 from "/public/image/WhyChooseUs/1.png";
import Object2 from "/public/image/WhyChooseUs/2.png";
import Object3 from "/public/image/WhyChooseUs/3.png";
import Object4 from "/public/image/WhyChooseUs/4.png";
import Object5 from "/public/image/WhyChooseUs/5.png";
import Object6 from "/public/image/WhyChooseUs/6.png";
import Object7 from "/public/image/WhyChooseUs/7.png";
import Object8 from "/public/image/WhyChooseUs/8.png";

import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section
                data-aos="fade-up"
                className="bg-bgSkyBlue min-h-full pt-10 py-2 mx-auto"
            >
                <div className="flex flex-col items-center justify-center mb-10">
                    <h1 className="text-4xl md:text-5xl uppercase text-accent font-arial font-bold">
                        WHY CHOOSE US?
                    </h1>
                    <h4 className="text-lg md:text-xl max-w-2xl px-2 font-arial text-center font-semibold text-accent tracking-wide mt-4">
                        (MIGS) Masters Institute for Graphics Inc. stands out as
                        the premier destination for aspiring creatives and
                        professionals in the graphics and visual arts industry.
                        Here’s why you should choose us:
                    </h4>
                </div>

                <div
                    data-aos="fade-up"
                    className="px-4 mx-auto max-w-screen-xl"
                >
                    <div className="grid sm:grid-cols-2 sm:gap-4">
                        <div className="grid grid-rows-4 gap-4">
                            <BannerItemLeft
                                image={Object1}
                                number="01"
                                title="Experienced Instructors"
                                description="Learn from industry professionals with extensive experience and a passion for teaching, ensuring you receive practical, real-world knowledge."
                            />
                            <BannerItemLeft
                                image={Object3}
                                number="03"
                                title="State-of-the-Art Facilities"
                                description="Study in a cutting-edge environment equipped with the latest technology and software used in the industry, giving you hands-on experience with the tools of the trade."
                            />
                            <BannerItemLeft
                                image={Object5}
                                number="05"
                                title="Career Support"
                                description="We offer personalized career guidance and job placement assistance to help you achieve your professional goals and succeed in the competitive creative industry. "
                            />
                            <BannerItemLeft
                                image={Object7}
                                number="07"
                                title="Supportive Community"
                                description="Join a collaborative and inclusive community where students, instructors, and industry professionals can connect, share ideas, and grow together."
                            />
                        </div>
                        <div className="grid grid-rows-4 gap-4">
                            <BannerItemRight
                                image={Object2}
                                number="02"
                                title="Comprehensive Programs"
                                description="Our diverse range of programs caters to various interests and skill levels, from beginners to advanced professionals, covering graphic design, animation, digital media, visual effects (VFX), and web design."
                            />
                            <BannerItemRight
                                image={Object4}
                                number="04"
                                title="Industry Connections"
                                description="Benefit from our strong relationships with leading companies and organizations in the graphics and visual arts sectors, providing you with networking opportunities, internships, and job placements."
                            />
                            <BannerItemRight
                                image={Object6}
                                number="06"
                                title="Innovative Learning Environment"
                                description="Our curriculum encourages innovative thinking and creative problem-solving, ensuring you are well-prepared to meet industry challenges."
                            />
                            <BannerItemRight
                                image={Object8}
                                number="08"
                                title="Commitment to Excellence"
                                description="We are dedicated to maintaining the highest standards of education, continuously improving our programs to stay ahead of industry trends and developments."
                            />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-5 mb-10">
                        <h4 className="text-lg md:text-xl font-arial text-center font-semibold text-accent tracking-wide mt-4">
                            Choosing MIGS means investing in your future with an
                            institute that is committed to your success and
                            passionate about nurturing your creative potential.
                            Join us and embark on a transformative educational
                            journey that will prepare you to make a significant
                            impact in the world of graphics and visual arts.
                        </h4>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUs;
