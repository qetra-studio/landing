import clsx from 'clsx/lite';

interface QetraLogoProps {
	className?: string;
}

export default function QetraLogo({ className }: QetraLogoProps) {
	return (
		<svg className={clsx(className)} viewBox="0 0 825 825" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M215.644 413.355C215.403 304.716 303.276 216.453 411.915 216.212C520.553 215.973 608.817 303.847 609.058 412.485L824.31 412.008C823.806 184.489 638.958 0.457592 411.438 0.960256C183.919 1.46406 -0.111917 186.313 0.391656 413.831C0.897956 641.35 185.746 825.382 413.265 824.878L412.816 621.877C518.717 624.272 602.854 718.236 603.615 824.878L818.862 823.341C817.237 595.828 632.832 404.96 405.319 406.584L406.769 609.549C300.908 606.601 215.882 519.979 215.644 413.355Z"
			/>
		</svg>
	);
}
