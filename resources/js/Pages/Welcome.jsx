import { Link, Head } from "@inertiajs/react";
import {
    Hero,
    AboutUs,
    MissionVisionValues,
    Programs,
    AdditionalPrograms,
    WhyChooseUs,
    Testimonials,
    ContactUs,
} from "@/Sections";
import { Navbar, Footer, Advertisements } from "@/Components/LandingPage";

import ads from "/public/image/Advertisements/ADS 1.jpg";
import adsT from "/public/image/Advertisements/ADS 2.jpg";

const ads1 = [
    { src: ads, alt: "Ad 1" },
    { src: adsT, alt: "Ad 2" },
];

const ads2 = [
    { src: ads, alt: "Ad 3" },
    { src: adsT, alt: "Ad 4" },
];

const ads3 = [
    { src: ads, alt: "Ad 5" },
    { src: adsT, alt: "Ad 6" },
];

export default function Welcome({
    heroes,
    programs,
    additionalPrograms,
    testimonials,
}) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />

            <section className="max-w-7xl mx-auto">
                <Hero heroes={heroes} />
            </section>

            <section className="py-10 bg-primary rounded-md">
                <section className="max-w-7xl mx-auto">
                    <Advertisements ads={ads1} />
                </section>
            </section>

            <section className="max-w-7xl mx-auto">
                <AboutUs />
            </section>

            <MissionVisionValues />

            <Programs programs={programs} />

            <AdditionalPrograms additionalPrograms={additionalPrograms} />

            <section className="py-10 bg-gray-300 rounded-md">
                <section className="max-w-7xl mx-auto">
                    <Advertisements ads={ads2} />
                </section>
            </section>

            <WhyChooseUs />

            <section className="py-5 bg-bgSkyBlue rounded-md">
                <section className="max-w-7xl mx-auto">
                    <Advertisements ads={ads3} />
                </section>
            </section>

            <Testimonials testimonials={testimonials} />

            <ContactUs />

            <Footer />
        </>
    );
}
