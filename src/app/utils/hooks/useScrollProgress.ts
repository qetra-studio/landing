import {useEffect, useRef, useState} from "react";

export default function useScrollProgress<T extends HTMLElement>  () {
    const ref = useRef<T | null>(null);
    const [progress, setProgress] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { scrollTop, scrollHeight, clientHeight } = ref.current;
                const totalHeight = scrollHeight - clientHeight;
                const scrollPercentage = (scrollTop / totalHeight);
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
