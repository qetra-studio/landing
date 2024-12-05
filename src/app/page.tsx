import QetraLogo from "@/components/meta/QetraLogo";
import Image from 'next/image';

export default function Home() {
    return (
        <main className="h-screen w-screen">
            <div className='h-full w-full'>
                <div
                    className='flex justify-center items-center h-full w-full py-12 absolute inset-0 -z-50'> {/* background */}
                    <QetraLogo className={'fill-current text-[#24222A] h-full w-full'}/>
                </div>
                <div className='flex flex-col justify-stretch items-center h-full md:pt-34 gap-20'>
                    <div className='font-semibold text-center text-6xl'>
                        Hi, we are Qetra.
                    </div>
                    <div className='font-semibold flex-grow text-center text-6xl w-4/5'>
                        We prioritize excellence over cost,
                        <br/>making us the right partner for those
                        <br/>value HIGH STANDARDS and LONG-TERM SUCCESS.
                    </div>
                    <div className='flex-grow'>
                    <Image src='svg/scroll.svg' width={192} height={192} alt='ask-scroll-icon'/>
                    </div>
                </div>
            </div>
        </main>
    );
}
