import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                primary: {
                    blue: "#0E4B6E",
                    green: "#2FAE9E",
                },
                brand: {
                    soft: "#F9FBFC",
                    accent: "#E6F6F3",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
            },
            fontFamily: {
                heading: ["var(--font-poppins)"],
                body: ["var(--font-inter)"],
            },
            animation: {
                'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
            },
            keyframes: {
                'bounce-slow': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
