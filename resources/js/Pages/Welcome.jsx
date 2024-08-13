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

export default function Welcome({ heroes }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <section className="max-w-7xl mx-auto">
                <Hero heroes={heroes} />
                <section className="py-10 bg-primary rounded-md">
                    <Advertisements ads={ads1} />
                </section>
                <AboutUs />
                <MissionVisionValues />
                <Programs />
                <AdditionalPrograms />
                <section className="py-10 bg-gray-300 rounded-md">
                    <Advertisements ads={ads2} />
                </section>
                <WhyChooseUs />
                <section className="py-5 bg-bgSkyBlue rounded-md">
                    <Advertisements ads={ads3} />
                </section>
                <Testimonials />
                <ContactUs />
                <Footer />
            </section>
        </>
    );
}
