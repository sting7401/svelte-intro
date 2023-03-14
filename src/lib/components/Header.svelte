<script>
	import Button from '$components/Button.svelte';
	import Day from '$components/Day.svelte';

	let headerButtonClassName = 'btn-outline btn-info rounded-full';
</script>

<header class="flex justify-between w-screen fixed top-0 left-0 p-8">
	<p><img src="" alt="rta" /></p>
	<Button className={headerButtonClassName} iconView={false}>
		<Day />
	</Button>
</header>

<style>
</style>
