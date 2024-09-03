import {useCallback, useEffect, useRef, useState} from "react";

export default function useScrollProgress<T extends HTMLElement>  () {
    const ref = useRef<T | null>(null);
    const [progress, setProgress] = useState(0);

   /* const calculateProgress = useCallback(() => {
        if (ref.current) {
            const element = ref.current;
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Total height of the element
            const elementHeight = rect.height;

            // Calculate visible height of the element
            const visibleTop = Math.max(rect.top, 0);
            const visibleBottom = Math.min(rect.bottom, viewportHeight);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);

            // Calculate progress as a percentage of visible height relative to total height
            const progressPercentage = 1 - (visibleHeight / elementHeight);

            setProgress(progressPercentage);
        }
    }, [ref]);*/

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { scrollTop, scrollHeight, clientHeight } = ref.current;
                const totalHeight = scrollHeight - clientHeight;
                const scrollPercentage = (scrollTop / totalHeight) * 100;
                setProgress(scrollPercentage);
            }
        };

        const currentRef = ref.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial update

            return () => {
                currentRef.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);


    return {scrollProgress: progress, ref}
}
