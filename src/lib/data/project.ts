import type { Project } from '$lib/types/Project';
import SynteticWA from '$lib/assets/project/synteticwa.webp?enhanced';
import PEDO from '$lib/assets/project/pedo.webp?enhanced';
import Lexilearn from '$lib/assets/project/lexilearn.webp?enhanced';
import Raisehand from '$lib/assets/project/raisehand.webp?enhanced';
import Dzikra from '$lib/assets/project/dzikra.webp?enhanced';
import SosioApps from '$lib/assets/project/sosio-apps.webp?enhanced';
import Gadaiku from '$lib/assets/project/gadaiku.webp?enhanced';
import Sanku from '$lib/assets/project/sanku.webp?enhanced';

export const projects: Project[] = [
	{
		id: 1,
		name: 'Syntetic WA',
		thumbnail: SynteticWA,
		description:
			'A unofficial WhatsApp API. It enables WhatsApp integration into your system for automation, messaging, and customer interaction needs without using the official WhatsApp Business API service. Suitable for developers who want fast and flexible exploration with WhatsApp.',
		repository: 'https://github.com/aliftrd/synteticwa',
		stacks: ['ExpressJS', 'WhatsappWebJS'],
		contributions: []
	},
	{
		id: 2,
		name: 'Whatsapp Sticker Bot',
		thumbnail: null,
		description:
			'A multi-functional bot on WhatsApp that allows users to instantly create stickers from images or text, download videos from various platforms, and execute other fun commands. Designed for convenience and entertainment, it becomes a handy assistant right from your WhatsApp chats.',
		repository: null,
		stacks: ['NodeJS', 'Baileys'],
		contributions: []
	},
	{
		id: 3,
		name: 'PEDO',
		thumbnail: PEDO,
		description:
			'An app that makes the pet adoption process easy online. Through the app, users can find animals ready for adoption, view their details and photos, and easily apply for adoption. PEDO serves as a bridge between adoption providers and animal lovers to create loving new homes.',
		repository: 'https://github.com/aliftrd/pedo',
		stacks: ['Flutter', 'Dart'],
		contributions: []
	},
	{
		id: 4,
		name: 'Lexilearn API',
		thumbnail: Lexilearn,
		description:
			'A platform to test dyslexia. It is a tool that can help diagnose dyslexia through a series of tests.',
		repository: 'https://github.com/MpusBekerja-Lexilearn/Lexilearn-BE',
		stacks: ['Bun', 'HonoJS', 'Supabase', 'TypeScript'],
		contributions: []
	},
	{
		id: 5,
		name: 'Lexilearn',
		thumbnail: Lexilearn,
		description:
			'A platform to test dyslexia. It is a tool that can help diagnose dyslexia through a series of tests.',
		repository: 'https://github.com/MpusBekerja-Lexilearn/Lexilearn',
		stacks: ['Kotlin', 'Android Studio', 'Compose'],
		contributions: []
	},
	{
		id: 6,
		name: 'Raisehand',
		thumbnail: Raisehand,
		description:
			'An internal employee attendance app by Inovasi360 and Bigio. It simplifies digital attendance with features like location-based check-in/out, automatic notifications, and easy attendance tracking—helping companies manage employee attendance more accurately and efficiently.',
		repository: 'https://play.google.com/store/apps/details?id=id.inovasi360.attendapp&hl=en&pli=1',
		stacks: ['Flutter', 'Dart', 'GetX'],
		contributions: [
			'Creating authentication system using firebase',
			'Implementing FCM notification',
			'Implementing Remote Config for set application status and application data',
			'Adding basic security to prevent fake location using geolocator and safe devices'
		]
	},
	{
		id: 7,
		name: 'Dzikra',
		thumbnail: Dzikra,
		description:
			'An application specifically designed to help you build good habits in the midst of high mobility to remain consistent in fulfilling your daily worship needs.',
		repository: 'https://play.google.com/store/apps/details?id=id.bigio.dzikra&hl=en',
		stacks: ['Flutter', 'Dart', 'GetX'],
		contributions: [
			'Implementing deeplink and flutter dynamic link',
			'Add page to infaq after successful payment',
			'Improve error tracking in the application to analyze data in the future'
		]
	},
	{
		id: 8,
		name: 'SOSIO',
		thumbnail: SosioApps,
		description:
			'SOSIO enables you to create detailed stakeholder profiles and provides relevant recommendations based on accurate analysis. Manage your business operations more efficiently and effectively with SOSIO. Discover innovative new ways to manage stakeholders and make changes that are crucial to your business’s success.',
		repository: 'https://play.google.com/store/apps/details?id=com.apps.sosio',
		stacks: ['Flutter', 'Dart', 'Provider'],
		contributions: [
			'Fixed critical bugs and improved the overall app stability',
			'Added a new communication feature to allow users to message each other in-site',
			'Implemented error tracking to analyze data in the future'
		]
	},
	{
		id: 9,
		name: 'Gadaiku',
		thumbnail: Gadaiku,
		description:
			'Quick and easy pawnbroking! We accept gold and electronics as collateral, offering low interest rates, high valuations and guaranteed security of your items.',
		repository: null,
		stacks: ['Flutter', 'Dart', 'Firebase', 'Remote Config', 'Bloc'],
		contributions: [
			'Implemented multiple flavors to support different environments and branding requirements',
			'Integrated RESTful APIs for data consumption throughout the app',
			'Added KTP OCR functionality for identity verification',
			'Configured Remote Config for dynamic parameter management',
			'Improved error tracking to analyze data in the future'
		]
	},
	{
		id: 10,
		name: 'Sanku',
		thumbnail: Sanku,
		description:
			'An application specifically designed to help you build good habits in the midst of high mobility to remain consistent in fulfilling your daily worship needs.',
		repository: 'https://play.google.com/store/apps/details?id=id.my.aliftrd.sanku&hl=en',
		stacks: [
			'Flutter',
			'Dart',
			'Firebase',
			'Remote Config',
			'Bloc',
			'Laravel',
			'PHP',
			'PostgreSQL',
			'RevenueCat'
		],
		contributions: [
			'Added backend service integration for sync and data management',
			'Implemented user streak tracking features',
			'Linked Firebase Auth to backend service for secure authentication',
			'Initialized mobile app project setup from scratch',
			'Configured Remote Config for dynamic parameter management',
			'Integrated Crashlytics for real-time error and crash reporting',
			'Supported multiple app flavors to handle different environments and branding requirements',
			'Implemented in-app purchase feature to allow users to purchase premium functionalities within the app'
		]
	}
];
