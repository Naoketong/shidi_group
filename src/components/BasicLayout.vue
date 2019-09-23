<template>
	<div class="container">
		<Video />
		<div class="content">
			<Head />
			<Banner />
			<Brief />
			<Houses />
			<Simple />
		</div>
	</div>  
</template>
<script>
	import "@/assets/home.css";
	import Video from '@/components/BasicVideo.vue';
	import Head from '@/components/BasicHead.vue';
	import Banner from '@/components/home/BasicBanner.vue';
	import Brief from '@/components/home/BasicBrief.vue';
	import Houses from '@/components/home/BasicHouses.vue';
	import Simple from '@/components/home/BasicSimple.vue';
	export default{
		components:{
			Video,
			Head,
			Banner,
			Brief,
			Houses,
			Simple,
		},
	}
</script>
