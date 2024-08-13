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

export default function Welcome({ heroes }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar />
            <section className="max-w-7xl mx-auto">
                <Hero heroes={heroes} />
                <Advertisements />
                <AboutUs />
                <MissionVisionValues />
                <Programs />
                <AdditionalPrograms />
                <Advertisements />
                <WhyChooseUs />
                <Advertisements />
                <Testimonials />
                <ContactUs />
                <Footer />
            </section>
        </>
    );
}
