<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';

	let checked = $state(false);

	$effect(() => {
		let mode = localStorage.getItem('mode') || 'light';
		checked = mode === 'dark';
	});

	const onCheckedChange = () => {
		const newChecked = !checked;
		const mode = newChecked ? 'dark' : 'light';
		document.documentElement.setAttribute('data-mode', mode);
		localStorage.setItem('mode', mode);
		checked = newChecked;
	};
</script>

<svelte:head>
	<script>
		const initialMode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', initialMode);
	</script>
</svelte:head>

<button type="button" class="btn" onclick={onCheckedChange}>
	{#if checked}
		<Moon />
	{:else}
		<Sun />
	{/if}
</button>
