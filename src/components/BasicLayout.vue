<template>
	<div class="container">
		<Video />
		<div class="content">
			<full-page
			:options="options">
				<div class="section">
					<Head />
					<Banner />
				</div>
				<div class="section">
					<Brief />
				</div>
				<div class="section">
					<Houses />
				</div>
				<div class="section">
					<Simple />
				</div>
				<div class="section">
					<Join />
				</div>
				<div class="section">
					<Honest />
				</div>
				<div class="section">
					<Foot />
				</div>																		
			</full-page>
		</div>
	</div>  
</template>
<script>
	


	import "@/assets/home.css";
	import Video from '@/components/BasicVideo.vue';
	import Head from '@/components/BasicHead.vue';
	import Foot from '@/components/BasicFoot.vue';
	import Banner from '@/components/home/BasicBanner.vue';
	import Brief from '@/components/home/BasicBrief.vue';
	import Houses from '@/components/home/BasicHouses.vue';
	import Simple from '@/components/home/BasicSimple.vue';
	import Join from '@/components/home/BasicJoin.vue';
	import Honest from '@/components/home/BasicHonest.vue';
	
	export default{
		data(){
			return{
				options:{
					licenseKey: "4F375E3E-7D814D7F-B82954BA-31DC667F",
				},
			}
		},
		components:{
			Video,
			Head,
			Foot,
			Banner,
			Brief,
			Houses,
			Simple,
			Join,
			Honest,
		},
	}
</script>
