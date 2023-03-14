<script>
	import '../app.postcss';

	import Header from '$components/Header.svelte';
</script>

<main class="min-w-full min-h-full bg-black">
	<Header />
	<slot />
</main>
