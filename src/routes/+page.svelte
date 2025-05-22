<script>
	import About from '$lib/components/About.svelte';
	import Meta from '$lib/components/common/meta.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Project from '$lib/components/Project.svelte';
</script>

<Meta title="Alif Triadi - Web/Mobile Developer" />

<main class="relative mx-auto my-12 flex max-w-2xl flex-col px-8 sm:my-32 md:my-16 md:px-2">
	<Header title="aliftrd." />
	<Hero />
	<About />
	<Project />
	<Footer />
</main>
