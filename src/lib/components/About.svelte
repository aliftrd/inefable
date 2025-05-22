<script>
	import { ArrowRightIcon } from '@lucide/svelte';
	import EducationList from './about/EducationList.svelte';
	import WorkExperienceList from './about/WorkExperienceList.svelte';
	import { about } from '$lib/data/about';
</script>

<section class="relative" id="about">
	<div class="font-nunito container mb-12 space-y-2">
		<h1 class="font-jetbrains text-xl font-semibold">
			<span class="mr-2 text-purple-600">&gt;</span>About
		</h1>
		<p class="text-justify">
			{about.description}
		</p>
		<div class="flex flex-col items-start gap-8 sm:flex-row sm:items-center">
			<a
				class="group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 py-2 font-medium text-neutral-200 dark:bg-neutral-200 dark:text-neutral-950"
				href={about.downloadCV}
			>
				Download CV
				<div
					class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100"
				>
					<ArrowRightIcon size={18} />
				</div>
			</a>
			<div class="flex flex-row justify-between gap-8">
				{#each about.socials as social (social)}
					<a href={social.link} target="_blank" class="text-purple-500">
						<social.icon />
					</a>
				{/each}
			</div>
		</div>
	</div>
	<div class="font-nunito container mb-12 space-y-2">
		<h1 class="font-jetbrains text-xl font-semibold">
			<span class="mr-2 text-purple-600">&gt;</span>Education
		</h1>
		<EducationList />
	</div>
	<div class="font-nunito container mb-12 space-y-2">
		<h1 class="font-jetbrains text-xl font-semibold">
			<span class="mr-2 text-purple-600">&gt;</span>WorkExperience
		</h1>
		<WorkExperienceList />
	</div>
</section>
