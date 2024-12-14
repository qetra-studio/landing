import { PropsWithChildren } from 'react';

import QetraBackgroundScreen from '@/components/meta/QetraBackgroundScreen';
import QetraSiteHeader from '@/components/meta/QetraSiteHeader';

export default async function PeopleLayout({ children }: PropsWithChildren) {
	return (
		<>
			<QetraSiteHeader />
			<main className="w-full h-full pt-12 md:pt-34">
				<QetraBackgroundScreen />
				{children}
			</main>
		</>
	);
}
