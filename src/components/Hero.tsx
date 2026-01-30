"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaWhatsapp, FaStar, FaShieldAlt, FaTooth } from "react-icons/fa";

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Different image order for mobile vs desktop
    const desktopImages = ["/images/real/smile.png", "/images/real/interaction.png"];
    const mobileImages = ["/images/real/interaction.png", "/images/real/smile.png"];

    useEffect(() => {
        // Check if mobile
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);

        // Auto-rotate images every 5 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % 2);
        }, 5000);

        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const currentImages = isMobile ? mobileImages : desktopImages;

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white lg:bg-gradient-to-br lg:from-white lg:via-slate-50 lg:to-emerald-50/20">

            {/* Desktop Background Gradient */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-brand-soft via-white to-primary-green/5 -z-10" />

            {/* Desktop Decorative Elements */}
            <div className="hidden lg:block absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary-green/10 blur-[100px] -z-0" />
            <div className="hidden lg:block absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary-blue/10 blur-[80px] -z-0" />

            {/* Floating Decorative Icons - Desktop */}
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 left-20 text-primary-green/20 text-6xl hidden lg:block"
            >
                <FaTooth />
            </motion.div>

            <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 w-full relative z-10 pt-0 lg:pt-28 lg:pb-48">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Mobile: Seamless Image Section Above Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="lg:hidden w-full relative"
                    >
                        <div className="relative h-[45vh] sm:h-[55vh] w-full overflow-hidden">
                            <AnimatePresence initial={false}>
                                <motion.div
                                    key={currentImages[currentImageIndex]}
                                    initial={{ x: "100%", opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: "-100%", opacity: 0 }}
                                    transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={currentImages[currentImageIndex]}
                                        alt="Dashboard Clinic"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Bottom Gradient Blur to blend with text content */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white z-10" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left px-4 sm:px-6 lg:px-0"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="hidden xl:inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/20 xl:bg-white border border-white/30 xl:border-slate-200 text-white xl:text-primary-blue font-bold text-sm mb-6 backdrop-blur-sm xl:backdrop-blur-none shadow-sm tracking-wide"
                        >
                            <span className="w-0 h-0 rounded-full bg-emerald-500 animate-pulse" /> Selamat Datang di Toto Dental
                        </motion.span>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 font-heading">
                            <span className="text-primary-blue">
                                Senyum Sehat,
                            </span>
                            <br />
                            <span className="relative inline-block">
                                <span className="text-primary-green italic lg:not-italic">
                                    Keluarga Bahagia.
                                </span>
                                {/* Underline decoration - Desktop only */}
                                <motion.svg
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="hidden lg:block absolute -bottom-2 left-0 w-full h-3 text-primary-green/30"
                                    viewBox="0 0 200 10"
                                >
                                    <motion.path
                                        d="M0,5 Q50,0 100,5 T200,5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                    />
                                </motion.svg>
                            </span>
                        </h1>

                        <p className="text-base sm:text-lg text-slate-600 mb-8 lg:mb-10 leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                            {isMobile
                                ? "Klinik gigi modern dengan pelayanan ramah dan harga terjangkau."
                                : "Klinik gigi modern dengan suasana yang homey dan menyenangkan. Kami siap merawat senyum Anda dengan teknologi terkini dan harga terjangkau."}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="https://wa.me/628123456789"
                                className="group bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-emerald-100 flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <FaWhatsapp className="text-2xl group-hover:scale-110 transition-transform" />
                                Booking Sekarang
                            </Link>
                            <Link
                                href="/layanan"
                                className="bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 lg:border-primary-blue lg:text-primary-blue px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-1 shadow-sm hover:shadow-md lg:hover:bg-primary-blue lg:hover:text-white"
                            >
                                Lihat Layanan
                            </Link>
                        </div>

                        {/* Trust Badge */}
                        <div className="mt-8 lg:mt-10 flex items-center justify-center lg:justify-start gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-400 text-xs font-bold">
                                        {i === 1 ? "" : i === 2 ? "" : ""}
                                    </div>
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

                    {/* Right Visual - Desktop Only with Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 bg-gradient-to-tr from-primary-blue to-primary-green rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-10 lg:scale-110"
                            />

                            <div className="relative w-full h-full rounded-[40px] overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500">
                                <AnimatePresence initial={false}>
                                    <motion.div
                                        key={desktopImages[currentImageIndex]}
                                        initial={{ x: "100%" }}
                                        animate={{ x: 0 }}
                                        exit={{ x: "-100%" }}
                                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={desktopImages[currentImageIndex]}
                                            alt="Dokter ramah melayani pasien"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Image indicator dots */}
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                                {desktopImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentImageIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex
                                            ? "bg-primary-green w-6"
                                            : "bg-slate-300 hover:bg-slate-400"
                                            }`}
                                    />
                                ))}
                            </div>

                            <motion.div
                                animate={{ y: [0, -8, 0] }}
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

                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 bg-primary-green text-white px-4 py-2 rounded-xl shadow-xl font-bold text-sm"
                            >
                                ⭐ Rating 4.9/5
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Wave separator - Desktop only */}
            <div className="hidden lg:block absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[150px]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
                </svg>
            </div>
        </section>
    );
}
