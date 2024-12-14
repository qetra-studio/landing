import { Suspense } from 'react';

import QetraCard from '@/components/cards';
import cases from '@/resources/cases';
import Image from 'next/image';

export default async function CasesPage() {
	return (
		<div className="w-full h-full flex flex-col gap-4 pl-20 pr-24">
			<Suspense fallback={'Loading...'}>
				{Object.entries(cases).map(([id, c]) => (
					<QetraCard key={id} className="flex flex-col gap-2 pl-[4.5rem]">
						<h4 className="text-qetra-success">{c.title}</h4>
						<span>{c.description}</span>
						<Image priority src={c.imageUrl} alt={`case-${id}-image-url`} width={192} height={192} />
					</QetraCard>
				))}
			</Suspense>
		</div>
	);
}
