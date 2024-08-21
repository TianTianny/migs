import React from "react";

const BannerItemRight = ({ image, number, title, description }) => {
    return (
        <div
            className="relative flex items-center justify-center p-4 md:py-6 md:px-2 bg-contain bg-no-repeat bg-center cursor-pointer group"
            style={{ backgroundImage: `url(${image})`, height: "140px" }}
        >
            {/* Title */}
            <div className="absolute flex flex-col px-24 items-center md:ms-20 justify-center text-center text-white transition-transform duration-500 group-hover:-translate-y-8 group-hover:scale-75 group-hover:px-16">
                <h2 className="text-lg uppercase md:text-3xl group-hover:text-xl font-semibold transition-all duration-400 ease-in-out">
                    {title}
                </h2>
            </div>

            {/* Description */}
            {description && (
                <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-xs md:text-xs tracking-wide text-white">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default BannerItemRight;
