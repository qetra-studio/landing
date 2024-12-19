import QetraLogo from '@/components/meta/QetraLogo';
import Link from 'next/link';

function NavigationBar() {
	return (
		<div className="flex flex-row gap-8 text-qetra-secondary">
			<Link href="/">Home</Link>
			<Link href="./about">About</Link>
			<Link href="./work">Work</Link>
			<Link href="./news">News</Link>
			<Link href="./contacts">Contacts</Link>
		</div>
	);
}

interface HeaderProps {
	withNavigationBar?: true;
}

export default function QetraSiteHeader({ withNavigationBar }: HeaderProps) {
	return (
		<header className="sticky top-0">
			<div className="flex flex-row w-full px-24 py-12 justify-between absolute invisible lg:visible z-50">
				<Link href="/">
					<QetraLogo className="w-10 h-10 fill-current text-qetra-secondary" />
				</Link>
				{withNavigationBar ? <NavigationBar /> : null}
			</div>
		</header>
	);
}
