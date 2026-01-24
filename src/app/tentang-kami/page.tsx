import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TentangKamiPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="py-40 bg-brand-soft">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold text-primary-blue mb-8">Tentang Toto Dental</h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Toto Dental adalah klinik gigi modern yang berdedikasi untuk memberikan perawatan terbaik bagi kesehatan dan estetika gigi Anda. Dengan tim profesional dan peralatan modern, kami memastikan setiap pasien mendapatkan pengalaman yang nyaman dan hasil yang maksimal.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
