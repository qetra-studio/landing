import Header from "@/app/(routes)/Header";
import type {Metadata} from "next";
import {PropsWithChildren} from "react";


export const metadata: Metadata = {
    title: {template: '%s | Qetra', absolute: 'Qetra'},
    keywords: ['qetra', 'it', 'healthcare', 'management', 'development'],
    alternates: {
        'canonical': 'https://qetra.studio/'
    },
    openGraph: {
        url: 'https://qetra.studio/',
        title: 'Qetra Studio',
        description: 'Qetra - the outstanding provider of IT services.'
        // todo
    } // todo seo optimization
};

export default function RootLayout({children}: PropsWithChildren) {
    return (
        <>
            <Header/>
            {children}
        </>
    );
}
