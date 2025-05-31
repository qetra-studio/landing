export default function composeClassName<C extends string, T extends string | null | undefined>(
	className: C,
	addition?: T
) {
	return addition ? `${className} ${addition}` : className;
}
