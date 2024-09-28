import React, { useState, useEffect } from "react";
import {
    Autoplay,
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AOS from "aos";
import "aos/dist/aos.css";

const Programs = ({ programs }) => {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);

    const handleImageLoad = (index) => {
        setImageLoaded((prev) => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    return (
        <>
            <section
                data-aos="fade-up"
                className="h-full sm:h-full py-28 mx-auto"
            >
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl md:text-5xl uppercase text-accent font-arial font-bold">
                        Programs
                    </h1>
                    <h4 className="text-lg md:text-xl font-arial text-center font-semibold text-accent tracking-wide">
                        Masters Institute for Graphics Inc. (MIGS)
                    </h4>
                </div>

                <div className="container mx-auto px-4 md:px-8 py-10 md:py-16">
                    <Swiper
                        modules={[
                            Autoplay,
                            Navigation,
                            Pagination,
                            Scrollbar,
                            A11y,
                        ]}
                        lazy="true"
                        spaceBetween={20}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        onSlideChange={(swiper) =>
                            setActiveIndex(swiper.realIndex)
                        }
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        className="mySwiper"
                    >
                        {programs.map((program, index) => (
                            <SwiperSlide
                                key={index}
                                className={`swiper-slide program-card ${
                                    activeIndex === index ? "active-card" : ""
                                }`}
                            >
                                <div
                                    className={`program-card flex flex-col justify-between items-center bg-white rounded-lg transition-all duration-75 ease-in-out px-4 py-6 shadow-lg h-96 max-w-full`}
                                    data-aos="fade-right"
                                    data-aos-delay={`${index * 50}`}
                                >
                                    <img
                                        src={program.image_url}
                                        alt={program.name}
                                        loading="lazy"
                                        className="w-full h-40 object-contain rounded-t-lg mb-4"
                                        onLoad={() => handleImageLoad(index)}
                                        onError={() =>
                                            console.error(
                                                `Failed to load image at index ${index}`
                                            )
                                        }
                                    />
                                    <div className="p-4 text-center flex flex-col justify-between flex-grow">
                                        <h3 className="text-xl md:text-3xl uppercase text-accent font-arial font-bold mb-2">
                                            {program.name}
                                        </h3>
                                        <p className="text-dark text-sm md:text-base flex-grow">
                                            {program.description}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
            <div className="bg-primary h-4"></div>
        </>
    );
};

export default Programs;
