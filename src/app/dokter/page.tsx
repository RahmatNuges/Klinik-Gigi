import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Doctors from "@/components/Doctors";

export default function DokterPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="pt-24">
                <Doctors />
            </div>
            <Footer />
        </main>
    );
}
