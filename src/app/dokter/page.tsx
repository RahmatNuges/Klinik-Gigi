import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Doctors from "@/components/Doctors";

export default function DokterPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Doctors showAll={true} />
            <Footer />
        </main>
    );
}
