import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function KontakPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="py-40 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-primary-blue mb-4">Hubungi Kami</h1>
                        <p className="text-slate-500">Kami siap melayani kebutuhan kesehatan gigi Anda.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-3xl bg-brand-soft text-center">
                            <FaMapMarkerAlt className="text-primary-green text-3xl mx-auto mb-4" />
                            <h3 className="font-bold text-primary-blue mb-2">Alamat</h3>
                            <p className="text-slate-600 text-sm">Jl. Tebet Raya No. 45, Jakarta Selatan</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-soft text-center">
                            <FaPhoneAlt className="text-primary-green text-3xl mx-auto mb-4" />
                            <h3 className="font-bold text-primary-blue mb-2">Telepon</h3>
                            <p className="text-slate-600 text-sm">+62 812-3456-7890</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-brand-soft text-center">
                            <FaEnvelope className="text-primary-green text-3xl mx-auto mb-4" />
                            <h3 className="font-bold text-primary-blue mb-2">Email</h3>
                            <p className="text-slate-600 text-sm">info@totodental.com</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
