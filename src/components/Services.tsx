import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

export default function Services() {
    const services = [
        { title: "Scaling & Polishing", image: "/images/real/scaling.png", desc: "Pembersihan karang gigi profesional." },
        { title: "Bleaching Gigi", image: "/images/real/bleaching.png", desc: "Pemutihan gigi untuk senyum cemerlang." },
        { title: "Veneer Gigi", image: "/images/real/veneer.png", desc: "Lapisan tipis estetik untuk gigi sempurna." },
        { title: "Tambal Estetik", image: "/images/real/equipment.png", desc: "Perbaikan gigi dengan warna natural." },
        { title: "Perawatan Berlubang", image: "/images/real/interaction.png", desc: "Solusi gigi berlubang yang aman." },
        { title: "Konsultasi Estetika", image: "/images/real/lounge.png", desc: "Diskusi kebutuhan estetik gigi Anda." },
    ];

    return (
        <section id="layanan" className="py-24 bg-brand-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="text-primary-green font-bold tracking-widest uppercase text-sm mb-4">Layanan Unggulan</h2>
                        <p className="text-3xl md:text-4xl font-bold text-primary-blue">Perawatan Terbaik Untuk <br className="hidden md:block" /> Kesehatan & Estetika Gigi</p>
                    </div>
                    <Link href="/layanan" className="text-primary-green font-bold flex items-center gap-2 hover:underline">
                        LIHAT SEMUA LAYANAN <FaChevronRight className="text-xs" />
                    </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
                    {services.map((item, i) => (
                        <div key={i} className="bg-white rounded-[40px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group overflow-hidden flex flex-col">
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                <div className="absolute bottom-6 left-6 text-left">
                                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight drop-shadow-md">{item.title}</h3>
                                </div>
                            </div>
                            <div className="p-8 pt-6 flex-grow flex flex-col justify-between">
                                <p className="text-slate-500 mb-6 leading-relaxed">
                                    {item.desc}
                                </p>
                                <Link href="https://wa.me/628123456789" className="text-primary-green font-bold text-sm tracking-widest uppercase inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Booking sekarang <FaChevronRight className="text-xs" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
