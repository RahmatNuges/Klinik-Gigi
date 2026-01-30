import Image from "next/image";
import Link from "next/link";

interface DoctorsProps {
    showAll?: boolean;
}

export default function Doctors({ showAll = false }: DoctorsProps) {
    const doctors = [
        {
            name: "drg. Toto Kusuma",
            specialty: "Dokter Gigi Utama",
            image: "/images/doctor.png",
            bio: "Spesialis estetika gigi dengan pengalaman lebih dari 10 tahun dalam memberikan senyum sempurna."
        },
        {
            name: "drg. Sarah Amanda",
            specialty: "Spesialis Orthodonti",
            image: "/images/doctors/doctor1.png",
            bio: "Ahli dalam meratakan gigi dan memperbaiki struktur rahang untuk kesehatan fungsional."
        },
        {
            name: "drg. Linda Permata",
            specialty: "Spesialis Konservasi Gigi",
            image: "/images/doctors/doctor2.png",
            bio: "Berfokus pada perawatan saluran akar dan penambalan estetika berkualitas tinggi."
        },
        {
            name: "drg. Budi Santoso",
            specialty: "Spesialis Kedokteran Gigi Anak",
            image: "/images/doctors/doctor3.png",
            bio: "Memastikan pengalaman ke dokter gigi yang menyenangkan dan ramah bagi buah hati Anda."
        },
        {
            name: "drg. Jena Rosalia",
            specialty: "Spesialis Bedah Mulut",
            image: "/images/doctors/doctor4.png",
            bio: "Ahli dalam prosedur bedah kompleks termasuk pencabutan gigi bungsu dan implan."
        },
        {
            name: "drg. Maria Ulfa",
            specialty: "Dokter Gigi Umum",
            image: "/images/doctors/doctor5.png",
            bio: "Memberikan layanan pembersihan karang gigi dan konsultasi kesehatan mulut menyeluruh."
        }
    ];

    const displayDoctors = showAll ? doctors : doctors.slice(0, 1);

    return (
        <section id="doctors" className={`relative py-24 bg-white overflow-hidden ${showAll ? "pt-32" : ""}`}>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-green/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/5 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-primary-green font-bold tracking-widest uppercase text-sm mb-4">Tim Ahli Kami</h2>
                    <p className="text-3xl md:text-4xl font-bold text-primary-blue leading-tight text-balance">
                        Ditangani Oleh Tenaga Profesional <br className="hidden md:block" /> & Berpengalaman
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <div className={`grid grid-cols-1 ${showAll ? "md:grid-cols-2 lg:grid-cols-3" : "max-w-sm"} gap-12 w-full mb-16`}>
                        {displayDoctors.map((item, i) => (
                            <div key={i} className="w-full group">
                                <div className="relative h-[480px] rounded-[40px] overflow-hidden mb-8 border-4 border-brand-soft shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary-green/20">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="text-center px-4">
                                    <h3 className="text-2xl font-bold text-primary-blue mb-2 transition-colors group-hover:text-primary-green">{item.name}</h3>
                                    <p className="text-primary-green font-semibold text-sm uppercase mb-4 tracking-widest">{item.specialty}</p>
                                    <p className="text-slate-500 leading-relaxed italic">&ldquo;{item.bio}&rdquo;</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {!showAll && (
                        <div className="mt-8">
                            <Link
                                href="/dokter"
                                className="bg-white text-primary-blue border-2 border-primary-blue hover:bg-primary-blue hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                            >
                                Lihat Semua Dokter
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
