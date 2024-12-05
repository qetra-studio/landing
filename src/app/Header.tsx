'use client';
import QetraLogo from "@/components/meta/QetraLogo";
import {useLayoutEffect} from "react";

function NavigationBar() {
    return <div className='flex flex-row gap-8 text-qetra-secondary'>
        <a>Home</a>
        <a>About</a>
        <a>Work</a>
        <a>News</a>
        <a>Contact</a>
    </div>
}


export default function Header() {
    return <header className={'sticky top-0 '}>
        <div className='flex flex-row w-full px-24 py-12 justify-between absolute invisible md:visible z-50'>
            <QetraLogo className='w-10 h-10 fill-current text-qetra-secondary'/>
            <NavigationBar/>
        </div>
    </header>
}
