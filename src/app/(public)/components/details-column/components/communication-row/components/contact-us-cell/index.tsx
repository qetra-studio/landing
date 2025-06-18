import EmailCopy from '@/components/EmailCopy';
import Card, { CardBody } from '@/components/layout/card';
import Grid, { GridItem } from '@/components/layout/grid';
import Stack from '@/components/layout/stack';

export default function ContactUsCell() {
	return (
		<GridItem component={Card} className="col-span-3 rounded-4xl">
			<CardBody className="p-5 justify-between">
				<span className="text-white text-3xl font-medium">Contact us</span>

				<Grid className="justify-center items-center grid-flow-col grid-cols-3">
					<GridItem component="span" className="text-white text-sm grid-span-2">
						contact@qetra.studio
					</GridItem>
					<GridItem component={EmailCopy} className="grid-span-1" text="contact@qetra.studio" />
				</Grid>
			</CardBody>
		</GridItem>
	);
}
