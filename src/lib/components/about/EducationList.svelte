<script lang="ts">
	import type { Education } from '$lib/types/Education';
	import { educations } from '$lib/data/education';
	import { ChevronRight } from '@lucide/svelte';
	import { onMount } from 'svelte';

	let reversedEducations: Education[] = [];

	onMount(() => {
		reversedEducations = [...educations].reverse();
	});
</script>

<div class="flex flex-col gap-4">
	{#each reversedEducations as education (education.id)}
		<div class="mb-4 flex flex-col gap-2 md:flex-row md:gap-8">
			<div class="flex-shrink-0 md:w-auto">
				<enhanced:img
					src={education.logo}
					class="rounded-full border-4 border-white shadow-lg grayscale filter transition duration-300 ease-in-out hover:grayscale-0 md:block"
					width="50"
					height="50"
					loading="lazy"
					alt="Logo education"
				/>
			</div>
			<div class="flex-grow">
				<h2 class="text-md font-jetbrains font-semibold">
					{education.institution}
				</h2>
				<p class="font-nunito text-sm font-normal">
					{education.major}
					{education.gpa && `(Current GPA: ${education.gpa})`}
				</p>
				<time class="font-jetbrains text-sm font-normal text-gray-500">
					{new Date(education.startDate).getFullYear()} -
					{education.endDate ? new Date(education.endDate).getFullYear() : 'present'}
				</time>
				{#if education.achievements && education.achievements?.length > 0}
					<ul class="mt-2">
						{#each education.achievements as achievement (achievement.id)}
							<li class="font-nunito flex items-start text-sm font-normal">
								<ChevronRight className="mr-2 mt-1 h-4 w-4 flex-shrink-0 text-purple-500" />
								{achievement.achievement}
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	{/each}
</div>
