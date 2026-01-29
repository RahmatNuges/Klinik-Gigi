"use client";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Testimonials() {
    const reviews = [
        { name: "Andi Saputra", text: "Terima kasih Toto Dental! Scaling-nya sangat nyaman dan tidak sakit. Dokternya ramah banget.", rating: 5 },
        { name: "Siska Amelia", text: "Veneer di sini bener-bener natural. Hasilnya memuaskan dan harganya sangat bersaing.", rating: 5 },
        { name: "Doni Pratama", text: "Kliniknya bersih banget, alat-alatnya modern. Rekomendasi buat anak muda yang cari klinik gigi.", rating: 5 }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => { };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    const ReviewCard = ({ item }: { item: typeof reviews[0] }) => (
        <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between h-full hover:shadow-lg transition-shadow">
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
    );

    return (
        <section className="py-24 bg-brand-soft overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary-green font-bold tracking-widest uppercase text-sm mb-4">Testimoni Pasien</h2>
                    <p className="text-3xl md:text-4xl font-bold text-primary-blue mb-4 leading-tight text-balance">
                        Apa Kata Mereka Tentang <br className="hidden md:block" /> Pelayanan Kami?
                    </p>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-8">
                    {reviews.map((item, i) => (
                        <ReviewCard key={i} item={item} />
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <div className="relative overflow-visible px-2">
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(_, info) => {
                                if (info.offset.x < -50) next();
                                if (info.offset.x > 50) prev();
                            }}
                            className="cursor-grab active:cursor-grabbing"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ReviewCard item={reviews[currentIndex]} />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 transition-all duration-300 rounded-full ${currentIndex === i ? "w-8 bg-primary-green" : "w-2 bg-slate-200"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
