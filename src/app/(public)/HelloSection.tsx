import QetraBackgroundScreen from '@/components/meta/QetraBackgroundScreen';
import SuccessBadgeText from '@/components/text/SuccessBadgeText';
import Image from 'next/image';

export default function HelloSection() {
	return (
		<div className="h-full w-full">
			<QetraBackgroundScreen />
			<div className="flex flex-col justify-stretch items-center gap-2 lg:gap-16 h-full">
				<h1 className="font-semibold text-center text-6xl">Hi, we are Qetra.</h1>
				<div className="font-semibold flex-grow text-center lg:w-3/4 text-2xl lg:text-6xl">
					We prioritize <span className="text-qetra-success">excellence over cost</span>, making us the right partner
					for those value <SuccessBadgeText>high standards</SuccessBadgeText> and{' '}
					<SuccessBadgeText>long-term success</SuccessBadgeText>.
				</div>
				<div className="flex-grow">
					<Image
						priority
						src="svg/scroll.svg"
						width={192}
						height={192}
						alt="ask-scroll-icon"
						sizes="100vw"
						style={{
							width: '100%',
							height: 'auto',
						}}
					/>
				</div>
			</div>
		</div>
	);
}
