"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaStar, FaShieldAlt } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-28 pb-48 bg-gradient-to-b from-brand-soft to-white overflow-hidden">

            {/* Decorative Blobs */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-green/5 blur-[100px] -z-0" />
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-blue/5 blur-[80px] -z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <span className="inline-block py-2 px-6 rounded-full bg-white border border-slate-200 text-primary-blue font-bold text-sm mb-6 shadow-sm tracking-wide">
                            Selamat Datang di Toto Dental
                        </span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-blue leading-[1.2] mb-6 font-heading">
                            Senyum Sehat, <br />
                            <span className="text-primary-green">Keluarga Bahagia.</span>
                        </h1>

                        <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                            Klinik gigi modern dengan suasana yang <i>homey</i> dan menyenangkan. Kami siap merawat senyum Anda dengan teknologi terkini dan harga terjangkau.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="https://wa.me/628123456789"
                                className="group bg-primary-blue hover:bg-blue-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-blue-900/20 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
                            >
                                <FaWhatsapp className="text-2xl" />
                                Booking Sekarang
                            </Link>
                            <Link
                                href="/layanan"
                                className="bg-white hover:bg-slate-50 text-primary-blue border-2 border-primary-blue/10 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                            >

                                Lihat Layanan Kami
                            </Link>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                                ))}
                            </div>
                            <div className="text-left">
                                <div className="flex text-yellow-400 text-xs mb-1">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                </div>
                                <p className="text-sm font-bold text-slate-600">
                                    Dipercaya <span className="text-primary-blue">2,000+ Pasien</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue to-primary-green rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-10 animate-pulse lg:scale-110" />

                            <div className="relative w-full h-full rounded-[40px] overflow-hidden border-8 border-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/images/real/interaction.png"
                                    alt="Dokter ramah melayani pasien"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100"
                            >
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-primary-green">
                                    <FaShieldAlt />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Peralatan</p>
                                    <p className="font-bold text-primary-blue text-sm">100% Steril</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[100px] lg:h-[150px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F9FBFC"></path>
                </svg>
            </div>
        </section>
    );
}
