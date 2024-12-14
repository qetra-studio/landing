import cases from '@/resources/cases';
import { notFound } from 'next/navigation';

interface Params {
	id: string;
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
	const { id } = await params;
	if (!cases[id as keyof typeof cases]) {
		return notFound();
	}
	return 'TBD';
	/*
	return (
		<div className={'whitespace-pre text-wrap px-12'}>
			{JSON.stringify(cases[id as keyof typeof cases], null, '\t')}
		</div>
	);*/
}

export function generateStaticParams(): Params[] {
	return Object.keys(cases).map((id) => ({ id }));
}
