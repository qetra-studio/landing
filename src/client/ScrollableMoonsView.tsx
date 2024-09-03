import useScrollProgress from "@/utils/hooks/useScrollProgress";
import {PropsWithChildren, useEffect, useState} from "react";

function ProgressColumn({progress}: { progress: number; isVisible: boolean }) {
    return (
        <div
            className={'left-0.5 w-48 p-2 h-screen, sticky'}
        >
            <h4>Scroll Progress</h4>
            <div className={'h-5 bg-white'}>
                <div
                    className={'h-full bg-emerald-500'}
                    style={{width: `${progress}%`}}
                />
            </div>
            <p>{progress.toFixed(2)}%</p>
        </div>
    );
}

export default function ScrollableMoonsView({children}: PropsWithChildren) {
    const [isStickyVisible, setIsStickyVisible] = useState(true);
    const {scrollProgress: progress, ref: contentRef} = useScrollProgress<HTMLDivElement>();

    useEffect(() => {
        const handleScroll = () => {
            if (contentRef.current) {
                const contentHeight = contentRef.current.scrollHeight;
                const containerHeight = contentRef.current.clientHeight;
                const scrollTop = contentRef.current.scrollTop;

                // Determine if content column is fully scrolled
                const isFullyScrolled = scrollTop + containerHeight >= contentHeight;

                setIsStickyVisible(!isFullyScrolled);
            }
        };

        const contentElement = contentRef.current;
        if (contentElement) {
            contentElement.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check

            return () => {
                contentElement.removeEventListener('scroll', handleScroll);
            };
        }
    }, [contentRef]);

    return (
        <div className='flex h-screen overflow-hidden'>
            <div className='flex flex-1'>
                <ProgressColumn progress={progress} isVisible={isStickyVisible}/>
                <div
                    ref={contentRef}
                    className='flex-1 overflow-y-auto h-screen'
                    style={{
                        scrollbarWidth: 'none'
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
