<script type="ts">
	import { register } from 'swiper/element/bundle';

	export let spaceImgs: string[];

	register();
	const spaceBetween = 20;
	const slideSpeed = 600;
</script>

<div class="w-full overflow-hidden">
	<swiper-container
		class="w-full mt-8"
		autoplay={true}
		slides-per-view={'auto'}
		space-between={spaceBetween}
		centered-slides={false}
		speed={slideSpeed}
		loop="true"
		free-mode="false"
	>
		{#each spaceImgs as spaceImg}
			<swiper-slide class="w-2/5 overflow-hidden rounded-3xl">
				<img src={spaceImg} alt="" class="w-full" loading="lazy" />
			</swiper-slide>
		{/each}
	</swiper-container>
</div>
