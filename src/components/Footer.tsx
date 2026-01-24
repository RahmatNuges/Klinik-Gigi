import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaFacebook, FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-primary-blue text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative w-10 h-10">
                                <Image src="/images/logo.png" alt="Logo" fill className="object-contain brightness-0 invert" />
                            </div>
                            <span className="text-2xl font-black tracking-tighter">TOTO</span>
                        </div>
                        <p className="text-blue-100/80 leading-relaxed mb-8 text-sm">
                            Klinik gigi modern dengan standar medis terbaik dan pelayanan personal yang ramah.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors"><FaInstagram /></Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors"><FaFacebook /></Link>
                            <Link href="https://wa.me/628123456789" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-green transition-colors"><FaWhatsapp /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary-green uppercase tracking-widest text-xs">Navigasi</h4>
                        <ul className="space-y-4 text-blue-100/80 text-sm">
                            <li><Link href="/" className="hover:text-white transition-colors">Beranda</Link></li>
                            <li><Link href="/layanan" className="hover:text-white transition-colors">Layanan</Link></li>
                            <li><Link href="/dokter" className="hover:text-white transition-colors">Dokter Kami</Link></li>
                            <li><Link href="/kontak" className="hover:text-white transition-colors">Hubungi Kami</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary-green uppercase tracking-widest text-xs">Layanan</h4>
                        <ul className="space-y-4 text-blue-100/80 text-sm">
                            <li>Scaling & Polishing</li>
                            <li>Bleaching Gigi</li>
                            <li>Veneer Gigi</li>
                            <li>Tambal Estetik</li>
                            <li>Perawatan Saraf</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary-green uppercase tracking-widest text-xs">Kunjungi Kami</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <FaMapMarkerAlt className="text-primary-green text-xl shrink-0" />
                                <span className="text-blue-100/80 text-sm leading-relaxed">
                                    Jl. Tebet Raya No. 45, Jakarta Selatan<br />
                                    (Samping Distro Bloop)
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <FaPhoneAlt className="text-primary-green text-xl shrink-0" />
                                <span className="text-blue-100/80 text-sm leading-relaxed">
                                    +62 812-3456-7890<br />
                                    <span className="text-primary-green font-bold">Buka Setiap Hari: 09.00 - 21.00</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-100/30 text-[10px] font-bold tracking-[0.2em] uppercase">
                    <p>© {new Date().getFullYear()} TOTO DENTAL CLINIC. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
