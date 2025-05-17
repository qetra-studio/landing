import { Metadata } from 'next';

export const metadata: Metadata = {
	description: 'Home page of Qetra.',
};

export default async function HomePage() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 min-h-screen text-base-content p-6 gap-4 dark:bg-bg-dark">
			{/* Hero card */}
			<div className="rounded-3xl bg-gradient-to-br from-[#2a1448] to-[#161616] p-10 flex flex-col justify-center items-center shadow-xl">
				<div className="space-y-6">
					<p className="text-sm ">Morning, we are Qetra</p>
					<h1 className="text-4xl md:text-5xl font-bold leading-tight">
						Premium software
						<br />
						development for
						<br />
						tailored solutions
					</h1>
					<p className="text-sm ">
						we have <span className="text-primary font-medium">no compromise on quality</span>
					</p>
				</div>
			</div>
		</div>
	);
}
