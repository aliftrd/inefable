<script lang="ts">
	import type { Project } from '$lib/types/Project';
	import { ExternalLink } from '@lucide/svelte';

	export let project: Project;
</script>

<div class="group grid cursor-pointer grid-cols-1 gap-4 px-2 py-4 sm:grid-cols-2">
	{#if project.thumbnail}
		<enhanced:img
			src={project.thumbnail}
			alt={project.name}
			class="aspect-16/9 w-full items-center justify-center object-cover grayscale filter transition duration-300 ease-in-out group-hover:grayscale-0"
			loading="lazy"
		/>
	{:else}
		<div class="flex aspect-16/9 w-full items-center justify-center bg-gray-200">
			<p class="font-jetbrains text-sm text-gray-500">No thumbnail</p>
		</div>
	{/if}
	<div class="flex flex-col gap-2">
		{#if project.repository}
			<a
				href={project.repository}
				target="_blank"
				class="font-jetbrains flex items-center gap-2 text-xl font-semibold hover:underline"
			>
				{project.name}
				<ExternalLink class="size-4" />
			</a>
		{:else}
			<h2 class="font-jetbrains text-xl font-semibold">{project.name}</h2>
		{/if}
		<p class="font-nunito line-clamp-4 text-justify text-sm text-gray-500">{project.description}</p>
		<div class="flex flex-wrap gap-2">
			{#each project.stacks as stack (stack)}
				<span class="rounded-sm bg-purple-500 px-2 py-1 text-sm text-white">
					{stack}
				</span>
			{/each}
		</div>
	</div>
</div>
