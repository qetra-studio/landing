'use client';

import { AppProgressBar } from 'next-nprogress-bar';

export default function Providers() {
	return (
		<>
			<AppProgressBar
				height="2px"
				color="#C3E600"
				options={{
					showSpinner: false,
				}}
			/>
		</>
	);
}
