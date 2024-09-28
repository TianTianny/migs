import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Mission from "/public/image/MissionVisionValues/MISSION.png";
import Vision from "/public/image/MissionVisionValues/VISSION.png";
import Values from "/public/image/MissionVisionValues/vector 4.png";

const MissionVisionValues = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <div className="bg-primary h-4"></div>
            <section className="min-h-full py-28 bg-gray-100 px-6 mx-auto">
                <div className="container mx-auto px-4">
                    <div
                        className="text-center mb-12"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-accent mb-2">
                            Mission, Vision, & Values
                        </h1>
                        <h4 className="text-lg md:text-xl font-semibold text-accent tracking-wide">
                            Masters Institute for Graphics Inc. (MIGS)
                        </h4>
                    </div>
                    <div className="flex flex-col md:flex-row w-full gap-8">
                        <div
                            className="flex-1 md:flex-[1_1_25%] bg-bgSkyBlue py-6 px-8 shadow-lg rounded-tr-2xl"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img
                                src={Mission}
                                alt="Mission Image"
                                className="w-full h-44 object-contain rounded-t-2xl"
                            />
                            <div className="mt-4">
                                <p className="text-base font-arial leading-relaxed text-dark">
                                    Our{" "}
                                    <span className="text-primary">
                                        mission
                                    </span>{" "}
                                    is to enhance student talent and creativity
                                    through high-quality education and training
                                    in graphics and visual arts. We aim to
                                    empower students with the skills and
                                    confidence needed for success, fostering
                                    innovative thinking in a supportive
                                    environment. We are dedicated to excellence,
                                    continuous improvement, and building a
                                    collaborative community for students,
                                    instructors, and industry professionals.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex-1 md:flex-[1_1_25%] bg-bgSkyBlue py-6 px-8 shadow-lg rounded-tr-2xl"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <img
                                src={Vision}
                                alt="Vision Image"
                                className="w-full h-44 object-contain rounded-t-2xl"
                            />
                            <div className="mt-4">
                                <p className="text-base font-arial leading-relaxed text-dark">
                                    Our{" "}
                                    <span className="text-primary">vision</span>{" "}
                                    is to be globally recognized for excellence
                                    in graphics and visual arts education. We
                                    aspire to lead innovation, inspire future
                                    creative professionals, and establish a
                                    strong global presence. By producing
                                    top-tier talent, we aim to contribute
                                    significantly to the creative industry's
                                    growth and development.
                                </p>
                            </div>
                        </div>

                        <div
                            className="flex-1 md:flex-[2_1_40%] p-6 rounded-2xl"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <img
                                src={Values}
                                alt="Values Image"
                                className="w-full h-48 object-cover rounded-t-2xl"
                            />
                            <p className="text-base font-arial leading-relaxed text-dark mt-4">
                                Guided by our{" "}
                                <span className="text-primary">
                                    core values
                                </span>{" "}
                                , we promote innovation, excellence, community,
                                integrity, passion, and diversity. These values
                                shape our educational approach and commitment to
                                providing a transformative experience that
                                empowers students to achieve their full
                                potential and impact the world of graphics and
                                visual arts.
                            </p>
                            <div
                                className="mt-6 py-10 px-4 bg-skyBlue rounded-tl-2xl"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <blockquote className="text-white text-center text-lg italic">
                                    "At MIGS, we empower creativity and skill
                                    through exceptional education, striving to
                                    lead globally in graphics and visual arts
                                    while fostering a thriving, innovative
                                    community."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MissionVisionValues;
