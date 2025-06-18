import Card from '@/components/layout/card';
import { GridItem } from '@/components/layout/grid';
import Stack from '@/components/layout/stack';
import Image from 'next/image';
import Link from 'next/link';

export default function LastProjectCell() {
	return (
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
					<Image priority src="svg/schedule-arrow.svg" alt="Arrow" width={35} height={35} className="text-center" />
				</Stack>
			</Stack>
		</GridItem>
	);
}
