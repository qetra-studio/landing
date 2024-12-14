import sample from '@/resources/cases/sample';

const cases = {
	sample: sample,
	sample2: { ...sample, title: 'sample2' },
	sample3: { ...sample, title: 'sample3' },
	sample4: { ...sample, title: 'sample4' },
	sample5: { ...sample, title: 'sample5' },
} as const;

export default cases;
