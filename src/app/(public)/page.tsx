import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

export default async function HomePage() {
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
				<p className="text-base text-white">
					we have <span className="text-primary font-medium text-base">no compromise on quality|</span>
				</p>
			</div>
			<div className="grid grid-flow-col grid-rows-6 gap-4">
				{/* Services */}
				<div className="row-span-3 card rounded-4xl w-full p-6">
					<div className="card-body flex flex-col justify-between">
						<span className="text-3xl text-white font-medium">Services</span>
						<Image
							src="svg/services_img.svg"
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
						<div className="btn card rounded-4xl col-span-2 gap-4 size-full flex flex-col items-start justify-between p-10">
							<div>
								<span className="text-white text-3xl font-medium">
									EHR system
									<span className="badge text-purple-400 border-purple-400">latest</span>
								</span>
							</div>
							<div>
								<span className="text-gray-400 text-sm">HEALTHCARE</span>
							</div>
						</div>
						{/* Case studies */}
						<div className="btn card col-span-1  h-full rounded-4xl  lg:justify-end p-2 items-center lg:items-start md:p-4 lg:p-6">
							<span className="break-all md:break-normal text-3xl md:text-2xl lg:text-3xl text-white font-medium">
								All case <br />
								studies
							</span>
						</div>
					</div>
				</div>
				{/* Contact us & Schedule meeting */}
				<div className="row-span-1 grid grid-flow-col grid-cols-5 gap-4 ">
					{/* Contact us */}
					<div className="card size-full col-span-3 rounded-4xl ">
						<div className="card-body p-5 justify-between">
							<span className="text-white text-3xl font-medium">Contact us</span>
							<span className="text-white text-sm">contact@qetra.studio</span>
						</div>
					</div>
					{/* Schedule meeting */}
					<div className="btn size-full col-span-2 rounded-4xl card md:p-4">
						<div className="grid grid-flow-row grid-cols-6 items-center">
							<Image
								src="svg/schedule-arrow.svg"
								alt="Schedule arrow"
								className="col-span-1 text-right"
								width={20}
								height={20}
							/>
							<span className="col-span-5 uppercase text-white font-normal text-xl text-left">Schedule meeting</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
