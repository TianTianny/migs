import React, { useEffect } from "react";
import BannerItemRight from "@/Components/LandingPage/BannerItemRight";
import BannerItemLeft from "@/Components/LandingPage/BannerItemLeft";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = ({ WhyChooseUsItems }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <section
                data-aos="fade-up"
                className="bg-bgSkyBlue min-h-full py-28 mx-auto"
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
                            {WhyChooseUsItems.filter(
                                (item) => item.position === "left"
                            ).map((item, index) => (
                                <BannerItemLeft
                                    key={index}
                                    image={item.image_path}
                                    number={item.number}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>
                        <div className="grid grid-rows-4 gap-4">
                            {WhyChooseUsItems.filter(
                                (item) => item.position === "right"
                            ).map((item, index) => (
                                <BannerItemRight
                                    key={index}
                                    image={item.image_path}
                                    number={item.number}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
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
