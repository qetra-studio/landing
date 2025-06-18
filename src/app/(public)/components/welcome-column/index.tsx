import QetraTypewriter from '@/components/QetraTypewriter';
import { GridItem } from '@/components/layout/grid';
import Stack from '@/components/layout/stack';
import Image from 'next/image';

const sentences = [
	'no compromise on quality',
	'deep IT competence',
	'vast IT competence',
	'personally tailored solutions',
	'care is a core',
	'competence on healthcare domain',
	'responsibility',
];

export default function WelcomeColumn() {
	return (
		<GridItem className="gap-4 rounded-4xl bg-[url(/svg/12.svg)] bg-cover p-8 md:p-12 lg:p-30">
			<Image priority src="svg/logo.svg" height={36} width={36} alt="Logo" className="white" />
			<div className="space-y-6">
				<p className="text-base font-medium text-white">Morning, we are Qetra -</p>
				<h1 className="text-5xl md:text-5xl font-bold leading-tight pt-4 text-white">
					Premium software
					<br />
					development for
					<br />
					tailored solutions
				</h1>
			</div>
			<Stack className="items-center gap-10">
				<span className="text-base text-white">
					we have
					<QetraTypewriter sentences={sentences} />
				</span>
			</Stack>
			<div className="sr-only">
				{sentences.map((sentence, i) => (
					<span key={i}>{sentence}</span>
				))}
			</div>
		</GridItem>
	);
}
