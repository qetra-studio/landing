'use client';

import { Copy } from 'lucide-react';

interface Props {
	text: string;
	className?: string;
}

export default function EmailCopy({ text, className }: Readonly<Props>) {
	const handleCopy = () => {
		navigator.clipboard.writeText(text);
	};

	return <Copy onClick={handleCopy} className={`"w-12 h-14 cursor-pointer hover:opacity-70" ${className}`} />;
}
