'use client';

import env from '@/environment/client';
import Clarity from '@microsoft/clarity';
import { AppProgressBar } from 'next-nprogress-bar';

if (env.environment !== 'local') {
	Clarity.init(env.clarity.projectId);
}
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
