<script type="ts">
	import Title from '$components/Title.svelte';

	export let title = '';
	export let subTitle = '';
	export let align = '';
	export let className = '';
</script>

<section class="w-full {className}">
	<div class="flex flex-col justify-center items-center h-full">
		<Title {title} {subTitle} {align} />
		<slot><!-- optional fallback --></slot>
	</div>
</section>
