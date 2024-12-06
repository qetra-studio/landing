import Header from "@/app/Header";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {PropsWithChildren, ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Qetra",
    description: "Home page of Qetra."
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased w-full h-screen`}>
        <Header/>
        {children}
        </body>
        </html>
    );
}
