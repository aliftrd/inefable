export type Education = {
	id: number;
	institution: string;
	major: string;
	gpa: number | null;
	location: string;
	startDate: string;
	endDate: string | null;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	logo: any;
	achievements: Achievement[];
};

export type Achievement = {
	id: number;
	achievement: string;
};
