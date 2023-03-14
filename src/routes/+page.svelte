<script type="ts">
	import Section from '$components/Section.svelte';
	import Slider from '$components/Slider.svelte';
	import Button from '$components/Button.svelte';
	import Day from '$components/Day.svelte';

	const contents = [
		{
			title: '새로운 현실로',
			subTitle: 'READY TO ACTION',
			align: 'text-left px-20',
		},
		{
			title: '현실 공간에 만들어진 새로운 공간',
			subTitle: 'READY TO SPACE',
			align: 'flex flex-col w-full px-40 text-right',
		},
		{
			title: '내가 경험할 새로운 현실',
			subTitle: 'READY TO METAVERSE',
			align: 'flex flex-col w-full px-40 text-left',
		},
		{
			title: 'PARTNERSHIP',
			subTitle:
				'우리는 문화, 축제, 놀이, 쇼핑 등 모든 공간을 지원합니다.',
			align: 'text-center',
			button: '협업 문의하기',
		},
		{
			title: '현실의 한계를 넘어 상상을 현실로',
			align: 'text-center',
		},
		{
			title: 'PARTNERSHIP',
			subTitle:
				'우리는 문화, 축제, 놀이, 쇼핑 등 모든 공간을 지원합니다.',
			align: 'text-center',
		},
	];

	const spaceImgs = [
		[
			'https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706_960_720.jpg',
			'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__180.jpg',
			'https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__180.jpg',
			'https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706_960_720.jpg',
			'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__180.jpg',
			'https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__180.jpg',
		],
		[
			'https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706_960_720.jpg',
			'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__180.jpg',
			'https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__180.jpg',
			'https://cdn.pixabay.com/photo/2023/03/05/06/23/koala-7830706_960_720.jpg',
			'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__180.jpg',
			'https://cdn.pixabay.com/photo/2017/08/07/22/35/animals-2608662__180.jpg',
		],
	];
</script>

<Section
	className={'h-screen'}
	title={contents[0].title}
	subTitle={contents[0].subTitle}
	align={contents[0].align}
>
	<p class="text-base text-white underline">
		<Day />
	</p>
</Section>
<Section
	className={'py-28'}
	title={contents[1].title}
	subTitle={contents[1].subTitle}
	align={contents[1].align}
>
	<Slider spaceImgs={spaceImgs[0]} />
</Section>
<Section
	className={'py-28'}
	title={contents[2].title}
	subTitle={contents[2].subTitle}
	align={contents[2].align}
>
	<Slider spaceImgs={spaceImgs[1]} />
</Section>
<Section className={'py-28'} align={contents[3].align}>
	<h2 class="text-5xl font-bold text-white">{contents[3].title}</h2>
	<p class="text-xl font-light text-white mt-5">{contents[3].subTitle}</p>
	<div class="flex flex-center items-center mt-8">
		<Button className={'btn-info rounded-full w-52'} iconView={false}>
			<span class="text-white">{contents[3].button}</span>
		</Button>
	</div>
</Section>
<Section className={'py-28'} align={contents[4].align}>
	<h2 class="text-5xl font-bold text-white">{contents[4].title}</h2>
	<div class="flex flex-center items-center mt-8">
		<Button className={'btn-info rounded-full w-52'} iconView={false}>
			<Day />
		</Button>
	</div>
</Section>
