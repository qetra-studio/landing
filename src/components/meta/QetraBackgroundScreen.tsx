import QetraLogo from '@/components/meta/QetraLogo';

export default function QetraBackgroundScreen() {
	return (
		<div className="flex justify-center items-center h-full w-full py-12 absolute inset-0 -z-50">
			<QetraLogo className="fill-current text-qetra-card h-full w-full" />
		</div>
	);
}
