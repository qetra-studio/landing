import EmailCopy from '@/components/EmailCopy';
import QetraTypewriter from '@/components/QetraTypewriter';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

const sentences = [
	'no compromise on quality',
	'deep it competence',
	'vast it competence',
	'personally tailored solutions',
	'care is a core',
	'competence on healthcare domain',
	'responsibility',
];

export default function HomePage() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full p-4 gap-4">
			{/* Morning */}
			<div className="grid gap-4 size-full rounded-4xl bg-gradient-to-br from-[#8059AA] to-[#272727] p-6 md:p-12 lg:p-30">
				<Image src="svg/logo.svg" height={36} width={36} alt="Logo" className="white" />
				<div className="space-y-6 ">
					<p className="text-base font-medium text-white">Morning, we are Qetra -</p>
					<h1 className="text-5xl md:text-5xl font-bold leading-tight pt-4 text-white">
						Premium software
						<br />
						development for
						<br />
						tailored solutions
					</h1>
				</div>
				<div className="flex items-center gap-10">
					<span className="text-base text-white">
						we have
						<QetraTypewriter sentences={sentences} />
					</span>
				</div>
			</div>
			<div className="grid grid-flow-col grid-rows-6 gap-4">
				{/* Services */}
				<div className="row-span-3 card rounded-4xl w-full p-6">
					<div className="card-body flex flex-col justify-between">
						<span className="text-3xl text-white font-medium">Services</span>
						<Image
							src="svg/services-img.svg"
							width={1}
							height={1}
							alt="services-icon"
							className="h-full w-1/2 md:-top-22 lg:-top-10 md:right-12 xl:right-26 invisible md:visible absolute"
						/>
						<span className="uppercase text-sm text-gray-400 font-medium">
							Here’s how we <br /> solve your <br /> challenges for <br /> your success.
						</span>
					</div>
				</div>
				{/* Last project & Case studies	*/}
				<div className="row-span-2 w-full">
					<div className="grid grid-flow-row grid-cols-3 gap-4 h-full">
						{/* Last project */}
						<Link href="/mamay" className="relative group col-span-2 size-full rounded-4xl overflow-hidden block">
							<div className="absolute inset-0 z-10 btn card size-full rounded-4xl flex flex-col items-start justify-between p-10 group-hover:bg-custom-radial-gradient transition-all duration-500">
								<span className="text-white text-3xl font-medium">
									EHR system
									<span className="badge text-purple-400 border-purple-400 ml-2">latest</span>
								</span>
								<span className="text-gray-400 text-sm">HEALTHCARE</span>
							</div>

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

							<div className="absolute z-30 inset-0 bg-transparent text-black cursor-pointer invisible transition-opacity duration-300 group-hover:visible flex justify-end">
								<div className="h-[40%] w-[30%] bg-purple-top-right-button rounded-3xl p-10 flex flex-col items-center justify-center ">
									<Image src="svg/schedule-arrow.svg" alt="Arrow" width={35} height={35} className="text-center" />
								</div>
							</div>
						</Link>
						{/* Case studies */}
						<Link
							className="card col-span-1 rounded-4xl size-full lg:justify-end p-2 items-center lg:items-start md:p-4 lg:p-6 group"
							href="/mrlldd"
						>
							<>
								<div className="absolute inset-0 z-10 card size-full rounded-4xl p-4 group-hover:bg-custom-radial-gradient transition-all duration-500">
									<span className="break-all size-full md:break-normal text-3xl md:text-2xl lg:text-3xl text-white font-medium flex p-4 items-end justify-start">
										All case <br />
										studies
									</span>
								</div>
								<div
									className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-4xl bg-darkbg"
									style={{
										clipPath: 'url(#caseClipRoundedCustom)',
									}}
								/>

								<div className="absolute z-30 inset-0 bg-transparent  cursor-pointer invisible transition-opacity duration-300 group-hover:visible flex justify-end">
									<div className="h-[30%] w-[30%] bg-purple-top-right-button rounded-3xl flex flex-col items-center justify-center">
										<Image src="svg/schedule-arrow.svg" alt="Arrow" width={35} height={35} className="" />
									</div>
								</div>
								<svg>
									<defs>
										<clipPath id="caseClipRoundedCustom" clipPathUnits="objectBoundingBox">
											<path
												d="
													M 0.59 0
													A 0.08 0.1 0 0 1 0.67 0.1
													L 0.67 0.22
													A 0.08 0.1 0 0 0 0.73 0.32
													L 0.92 0.32
													A 0.08 0.1 0 0 1 1 0.4
													L 1 0
													Z"
											/>
										</clipPath>
									</defs>
								</svg>
							</>
						</Link>
					</div>
				</div>
				{/* Contact us & Schedule meeting */}
				<div className="row-span-1 grid grid-flow-col grid-cols-5 gap-4 ">
					{/* Contact us */}
					<div className="card size-full col-span-3 rounded-4xl ">
						<div className="card-body p-5 justify-between">
							<span className="text-white text-3xl font-medium">Contact us</span>
							<div className="grid grid-cols-3 justify-center items-center">
								<span className="text-white col-span-1 text-sm">contact@qetra.studio</span>
								<EmailCopy className="col-span-2" text="contact@qetra.studio" />
							</div>
						</div>
					</div>
					{/* Schedule meeting */}
					<Link href="/kalexi" className="size-full col-span-2 rounded-4xl card md:p-4 group">
						<div className="absolute inset-0 rounded-4xl grid grid-flow-row grid-cols-6 items-center size-full group-hover:bg-custom-radial-gradient bg-transparent p-4">
							<Image
								src="svg/schedule-arrow.svg"
								alt="Schedule arrow"
								className="col-span-1 text-right"
								width={20}
								height={20}
							/>
							<span className="col-span-5 uppercase text-white font-normal text-xl text-left">Schedule meeting</span>
						</div>
					</Link>
				</div>
			</div>
			{/* For DOM only */}
			<div className="sr-only">
				{sentences.map((sentence, i) => (
					<span key={i}>{sentence}</span>
				))}
			</div>
		</div>
	);
}
