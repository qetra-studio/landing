/** @type {import('prettier').Config} */
const config = {
	semi: true,
	printWidth: 120,
	singleQuote: true,
	bracketSpacing: true,
	useTabs: true,
	trailingComma: 'es5',
	importOrder: ['^(^react$|@react|react$)', '^@mui/(.*)$', '<THIRD_PARTY_MODULES>', '^[./]'],
	importOrderGroupNamespaceSpecifiers: true,
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
};

export default config;
