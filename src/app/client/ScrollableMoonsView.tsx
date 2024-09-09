'use client';
import MoonsSet from "@/app/client/MoonsSet";
import useScrollProgress from "@/app/utils/hooks/useScrollProgress";
import {PropsWithChildren} from "react";

function StickyProgressColumn({progress}: { progress: number; }) {
    return (
        <div className='align-top py-8'>
            <MoonsSet progress={progress}/>
        </div>
    );
}

export default function ScrollableMoonsView({children}: PropsWithChildren) {
    const {scrollProgress: progress, ref: contentRef} = useScrollProgress<HTMLDivElement>();
    return (
        <div className='flex h-full w-full'>
            <div className='flex flex-1 flex-grow w-full gap-1'>
                <StickyProgressColumn progress={progress}/>
                <div
                    ref={contentRef}
                    className='flex-1 overflow-y-auto h-full'>
                    {children}
                </div>
            </div>
        </div>
    );
}
