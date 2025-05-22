<script lang="ts">
	import ThemeToggle from './ui/ThemeToggle.svelte';

	export let title: string;
</script>

<header class="top-0 z-50 mb-12">
	<div class="container flex items-center justify-between">
		<span class="font-jetbrains flex cursor-pointer flex-col">
			<a href="/">{title}</a>
			<span>A simple portfolio website</span>
		</span>
		<ThemeToggle />
	</div>
</header>
