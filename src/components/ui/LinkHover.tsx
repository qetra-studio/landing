import Stack from '@/components/layout/stack';
import Image from 'next/image';

interface Props {
	width?: number;
	height?: number;
}

export default function LinkHover({ width, height }: Props) {
	return (
		<div className="absolute w-full">
			<Stack className="flex-row justify-end invisible group-hover:visible ">
				<Image src="/svg/button-hover.svg" width={width ?? 140} height={height ?? 140} alt="hover-img" />
			</Stack>
		</div>
	);
}
