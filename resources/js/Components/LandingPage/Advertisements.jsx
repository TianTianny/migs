import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

const Advertisements = ({ ads }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div
            data-aos="fade-up"
            className="flex flex-col sm:flex-row gap-2 justify-center px-4"
        >
            {ads.map((ad, index) => (
                <div key={index} className="w-full sm:w-1/2 xl:w-1/2 p-4">
                    <img
                        src={ad.src}
                        alt={ad.alt}
                        className="w-full h-auto shadow-xl rounded-md"
                    />
                </div>
            ))}
        </div>
    );
};

Advertisements.propTypes = {
    ads: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Advertisements;
