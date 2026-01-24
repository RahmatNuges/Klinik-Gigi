import { FaQuoteLeft, FaStar } from "react-icons/fa";

export default function Testimonials() {
    const reviews = [
        { name: "Andi Saputra", text: "Terima kasih Toto Dental! Scaling-nya sangat nyaman dan tidak sakit. Dokternya ramah banget.", rating: 5 },
        { name: "Siska Amelia", text: "Veneer di sini bener-bener natural. Hasilnya memuaskan dan harganya sangat bersaing.", rating: 5 },
        { name: "Doni Pratama", text: "Kliniknya bersih banget, alat-alatnya modern. Rekomendasi buat anak muda yang cari klinik gigi.", rating: 5 }
    ];

    return (
        <section className="py-24 bg-brand-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary-green font-bold tracking-widest uppercase text-sm mb-4">Testimoni Pasien</h2>
                    <p className="text-3xl md:text-4xl font-bold text-primary-blue mb-4 leading-tight">Apa Kata Mereka Tentang <br className="hidden md:block" /> Pelayanan Kami?</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
                            <div>
                                <div className="flex gap-1 text-yellow-400 mb-6">
                                    {[...Array(item.rating)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <FaQuoteLeft className="text-primary-green/20 text-4xl mb-4" />
                                <p className="text-slate-600 leading-relaxed mb-6 italic">&ldquo;{item.text}&rdquo;</p>
                            </div>
                            <div className="border-t border-slate-50 pt-6">
                                <span className="font-bold text-primary-blue text-lg">{item.name}</span>
                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Pasien Terverifikasi</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
