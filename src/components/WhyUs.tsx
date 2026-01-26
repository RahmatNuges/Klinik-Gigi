import Image from "next/image";

export default function WhyUs() {
    const reasons = [
        {
            title: "Dokter Profesional",
            desc: "Tim dokter gigi ahli dan berpengalaman di bidangnya.",
            image: "/images/real/team.png"
        },
        {
            title: "Alat Modern & Steril",
            desc: "Menggunakan teknologi terbaru dan standar sterilisasi tinggi.",
            image: "/images/real/equipment.png"
        },
        {
            title: "Ramah Untuk Pasien",
            desc: "Pendekatan personal yang membuat Anda merasa nyaman dan aman.",
            image: "/images/real/interaction.png"
        },
        {
            title: "Klinik Nyaman & Bersih",
            desc: "Desain klinik modern dan lifestyle-oriented untuk anak muda.",
            image: "/images/real/lounge.png"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary-green font-bold tracking-widest uppercase text-sm mb-4">Mengapa Toto Dental?</h2>
                    <p className="text-3xl md:text-4xl font-bold text-primary-blue">Membangun Kepercayaan Melalui <br className="hidden md:block" /> Kualitas Pelayanan</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, i) => (
                        <div key={i} className="group overflow-hidden rounded-3xl bg-brand-soft shadow-sm hover:shadow-xl transition-all duration-300">
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary-blue/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary-blue mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
