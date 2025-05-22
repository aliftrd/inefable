<script lang="ts">
	import { about } from '$lib/data/about';
</script>

<footer class="text-jetbrain flex items-center justify-between">
	<p class="text-sm">
		&copy; {new Date().getFullYear()}
		{about.name}.
	</p>
	<p class="text-sm">All rights reserved.</p>
</footer>
