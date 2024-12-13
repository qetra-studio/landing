import cases from '@/resources/cases';

export default function CasesPage() {
	return (
		<div className="w-full h-full">
			{Object.entries(cases).map(([id, c]) => (
				<div key={id}>{id}</div>
			))}
		</div>
	);
}
