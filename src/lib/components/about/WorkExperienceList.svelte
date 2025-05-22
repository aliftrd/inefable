<script lang="ts">
	import type { WorkExperience } from '$lib/types/WorkExperience';
	import { workExperiences } from '$lib/data/workExperience';
	import { ChevronRight } from '@lucide/svelte';
	import { onMount } from 'svelte';

	const dateMonthFormatter = Intl.DateTimeFormat('en-US', {
		month: 'short',
		year: 'numeric'
	});

	function formatDateString(date: string) {
		return dateMonthFormatter.format(new Date(date));
	}

	let reversedWorkExperiences: WorkExperience[] = [];

	onMount(() => {
		reversedWorkExperiences = [...workExperiences].reverse();
	});
</script>

<div class="flex flex-col gap-4">
	{#each reversedWorkExperiences as company (company.id)}
		<div class="mb-4 flex flex-col gap-2 md:flex-row md:gap-8">
			<div class="flex-shrink-0 md:w-auto">
				{#if company.logo}
					<enhanced:img
						class="h-[50px] w-[50px] rounded-full border-4 border-white shadow-lg grayscale filter transition duration-300 ease-in-out hover:grayscale-0 md:block"
						width="50"
						height="50"
						src={company.logo}
						loading="lazy"
						alt="Company logo"
					/>
				{:else}
					<div
						class="flex h-[50px] w-[50px] items-center justify-center rounded-full border-4 border-white shadow-lg"
					>
						<p class="font-jetbrains text-sm font-normal text-gray-500">
							{company.name.charAt(0)}
						</p>
					</div>
				{/if}
			</div>
			<div class="flex-grow">
				<h2 class="text-md font-jetbrains font-semibold">{company.name}</h2>
				<p class="font-nunito text-sm font-normal">{company.role}</p>
				<time class="font-jetbrains text-sm font-normal text-gray-500">
					{formatDateString(company.time_start)} -
					{company.time_end ? formatDateString(company.time_end) : 'present'}
				</time>
				{#if company.jobs && company.jobs?.length > 0}
					<ul class="mt-2">
						{#each company.jobs as job (job)}
							<li class="font-nunito flex items-start text-justify text-sm font-normal">
								<ChevronRight class="mt-1 mr-2 h-4 w-4 flex-shrink-0 text-purple-500" />
								<span>{job}</span>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/each}
</div>
