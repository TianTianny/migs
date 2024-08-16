import React from "react";

const BannerItemRight = ({ image, number, title, description }) => {
    return (
        <div
            className="relative flex items-center justify-center p-4 md:py-6 md:px-2 bg-contain bg-no-repeat bg-center cursor-pointer group"
            style={{ backgroundImage: `url(${image})`, height: "140px" }}
        >
            {/* Title */}
            <div className="absolute flex flex-col items-center justify-center text-center text-white transition-transform duration-500 group-hover:-translate-y-8 group-hover:scale-75">
                <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
            </div>

            {/* Description */}
            {description && (
                <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <p className="text-xs md:text-xs text-white">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default BannerItemRight;
