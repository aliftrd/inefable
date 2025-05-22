import type { About } from '$lib/types/About';
import { Github, Instagram, Linkedin, Mail } from '@lucide/svelte';
import AvatarUrl from '$lib/assets/profile/avatar.jpeg?enhanced';

export const about: About = {
	avatar: AvatarUrl,
	name: 'Alif Triadi',
	description:
		'I am a software engineer with a passion for web development and mobile development. I have experience in building web applications using modern technologies and frameworks. I am always eager to learn new things and improve my skills.',
	role: 'Web/Mobile Developer',
	downloadCV: '/cv.pdf',
	socials: [
		{
			label: 'Email',
			icon: Mail,
			link: 'mailto:hello@alftrd.my.id'
		},
		{
			label: 'LinkedIn',
			icon: Linkedin,
			link: 'https://www.linkedin.com/in/aliftrd'
		},
		{
			label: 'Github',
			icon: Github,
			link: 'https://github.com/aliftrd'
		},
		{
			label: 'Instagram',
			icon: Instagram,
			link: 'https://www.instagram.com/_aliftrd'
		}
	]
};
