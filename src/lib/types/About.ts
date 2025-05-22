export type Social = {
	label: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
	link: string;
};

export type About = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	avatar: any;
	name: string;
	description: string;
	role: string;
	downloadCV: string;
	socials: Social[];
};
