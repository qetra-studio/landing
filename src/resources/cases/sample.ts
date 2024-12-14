import { CaseStudy, ShortCaseStudy } from '@/resources/cases/types';

const sample: CaseStudy & ShortCaseStudy = {
	title: 'Sample case study',
	client: {
		name: 'Sample client name',
		description:
			'Sample description with many many many many words wow that so much can it handle more? I dont know to be honest',
		location: 'United States of Memes',
	},
	challenges: [
		'Had to deal with my fantasy to write something long and not dumb, do you like it? because I do, well, its still complicated rn',
		'and we go again! Had to deal with my fantasy to write something long and not dumb, do you like it? because I do, well, its still complicated rn',
		'and again! Had to deal with my fantasy to write something long and not dumb, do you like it? because I do, well, its still complicated rn',
		'again! Had to deal with my fantasy to write something long and not dumb, do you like it? because I do, well, its still complicated rn',
	],
	goals: [
		'Write something meaningful in sample piece of data, but go again! Had to deal with my fantasy to write something long and not dumb, do you like it? because I do, well, its still complicated rn',
		'and again, its not dumb I swear! Had to deal with my fantasy to write something long and not dumb, do you like it? because I do, well, its still complicated rn',
	],
	overview: {
		description: 'meme sample in meme industry of meme site',
		industry: 'Industry of memology',
		involvement: ['2 beers', '1 vodka', '3 vapes'],
		product: 'memeful joke',
		timeline: '30 minutes and 1 meme',
	},
	results: {
		metrics: '+1 meme in world',
		clientFeedback: 'clients say that they are proud of memes (especially mine)',
		marketResponse: 'market said thanks for 2 beers, 1 vodka and 3 vapes',
	},
	showcase: {
		demos: {
			figmaUrls: ['https://www.youtube.com/watch?v=DocPpfGQeOw', 'https://www.youtube.com/watch?v=DocPpfGQeOw'],
			sandboxUrls: ['https://www.youtube.com/watch?v=DocPpfGQeOw', 'https://www.youtube.com/watch?v=DocPpfGQeOw'],
		},
		design: 'who knows what will be there, may be embedded figma screens? who knows',
		media: {
			imageUrls: [
				'https://images.squarespace-cdn.com/content/v1/653fe6ddd43f905972f11f8f/4059410c-ce49-4c20-b79b-79d2ef0867ca/2.png',
				'https://images.squarespace-cdn.com/content/v1/653fe6ddd43f905972f11f8f/4059410c-ce49-4c20-b79b-79d2ef0867ca/2.png',
			],
			videoUrls: ['https://www.youtube.com/watch?v=DocPpfGQeOw', 'https://www.youtube.com/watch?v=DocPpfGQeOw'],
		},
	},
	solution:
		'produced meme of memes, yowai mo! produced meme of memes, yowai mo! produced meme of memes, yowai mo! produced meme of memes, yowai mo! produced meme of memes, yowai mo! produced meme of memes, yowai mo! produced meme of memes, yowai mo! produced meme of memes, yowai mo! produced meme of memes, yowai mo! produced meme of memes, yowai mo!',
	tools: {
		technologies: ['meme factory', 'yowai mo', 'shakke', 'lol'],
		frameworks: ['lol', 'meme factory', 'yowai mo', 'shakke'],
		integrations: ['youtube', 'twitter', 'telegram memes'],
	},
	description:
		'Sample description with many many many many words wow that so much can it handle more? I dont know to be honest ' +
		'Sample description with many many many many words wow that so much can it handle more? I dont know to be honest ' +
		'Sample description with many many many many words wow that so much can it handle more? I dont know to be honest ' +
		'Sample description with many many many many words wow that so much can it handle more? I dont know to be honest ' +
		'Sample description with many many many many words wow that so much can it handle more? I dont know to be honest ' +
		'Sample description with many many many many words wow that so much can it handle more? I dont know to be honest ',
	imageUrl:
		'https://images.squarespace-cdn.com/content/v1/653fe6ddd43f905972f11f8f/4059410c-ce49-4c20-b79b-79d2ef0867ca/2.png',
};

export default sample;
