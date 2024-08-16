import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AdditionalPrograms = ({ additionalPrograms }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [imageLoaded, setImageLoaded] = useState(
        Array(additionalPrograms.length).fill(false)
    );

    const handleImageLoad = (index) => {
        setImageLoaded((prev) => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    return (
        <section className="bg-gray-300 min-h-full flex items-center">
            <div className="py-4 px-10 container mx-auto">
                <h1 className="text-4xl text-center text-accent font-arial font-bold py-5">
                    Additional Programs
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {additionalPrograms.map((program, index) => (
                        <div
                            key={program.id}
                            className="relative bg-white shadow-md flex flex-col justify-center content-center px-3 py-5 rounded-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                            data-aos="fade-right"
                            data-aos-delay={`${index * 100}`}
                        >
                            <div
                                className={`relative w-full h-32 ${
                                    imageLoaded[index]
                                        ? "hidden"
                                        : "flex items-center justify-center bg-gray-300 rounded-lg animate-pulse"
                                }`}
                            ></div>
                            <img
                                src={program.image_url}
                                alt={program.name}
                                className={`w-full h-32 object-contain transition-transform duration-300 ease-in-out ${
                                    imageLoaded[index] ? "block" : "hidden"
                                }`}
                                onLoad={() => handleImageLoad(index)}
                            />
                            <div className="p-2">
                                <h2 className="text-lg md:text-2xl text-center uppercase text-accent font-arial font-bold">
                                    {program.name}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdditionalPrograms;
