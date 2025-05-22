export type WorkExperience = {
	id: number;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	logo: any | null;
	name: string;
	role: string;
	time_start: string;
	time_end: string | null;
	jobs: string[];
};
