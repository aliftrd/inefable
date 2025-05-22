<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	export let title: string;
</script>

<SvelteSeo
	{title}
	description="Versatile Web & Mobile Developer with a strong foundation in building end-to-end digital solutions using PHP, Node.js, and TypeScript for web platforms, alongside Flutter and Kotlin for cross-platform and native Android development. Adept at delivering fast, responsive, and user-focused applications — from dynamic content-driven websites to robust mobile apps. Known for creating clean, maintainable code and collaborating effectively across teams to ship scalable products. Passionate about solving real-world problems through technology, with a growing portfolio of practical, business-aligned software solutions."
	canonical="https://www.fathanmaul.my.id"
	keywords="Alif Triadi, Web Developer, Mobile Developer, Full Stack Developer, PHP, Node.js, TypeScript, Flutter, Kotlin, Android Developer, Web App Developer, Cross-platform Apps, Laravel, Express.js, Dart, REST API, Frontend Developer, Backend Developer, Software Engineer, Modern Web Development, Mobile App Development"
	openGraph={{
		title: 'Alif Triadi',
		description:
			'Alif Triadi is a Full Stack Web & Mobile Developer specializing in PHP, Node.js, TypeScript, Flutter, and Kotlin. Builds scalable web apps and cross-platform mobile applications.',
		images: [
			{
				alt: 'github profile picture',
				url: 'https://avatars.githubusercontent.com/u/27538077?v=4',
				type: 'image',
				secure_url: 'https://avatars.githubusercontent.com/u/27538077?v=4'
			}
		],
		url: 'https://www.aliftrd.my.id',
		type: 'website'
	}}
/>
