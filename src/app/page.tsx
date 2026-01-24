import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <WhyUs />
            <Services />
            <Doctors />
            <Testimonials />
            <BookingSection />
            <Footer />
        </main>
    );
}
