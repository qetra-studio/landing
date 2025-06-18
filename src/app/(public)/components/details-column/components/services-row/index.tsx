import Card, { CardBody } from '@/components/layout/card';
import { GridItem } from '@/components/layout/grid';
import Stack from '@/components/layout/stack';

export default function ServicesRow() {
	return (
		<GridItem component={Card} className="row-span-2 rounded-4xl p-6">
			<CardBody component={Stack} className="flex-col justify-between">
				<span className="text-3xl text-white font-medium">Services</span>
				<span className="uppercase text-sm text-gray-400 font-medium">
					Here’s how we <br /> solve your <br /> challenges for <br /> your success.
				</span>
			</CardBody>
		</GridItem>
	);
}
