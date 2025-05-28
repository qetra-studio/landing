'use client';

import { Typewriter } from 'react-simple-typewriter';

interface Props {
	sentences: string[];
	className?: string;
}

export default function QetraTypewriter({ sentences, className }: Readonly<Props>) {
	return (
		<span className={`text-base font-semibold text-purple-300 p-4 ${className}`}>
			<Typewriter words={sentences} cursorBlinking loop cursor typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
		</span>
	);
}
