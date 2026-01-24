import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins"
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

export const metadata: Metadata = {
    title: "Toto Dental - Perawatan Gigi Modern & Terpercaya",
    description: "Klinik gigi modern dengan fokus pada kesehatan dan estetika senyum Anda. Profesional, bersih, dan ramah.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id">
            <body className={`${inter.variable} ${poppins.variable} font-body antialiased`}>
                {children}
            </body>
        </html>
    );
}
