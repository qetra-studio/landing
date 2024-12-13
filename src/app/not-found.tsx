import QetraBackgroundScreen from '@/components/meta/QetraBackgroundScreen';
import SuccessBadgeText from '@/components/text/SuccessBadgeText';
import Link from 'next/link';

export default function Page404() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<QetraBackgroundScreen />
			<div className="flex flex-col text-center gap-4">
				<h1 className={'text-2xl'}>Oops, that`s wrong :(</h1>
				<span>The page you are looking for was not found.</span>
				<Link href="/" className="text-qetra-success">
					Go to homepage
				</Link>
			</div>
		</div>
	);
}
