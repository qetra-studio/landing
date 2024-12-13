export interface CaseStudy {
	title: string;
	overview: {
		description: string;
		product: string;
		industry: string;
		involvement: string[];
		timeline: string;
	};
	showcase: {
		media: {
			imageUrls: string[];
			videoUrls: string[];
		};
		design: {
			// tbd
		};
		demos: {
			figmaUrls: string[];
			sandboxUrls: string[];
		};
	};
	client: {
		name: string;
		description: string;
		location: string;
	};
	goals: string[];
	challenges: string[];
	solution: string;
	results: {
		metrics: string;
		clientFeedback: string;
		marketResponse: string;
	};
	tools: {
		technologies: string[];
		frameworks: string[];
		integrations: string[];
	};
}

export interface ShortCaseStudy {
	title: string;
	description: string;
	imageUrl: string;
}

type CaseStudyEntity = CaseStudy & ShortCaseStudy;
