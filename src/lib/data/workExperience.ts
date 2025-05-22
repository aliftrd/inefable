import type { WorkExperience } from '$lib/types/WorkExperience';
import RezayoLogo from '$lib/assets/company/rezayo.png?enhanced';
import BigioLogo from '$lib/assets/company/bigio.jpeg?enhanced';

export const workExperiences: WorkExperience[] = [
	{
		id: 1,
		logo: RezayoLogo,
		name: 'Rezayo Technology',
		role: 'Junior Web Developer Intern',
		time_start: '2019-08-20',
		time_end: '2020-02-01',
		jobs: [
			'Building website for reseller hosting with MySQL, CodeIgniter 3.',
			'Expertise in debugging and fixing errors and bugs in apps.'
		]
	},
	{
		id: 2,
		logo: null,
		name: 'Freelance',
		role: 'Full Stack Developer',
		time_start: '2021-02-09',
		time_end: '2023-02-28',
		jobs: [
			'Developed a RESTful API that enhanced third-party integrations by 30%, improving overall system efficiency.',
			'Developed WhatsApp API gateway using WWebJS and ExpressJS to increase third-party integration.',
			'Developed SPBU Finder using Floyd Warshall Algorithm and Laravel.',
			'Implemented state management and consumed data to display in the mobile app using Flutter provider.',
			'Collaborated with the backend team to optimize API calls, leading to a 20% improvement in server response time and enhanced overall application performance.'
		]
	},
	{
		id: 3,
		logo: BigioLogo,
		name: 'BIGIO.ID',
		role: 'Mobile Developer Intern',
		time_start: '2024-09-09',
		time_end: '2024-12-31',
		jobs: [
			'Participated in brainstorming sessions and provided innovative solutions to technical challenges, leading to the adoption of new technologies and improved development workflows.',
			'Collaborated with product managers and designers to translate requirements into technical specifications, ensuring timely and successful project deliveries.',
			'Participated in code reviews and provided valuable feedback, leading to a 30% reduction in bugs and enhanced code quality.',
			'Improved team collaboration and knowledge sharing by introducing collaborative tools and conducting regular knowledge-sharing sessions, resulting in a 30% decrease in siloed work.',
			'Developed and launched a new mobile app, increasing user engagement by 30% within the first three months.'
		]
	}
];
