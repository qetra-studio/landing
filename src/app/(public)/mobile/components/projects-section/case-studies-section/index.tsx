import Stack from '@/components/layout/stack';
import { CircleArrow } from '@/components/ui/CircleArrow';

export default function CaseStudiesSection() {
	return (
		<Stack className="m-6 items-center justify-end gap-14">
			<span className="text-xl leading-[1.12] text-white">All case studies</span>
			<CircleArrow rotate={45} arrowSize={30} size={40} />
		</Stack>
	);
}
