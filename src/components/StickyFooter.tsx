"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaCalendarCheck, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyFooter() {
    const [isVisible, setIsVisible] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show bar after scrolling 300px
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 300);

            // Detect bottom of page (near footer)
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollPosition = scrollY + windowHeight;

            // Adjust threshold as needed (e.g., 100px from bottom)
            setIsAtBottom(scrollPosition > documentHeight - 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className={`fixed bottom-0 left-0 w-full z-50 lg:hidden px-4 pb-6 pt-2 pointer-events-none flex ${isAtBottom ? "justify-end" : "justify-center"}`}
                >
                    <motion.div
                        layout
                        initial={false}
                        animate={{
                            width: isAtBottom ? "64px" : "100%",
                            maxWidth: isAtBottom ? "64px" : "448px",
                            borderRadius: isAtBottom ? "32px" : "16px",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            layout: { duration: 0.3 }
                        }}
                        className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-2 pointer-events-auto overflow-hidden flex items-center justify-center"
                    >
                        <Link
                            href="https://wa.me/628123456789"
                            className={`bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-3 shadow-lg shadow-emerald-200 transition-all active:scale-95 ${isAtBottom ? "w-12 h-12 rounded-full" : "w-full py-4 rounded-xl"
                                }`}
                        >
                            <FaWhatsapp className={`${isAtBottom ? "text-2xl" : "text-2xl"}`} />
                            <AnimatePresence>
                                {!isAtBottom && (
                                    <motion.span
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        className="text-sm font-bold whitespace-nowrap"
                                    >
                                        Konsultasi WhatsApp
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
