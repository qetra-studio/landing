import Header from "@/app/Header";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {PropsWithChildren, ReactNode} from "react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {template: '%s | Qetra', absolute: 'Qetra'},
    keywords: ['qetra', 'it', 'healthcare', 'management', 'development'],
    alternates: {
        'canonical': 'https://qetra.studio/'
    },
    openGraph: {
        url: 'https://qetra.studio/',
        // todo
    } // todo seo optimization
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
