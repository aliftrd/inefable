<script lang="ts">
	import { projects } from '$lib/data/project';
	import type { Project } from '$lib/types/Project';
	import { onMount } from 'svelte';
	import ProjectItem from './project/ProjectItem.svelte';
	import { browser } from '$app/environment';

	let reversedProjects: Project[] = [];
	let isProjectsPage = false;

	onMount(() => {
		isProjectsPage = browser && window.location.pathname === '/projects';
		reversedProjects = [...projects].reverse();
		if (!isProjectsPage) {
			reversedProjects = reversedProjects.slice(0, 6);
		}
	});
</script>

<section class="relative" id="about">
	<div class="font-nunito container mb-12 space-y-2">
		<div class="flex flex-row items-center justify-between">
			<h1 class="font-jetbrains text-xl font-semibold">
				<span class="mr-2 text-purple-600">&gt;</span>Project
			</h1>
			{#if !isProjectsPage}
				<a href="/projects" class="hover:underline">Show All</a>
			{/if}
		</div>
		<div>
			{#each reversedProjects as project (project.id)}
				<ProjectItem {project} />
			{/each}
		</div>
	</div>
</section>
