<script lang="ts">
	import { about } from '$lib/data/about';
</script>

<section class="mb-12 flex flex-row items-center gap-0 sm:gap-8" id="home">
	<enhanced:img
		src={about.avatar}
		alt={about.name}
		class="hidden rounded-full border-4 border-white shadow-lg grayscale filter transition duration-300 ease-in-out hover:grayscale-0 md:block"
		width="100"
		height="100"
	/>
	<div class="font-jetbrains leading-6">
		<h1 class="text-2xl font-semibold">
			Hello,
			<span class="text-purple-500">&lt;/</span>
			{about.name}
			<span class="text-purple-500">&gt;</span>
		</h1>
		<p class="text-justify">{about.role}</p>
	</div>
</section>
