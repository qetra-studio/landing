import HelloSection from '@/app/(public)/HelloSection';
import LabeledCard from '@/components/cards/LabeledCard';
import SectionTitle from '@/components/text/SectionTitle';
import { Metadata } from 'next';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

const cardProps = {
	className: 'text-3xl',
} as const;

export default async function Home() {
	return (
		<div className="h-full w-full">
			<HelloSection />
			<div className="w-full px-10 md:px-40 flex flex-col gap-8">
				<SectionTitle>What Sets Us Apart?</SectionTitle>
				<div className="grid grid-cols-1 xl:grid-cols-3 gap-x-4 gap-y-1 xl:gap-x-10 xl:gap-y-2 auto-rows-auto items-center">
					<LabeledCard
						label="no compromise on quality"
						slotProps={{
							label: {
								className: 'rotate-3',
							},
							card: cardProps,
						}}
					>
						We uphold quality above all else, prioritizing excellence over shortcuts or cost-cutting.
					</LabeledCard>
					<LabeledCard
						label="deep it competence"
						slotProps={{
							label: {
								className: '-rotate-9',
							},
							card: cardProps,
						}}
					>
						Each of us came through some real-world <s>sh</s> challenges to deliver best quality for you today.
					</LabeledCard>
					<LabeledCard
						label="personally tailored solutions"
						slotProps={{
							label: {
								className: 'rotate-10',
							},
							card: cardProps,
						}}
					>
						We do hear/listen to your needs. Every client is unique, and so are our solutions.
					</LabeledCard>
					<LabeledCard
						label="care is a core"
						slotProps={{
							label: {
								className: 'rotate-3 right-20 self-end',
							},
							card: cardProps,
						}}
					>
						We speak openly and standing by our promises.
					</LabeledCard>
					<LabeledCard
						label="competence in healthcare domain"
						slotProps={{
							label: {
								className: '-rotate-3',
							},
							card: cardProps,
						}}
					>
						We have a proven track record of delivering impactful solutions and building healthcare related IT systems.
					</LabeledCard>
					<LabeledCard
						label="responsibility"
						slotProps={{
							label: {
								className: 'rotate-20 top-10 self-end',
							},
							card: cardProps,
						}}
					>
						We believe in open dialogue, delivering honest feedback, and keeping you in the loop at every turn.
					</LabeledCard>
				</div>
			</div>
		</div>
	);
}
