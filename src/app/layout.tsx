import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {PropsWithChildren} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Moons Software",
    description: "Created by Moons software"
};

export default function RootLayout({children}: Readonly<PropsWithChildren>) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}
