import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

export default function LayananPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-24">
                <Services />
            </div>
            <Footer />
        </main>
    );
}
