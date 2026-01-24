import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EdukasiPage() {
    const articles = [
        { title: "Apakah Bleaching Gigi Aman?", category: "Tips Kesehatan" },
        { title: "Pentingnya Scaling Setiap 6 Bulan", category: "Edukasi" },
        { title: "Cara Merawat Behel Agar Tetap Bersih", category: "Tips" }
    ];

    return (
        <main className="min-h-screen">
            <Navbar />
            <section className="py-24 bg-brand-soft">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-primary-blue mb-4">Edukasi & Artikel</h1>
                        <p className="text-slate-500">Tips dan informasi seputar kesehatan gigi untuk Anda.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {articles.map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                                <span className="text-xs font-bold text-primary-green uppercase tracking-widest">{item.category}</span>
                                <h3 className="text-xl font-bold text-primary-blue mt-4 mb-6 leading-tight">{item.title}</h3>
                                <button className="text-primary-blue font-bold text-sm hover:text-primary-green transition-colors">BACA SELENGKAPNYA</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
