<script type="ts">
	export let text = false;
	export let className: string;
	export let iconView = false;
	export let iconName = '';

	$: textValue = text ? `${text}` : '';
</script>

<button type="button" class="btn {className}">
	{#if iconView}
		<i class="icon {iconName}" />
	{/if}
	{#if text}
		<span class="text-base text-white">{textValue}</span>
	{/if}
	<slot />
</button>
