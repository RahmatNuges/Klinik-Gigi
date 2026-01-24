import { FaWhatsapp, FaCalendarPlus } from "react-icons/fa";

export default function BookingSection() {
    return (
        <section id="booking" className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-[50px] overflow-hidden bg-primary-blue p-12 lg:p-20 shadow-2xl">
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-green/20 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-green/10 rounded-full -ml-32 -mb-32 blur-3xl" />

                    <div className="relative z-10 text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Siap Memiliki Senyum <br /> Lebih Percaya Diri?
                        </h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-lg mx-auto leading-relaxed">
                            Konsultasikan kebutuhan estetika dan kesehatan gigi Anda bersama dokter ahli kami.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="https://wa.me/628123456789"
                                className="w-full sm:w-auto bg-primary-green hover:bg-primary-green/90 text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-primary-green/30 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
                            >
                                <FaWhatsapp className="text-2xl" /> BOOKING VIA WHATSAPP
                            </a>
                            <div className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase">
                                <FaCalendarPlus className="text-primary-green text-xl" /> Slot Terbatas Minggu Ini
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
