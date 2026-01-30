import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const geist = Geist({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Noarifty | Roblox Developer",
    description: "Roblox developer focused on building clean, scalable systems like inventories, shops, pets, and secure backend logic.",
    keywords: ["Roblox Developer", "Game Development", "Backend Systems", "UI Design", "Noarifty"],
    authors: [{ name: "Noarifty" }],
    openGraph: {
        title: "Noarifty | Roblox Developer",
        description: "Professional Roblox developer specializing in gameplay systems, UI logic, and backend architecture.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Noarifty | Roblox Developer",
        description: "Professional Roblox developer specializing in gameplay systems, UI logic, and backend architecture.",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={geist.className}>
                <Navbar />
                {children}
                <Footer />
                <Toaster richColors position="top-right" />
            </body>
        </html>
    );
}
