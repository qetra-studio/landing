import env from '@/environment';

export default function QetraSiteFooter() {
	return (
		<footer className="fixed bottom-0">
			<div className="invisible md:visible z-50 text-gray-700 select-none">
				App version: <span className="select-text">{env.version}</span>
			</div>
		</footer>
	);
}
