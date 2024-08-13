import React, { useState, useEffect } from "react";

const Hero = ({ heroes }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToPrevious = () => {
        const newIndex =
            activeIndex === 0 ? heroes.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
    };

    const goToNext = () => {
        const newIndex =
            activeIndex === heroes.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(goToNext, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <section className="py-1">
            <div
                id="animation-carousel"
                className="relative w-full"
                data-carousel="static"
            >
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg">
                    {heroes.map((hero, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-500 ease-linear ${
                                index === activeIndex
                                    ? "opacity-100"
                                    : "opacity-0"
                            }`}
                        >
                            <img
                                src={hero.image_url}
                                className="block w-full h-full object-cover"
                                alt={hero.title}
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center p-4">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-impact tracking-wide bg-primary text-primary bg-clip-text text-transparent">
                                    {hero.title}
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-2">
                                    {hero.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={goToPrevious}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    onClick={goToNext}
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Hero;
