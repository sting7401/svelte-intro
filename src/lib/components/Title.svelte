<script type="ts">
	export let title: string;
	export let subTitle: string;
	export let align: string;
	export let customSlot = false;
</script>

<div class={align}>
	{#if customSlot === true}
		<slot><!-- optional fallback --></slot>
	{:else}
		<h2 class="text-base font-light text-white">{title}</h2>
		<p class="text-6xl font-bold text-white ">{subTitle}</p>
	{/if}
</div>
