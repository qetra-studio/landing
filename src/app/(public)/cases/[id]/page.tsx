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
	return (
		<main className="px-12">
			<div className="whitespace-pre text-wrap">{JSON.stringify(cases[id as keyof typeof cases], null, '\t')}</div>
		</main>
	);
}

export function generateStaticParams(): Params[] {
	return Object.keys(cases).map((id) => ({ id }));
}
