interface Params {
	id: string;
}

export default async function PeopleByIdPage({ params }: { params: Promise<Params> }) {
	const { id } = await params;
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<div className="flex flex-col gap-4 text-center">
				<h1 className="text-3xl text-qetra-success">{id}</h1>
				<span>A very cool person we have in our team!</span>
			</div>
		</div>
	);
}

export function generateStaticParams() {
	return [{ id: 'mrlldd' }, { id: 'mamay' }, { id: 'kalexi' }, { id: 'trunovd' }, { id: 'alonaberezniak' }];
}
