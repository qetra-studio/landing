import Grid, { GridItem } from '@/components/layout/grid';
import composeClassName from '@/utils/compose-class-name';
import { ArrowUp } from 'lucide-react';

const ResponsibilitiesItemCard = ({ title, className }: { title: string; className?: string }) => (
	<GridItem
		className={composeClassName(
			`card card-border bg-card-dark m-4 grid-rows-2 rounded-4xl backdrop-blur-md`,
			className
		)}
	>
		<div
			className="card m-4 w-min border-[0.5px] border-[#68686a]"
			style={{
				background: 'linear-gradient(135deg, #2c2d31 0%, #3CCF9E 50%, #2c2d31 100%)',
			}}
		>
			<ArrowUp size={28} className="rotate-45" />
		</div>
		<span className="m-4 text-lg leading-[1.02] font-semibold text-white">{title}</span>
	</GridItem>
);

export default function InfoSection() {
	return (
		<Grid className="grid-cols-2">
			<ResponsibilitiesItemCard title="Development" />
			<ResponsibilitiesItemCard title="UI/UX Design" />
			<ResponsibilitiesItemCard title="Q/A Testing" />
			<ResponsibilitiesItemCard title="And more" className="bg-transparent" />
		</Grid>
	);
}
