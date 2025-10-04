import Image from 'next/image';

export default function BackgroundImage() {
	return (
		<div className="absolute top-0 right-0 z-0 h-full w-[65%] p-4">
			<div className="relative h-full w-full">
				<Image
					src="/jpg/glass-bg.jpg"
					alt="Background"
					fill
					className="object-cover"
					priority
					style={{
						WebkitMaskImage: "url('/svg/web-glass-mask.svg')",
						maskImage: "url('/svg/web-glass-mask.svg')",
						maskSize: 'contain',
						WebkitMaskSize: 'contain',
						maskMode: 'alpha',
						maskRepeat: 'no-repeat',
						maskPosition: 'center',
						WebkitMaskPosition: 'center',
					}}
				/>
			</div>
		</div>
	);
}
