import type { Education } from '$lib/types/Education';
import PolijeLogo from '$lib/assets/education/polije.png?enhanced';
import VocationalLogo from '$lib/assets/education/vocation.png?enhanced';

export const educations: Education[] = [
	{
		id: 1,
		institution: 'SMK Negeri 1 Panji',
		major: 'Software Engineering',
		gpa: null,
		location: 'Jember',
		startDate: '2018',
		endDate: '2021',
		logo: VocationalLogo,
		achievements: []
	},
	{
		id: 2,
		institution: 'Politeknik Negeri Jember',
		major: 'Information Technology',
		gpa: 3.87,
		location: 'Jember',
		startDate: '2021',
		endDate: '2025',
		logo: PolijeLogo,
		achievements: []
	}
];
