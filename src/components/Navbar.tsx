"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm h-20" : "bg-transparent h-24"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
                            <Image
                                src="/images/logo.png"
                                alt="Toto Dental Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold leading-none tracking-tight text-primary-blue">TOTO</span>
                            <span className="text-primary-green text-xs font-bold tracking-[0.2em] uppercase">Dental</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {["Beranda", "Layanan", "Dokter", "Tentang Kami", "Kontak"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Beranda" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                            className="text-slate-600 hover:text-primary-blue font-medium transition-colors text-sm"
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/628123456789"
                        className="bg-primary-blue hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5"
                    >
                        BOOKING SEKARANG
                    </Link>
                </div>

                {/* Mobile Menu & CTA */}
                <div className="md:hidden flex items-center gap-3">
                    <Link
                        href="https://wa.me/628123456789"
                        className="bg-primary-blue text-white px-4 py-2 rounded-full font-bold text-xs shadow-md"
                    >
                        BOOKING
                    </Link>
                    <button
                        className="text-primary-blue text-2xl focus:outline-none p-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
                    {["Beranda", "Layanan", "Dokter", "Tentang Kami", "Kontak"].map((item) => (
                        <Link
                            key={item}
                            href={item === "Beranda" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                            className="text-slate-600 hover:text-primary-blue font-medium text-base py-2 border-b border-slate-50 last:border-0"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link
                        href="https://wa.me/628123456789"
                        className="bg-primary-blue text-white text-center py-3 rounded-full font-bold shadow-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        BOOKING VIA WA
                    </Link>
                </div>
            )}
        </nav>
    );
}
