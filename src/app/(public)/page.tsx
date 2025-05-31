import { Suspense } from 'react';

import EmailCopy from '@/components/EmailCopy';
import QetraTypewriter from '@/components/QetraTypewriter';
import Card, { CardBody } from '@/components/layout/card';
import Grid, { GridItem } from '@/components/layout/grid';
import Stack from '@/components/layout/stack';
import QetraBackgroundScreen from '@/components/meta/QetraBackgroundScreen';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

const sentences = [
	'no compromise on quality',
	'deep IT competence',
	'vast IT competence',
	'personally tailored solutions',
	'care is a core',
	'competence on healthcare domain',
	'responsibility',
];

export default function HomePage() {
	return (
		<Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 content-stretch">
			{/* Morning */}
			<GridItem className="gap-4 rounded-4xl bg-gradient-to-br from-[#8059AA] to-[#272727] p-8 md:p-12 lg:p-30">
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
			</GridItem>
			<Grid className="grid-flow-col grid-rows-6 gap-4">
				{/* Services */}
				<GridItem component={Card} className="row-span-3 rounded-4xl p-6">
					<CardBody component={Stack} className="flex-col justify-between">
						<span className="text-3xl text-white font-medium">Services</span>
						<Suspense fallback={<QetraBackgroundScreen />}>
							<Image
								priority
								src="svg/services-img.svg"
								width={1}
								height={1}
								alt="services-icon"
								className="h-full w-1/2 md:-top-22 lg:-top-10 md:right-12 xl:right-26 invisible md:visible absolute"
							/>
						</Suspense>

						<span className="uppercase text-sm text-gray-400 font-medium">
							Here’s how we <br /> solve your <br /> challenges for <br /> your success.
						</span>
					</CardBody>
				</GridItem>

				{/* Last project & Case studies	*/}
				<GridItem className="row-span-2">
					<Grid className="grid-flow-row grid-cols-3 gap-4 justify-items-stretch">
						{/* Last project */}
						<GridItem
							className="relative group col-span-2 size-full rounded-4xl overflow-hidden block"
							component={Link}
							href="/mamay"
						>
							<Card
								component={Stack}
								className="absolute inset-0 z-10 btn size-full rounded-4xl flex-col items-start justify-between p-10 group-hover:bg-custom-radial-gradient transition-all duration-500"
							>
								<span className="text-white text-3xl font-medium">
									EHR system
									<span className="badge text-purple-400 border-purple-400 ml-2">latest</span>
								</span>
								<span className="text-gray-400 text-sm">HEALTHCARE</span>
							</Card>

							<div
								className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-4xl bg-darkbg"
								style={{
									clipPath: 'url(#clipRoundedCustom)',
								}}
							/>

							<svg>
								<defs>
									<clipPath id="clipRoundedCustom" clipPathUnits="objectBoundingBox">
										<path
											d="
												M 0.6 0
												A 0.06 0.08 0 0 1 0.66 0.08
												L 0.66 0.4
												A 0.06 0.08 0 0 0 0.72 0.48
												L 0.9 0.48
												A 0.1 0.1 0 0 1 1 0.58
												L 1 0
												Z
											"
										/>
									</clipPath>
								</defs>
							</svg>

							<Stack className="absolute z-30 inset-0 bg-transparent text-black cursor-pointer invisible transition-opacity duration-300 group-hover:visible justify-end">
								<Stack className="h-[40%] w-[30%] bg-purple-top-right-button rounded-3xl p-10 flex-col items-center justify-center ">
									<Image
										priority
										src="svg/schedule-arrow.svg"
										alt="Arrow"
										width={35}
										height={35}
										className="text-center"
									/>
								</Stack>
							</Stack>
						</GridItem>
						<GridItem
							className="col-span-1 rounded-4xl lg:justify-end items-center lg:items-start hover:bg-transparent bg-custom-radial-gradient group"
							component={Link}
							href="/mrlldd"
						>
							<Grid className="grid-flow-row grid-rows-3">
								<Grid className="row-span-1 size-full grid-flow-col grid-cols-3 relative">
									<Grid className="grid-flow-row grid-rows-2 group-hover:bg-darkbg absolute inset-0 z-10">
										<GridItem className="row-span-1 group-hover:size-full group-hover:rounded-tr-4xl grid grid-cols-3">
											<div className="col-span-2 group-hover:rounded-tr-4xl group-hover:bg-dark-base-100 size-full group-hover:rounded-tl-4xl" />
										</GridItem>
										<GridItem className="row-span-1 group-hover:bg-dark-base-100 group-hover:size-full group-hover:rounded-tr-4xl" />
									</Grid>
									<GridItem className="col-span-2" />
									<GridItem className="col-span-1 bg-darkbg rounded-bl-4xl z-20 invisible group-hover:visible size-full pl-2 pb-2">
										<Stack
											component="span"
											className="p-4 bg-purple-300 size-full rounded-4xl items-center justify-center"
										>
											шо
										</Stack>
									</GridItem>
								</Grid>
								<GridItem className="row-span-2 rounded-bl-4xl rounded-br-4xl rounded-tr-4xl relative group-hover:bg-dark-base-100">
									<GridItem
										component={Stack}
										className="break-all size-full col-span-3 md:break-normal text-3xl md:text-2xl lg:text-3xl text-white font-medium items-end justify-start"
									>
										<span className="p-6">
											All case <br />
											studies
										</span>
									</GridItem>
								</GridItem>
							</Grid>
						</GridItem>
					</Grid>
				</GridItem>
				<GridItem className="row-span-1 grid-flow-col grid-cols-5 gap-4">
					<GridItem component={Card} className="size-full col-span-3 rounded-4xl">
						<CardBody className="p-5 justify-between">
							<span className="text-white text-3xl font-medium">Contact us</span>
							<Grid className="grid-cols-3 justify-center items-center">
								<span className="text-white col-span-1 text-sm">contact@qetra.studio</span>
								<GridItem component={EmailCopy} className="col-span-2" text="contact@qetra.studio" />
							</Grid>
						</CardBody>
					</GridItem>
					{/* Schedule meeting */}
					<Link href="/kalexi" className="size-full col-span-2 rounded-4xl card md:p-4 group">
						<Grid className="absolute inset-0 rounded-4xl grid-flow-row grid-cols-6 items-center size-full group-hover:bg-custom-radial-gradient bg-transparent p-4">
							<GridItem
								className="col-span-1 text-right"
								component={Image}
								src="svg/schedule-arrow.svg"
								alt="Schedule arrow"
								width={20}
								height={20}
							/>
							<GridItem className="col-span-5 uppercase text-white font-normal text-xl text-left">
								Schedule meeting
							</GridItem>
						</Grid>
					</Link>
				</GridItem>
			</Grid>
			{/* For DOM only */}
			<div className="sr-only">
				{sentences.map((sentence, i) => (
					<span key={i}>{sentence}</span>
				))}
			</div>
		</Grid>
	);
}
