import Image from 'next/image';

export default function ProjectsInfoSection() {
	return (
		<>
			<Image src="/svg/believe-vector.svg" alt="Believe vector" priority fill className="absolute h-full w-full" />
			<span className="z-10 justify-center p-4 text-center text-4xl leading-[108%] font-medium text-white">
				We believe
				<br />
				your project
				<br />
				deserves high
				<br />
				level of care
			</span>
		</>
	);
}
