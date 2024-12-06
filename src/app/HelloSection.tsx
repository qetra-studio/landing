import QetraLogo from "@/components/meta/QetraLogo";
import SectionTitle from "@/components/text/SectionTitle";
import SuccessBadgeText from "@/components/text/SuccessBadgeText";
import Image from "next/image";

export default function  HelloSection() {
    return <div className='h-full w-full'>
        <div
            className='flex justify-center items-center h-full w-full py-12 absolute inset-0 -z-50'> {/* background */}
            <QetraLogo className={'fill-current text-qetra-card h-full w-full'}/>
        </div>
        <div className='flex flex-col justify-stretch items-center gap-16 h-full'>
            <SectionTitle>
                Hi, we are Qetra.
            </SectionTitle>
            <div className='font-semibold flex-grow text-center text-6xl md:w-1/2'>
                We prioritize <span className='text-qetra-success'>excellence over cost</span>,
                making us the right partner for those
                value <SuccessBadgeText>high standards</SuccessBadgeText> and <SuccessBadgeText>long-term
                success</SuccessBadgeText>.
            </div>
            <div className='flex-grow'>
                <Image priority
                       src='svg/scroll.svg'
                       layout='responsive'
                       width={192}
                       height={192}
                       alt='ask-scroll-icon'/>
            </div>
        </div>
    </div>
};
