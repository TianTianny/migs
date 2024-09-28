import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
    Autoplay,
    EffectCoverflow,
    Pagination,
    Navigation,
} from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = ({ testimonials }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <>
            <div className="bg-primary h-4"></div>
            <section className="bg-white py-28 mx-auto" data-aos="fade-up">
                <div className="flex flex-col items-center justify-center mb-12">
                    <h1 className="text-4xl md:text-5xl text-center font-extrabold text-accent uppercase mb-4">
                        WHAT OUR STUDENTS SAY!
                    </h1>
                    <h4 className="text-md md:text-lg max-w-3xl text-center font-semibold text-accent tracking-wide">
                        Hear from our students as they share their experiences
                        and how MIGS has helped them turn their passion for
                        graphics and visual arts into successful careers.
                    </h4>
                </div>

                <div className="container mx-auto px-4 md:px-8">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        navigation={{ clickable: true }}
                        modules={[
                            Autoplay,
                            EffectCoverflow,
                            Pagination,
                            Navigation,
                        ]}
                        className="mySwiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center bg-white rounded-lg shadow-xl py-10 px-16 transition-transform duration-500 ease-in-out">
                                    <img
                                        src={testimonial.user_path}
                                        alt={testimonial.name}
                                        loading="lazy"
                                        className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-accent"
                                    />
                                    <p className="text-center text-md md:text-lg italic mb-4">
                                        "{testimonial.message}"
                                    </p>
                                    <h3 className="text-md md:text-lg uppercase text-accent font-arial font-bold">
                                        ~ {testimonial.name},{" "}
                                        {testimonial.occupation}
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUs;
