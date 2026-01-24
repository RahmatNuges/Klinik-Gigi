import Image from "next/image";

export default function Doctors() {
    const doctors = [
        {
            name: "drg. Toto Kusuma",
            specialty: "Dokter Gigi Utama",
            image: "/images/doctor.png",
            bio: "Spesialis estetika gigi dengan pengalaman lebih dari 10 tahun dalam memberikan senyum sempurna."
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary-green font-bold tracking-widest uppercase text-sm mb-4">Tim Ahli Kami</h2>
                    <p className="text-3xl md:text-4xl font-bold text-primary-blue leading-tight text-balance">
                        Ditangani Oleh Tenaga Profesional <br className="hidden md:block" /> & Berpengalaman
                    </p>
                </div>

                <div className="flex justify-center">
                    {doctors.map((item, i) => (
                        <div key={i} className="max-w-md w-full group">
                            <div className="relative h-[480px] rounded-[40px] overflow-hidden mb-8 border-4 border-brand-soft shadow-xl">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-primary-blue mb-2">{item.name}</h3>
                                <p className="text-primary-green font-semibold text-sm uppercase mb-4 tracking-widest">{item.specialty}</p>
                                <p className="text-slate-500 leading-relaxed italic px-6 leading-relaxed">&ldquo;{item.bio}&rdquo;</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
