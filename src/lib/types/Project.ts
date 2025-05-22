export type Project = {
	id: number;
	name: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	thumbnail: any;
	description: string;
	repository: string | null;
	stacks: string[];
	contributions: string[];
};
