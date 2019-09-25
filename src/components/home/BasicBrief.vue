<template>
	<div class="brief-section">
		<div class="brief-option">
			<img class="right-tab" src="@/img/hamburger.png">
		</div>
		<!-- 轮播图 -->
		<swiper class="swiper-container"  ref="mySwiper" :options="swiperOption" style="height: 100%;position: relative;">
			<swiper-slide>
				<div class="brief-swiper-list">
					<ul class="brief-list">
						<li class="brief-item active"></li>
						<li class="brief-item"></li>
						<li class="brief-item"></li>
						<li class="brief-item"></li>
						<li class="brief-item"></li>
					</ul>
					<div class="swiper-yema">
						<p>
							<span class="swiper-index">01</span>
							/ 06
						</p>
					</div>
					<div class="brief-swiper-item">
						<div class="breifitem-left">
							<p class="breifitem-en">PROFILE</p>
							<p class="breifitem-cn">项目简介</p>
						</div>

						<div class="breifitem-text">
							<h2 class="breifitem-title">
								Craftsmanship creates quality life products
							</h2>
							<p class="breifitem-sub">匠心筑就智慧人居精品</p>
						</div>
		        <simplebar class="breifitem-content" style="width: 38vw;height: 45vh;">
		          <p class="text-desc">
		            实地集团，2006年从广州出发，始于地产而不止于地产。13年来，实地一直致力于将人类科技的<br>
		            一切探索创新以人居业态为依托运用于生活中的方方面面，将科技与人文连接，重新构建人类对<br>
		            于自身与居住空间关系的认知。目前，实地集团已经发展成为一家为用户提供贯穿全生命周期<br>
		            智慧人居解决方案的综合性企业。
		          </p >
		          <p class="text-desc">
		            实地集团现已覆盖全国六大最具成长力城市群，在26城全面绽放。每落子一地，均从区域先天资<br>源的统筹观出发，开发每个城市的独特魅力，探索每个城市的人文价值，创造与之匹配的智能生<br>
		            活解决方案，为每座城市打造专属的人居经典。
		          </p >
		          <p class="text-desc">
		            实地集团坚持用户至上原则，关注每一个个体的真实需求。从项目规划之初，就从用户痛点出发，<br>以科技创新的产品思维先行，借助智能产品、数据分析、生活配套三位一体的服务体系，<br>满足用户对居住环境安全、家庭健康、时间管理、情感交互等多维度的需求,以此为主线来逐步构建<br>
		            SLS (Smart Life System)智慧人居系统为用户打造美好生活体验的同时，引领行业发展方向，<br>
		            提升城市整体的人居品质。
		          </p >
		        </simplebar>

						
						<div class="brief-next" @click="bthNext">
							<div class="brief-next-text">
								<p class="en">EXPLORE MORE</p>
								<p class="cn">点击更多</p>
							</div>
							<div class="brief-arrows">
								<div class="brief-arrows-hen"></div>
								<div class="brief-arrows-xie"></div>
							</div>
							<ul class="brief-pierce-list">
								<li :class="'brief-pierce-item step'+index" v-for="index in 4">+</li>
							</ul>
						</div>

					</div>      
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="brief-swiper-list">
					<ul class="brief-list">
						<li class="brief-item"></li>
						<li class="brief-item active"></li>
						<li class="brief-item"></li>
						<li class="brief-item"></li>
						<li class="brief-item"></li>
					</ul>
					<div class="swiper-yema">
						<p>
							<span class="swiper-index">02</span>
							/ 06
						</p>
					</div>
					<div class="brief-swiper-item">
						<div class="breifitem-left">
							<p class="breifitem-en">MILESTONES</p>
							<p class="breifitem-cn">里程碑</p>
						</div>

		        <simplebar class="breifitem-content" style="width: 70vw;height: 45vh;top:170px;left: 350px;">
		          <p class="text-desc">
		            萌芽，生长的开始..
		            <br>
								2006年,一股地产新兴势力在华南地区悄然崛起，实地集团正式成立。
		          </p >
		          <p class="text-desc">
		            扎根，能量的注入
		            <br>
								2006年，实地集团在中山启动第一个综合社区项目——实地•中山璟湖城。该项目获当地“最受欢迎楼盘”、“最具魅力园林社区”等奖项，为集团赢得良好开局及市场声誉。源的统筹观出发，开发每个城市的独特魅力，探索每个城市的人文价值，创造与之匹配的智能生
		          </p >
		          <p class="text-desc">
		           	生长，全面的发展
		           	<br>
								实地集团发展迅猛，一路高歌、不断壮大，陆续推出实地•遵义蔷薇国际、实地•六盘水紫藤庄园等高品质地产项目，实现以广州为总部，辐射周边省份的跨越式发展。
		          </p >
		          <p class="text-desc">
		           	成熟，崭新的高度
		           	<br>
								2013年，实地集团发展日益成熟，战略触角延伸至华东等地区。实地•无锡玫瑰庄园等项目的落地标志着实地集团吹响进发中国东部房地产市场的号角，并向更高的目标迈进。
		          </p >
		          <p class="text-desc">
		            回归，荣耀的释放
		            <br>
								2015年，实地集团回归一线城市。在广州筑造的百万方生活综合体——实地•广州常春藤项目，拉开了集团新一轮战略布局的序幕。2017年，实地进入第二个十年，旗下项目多点齐发，打开全国发展的新格局。
		          </p >
		          <p class="text-desc">
		            绽放，力量的迸发
		            <br>
								2018年，实地集团加速拓展，新布局十余个中国潜力城市，并正式提出构建SLS（Smart Life System）智慧人居系统的战略设想，通过建立统一的云平台，与用户保持高频次的互动，不断迭代产品、优化服务，构建覆盖家居、社区、城市的智慧生活版图。
		          </p >
		          <p class="text-desc">
		           
		          </p >
		          <p class="text-desc">
		           
		          </p >
		        </simplebar>

		        <div class="brief-arrow-two">
							<div class="brief-arrow-item left" slot="button-prev">
								<div class="hen"></div>
								<div class="xie-left"></div>
								<span :class="'border-item plus'+index" v-for="index in 4">+</span>
							</div>
							<div class="brief-arrow-item right" slot="button-next">
								<div class="hen"></div>
								<div class="xie-right"></div>
								<span :class="'border-item plus'+index" v-for="index in 4">+</span>
							</div>
						</div>
					</div>      
				</div>
			</swiper-slide>
			<!-- <第三个草稿> -->
			<swiper-slide>
				<div class="brief-swiper-list">
					<ul class="brief-list">
						<li class="brief-item"></li>
						<li class="brief-item"></li>
						<li class="brief-item active"></li>
						<li class="brief-item"></li>
						<li class="brief-item"></li>
					</ul>
					<div class="swiper-yema">
						<p>
							<span class="swiper-index">03</span>
							/ 06
						</p>
					</div>
					<div class="brief-swiper-item">
						<div class="breifitem-left">
							<p class="breifitem-en">BRAND CONNOTATION</p>
							<p class="breifitem-cn">品牌诠释</p>
						</div>

		        <simplebar class="breifitem-content" style="width: 70vw;height: 45vh;top:170px;left: 350px;">
		          <p class="text-desc">
		            萌芽，生长的开始..
		            <br>
								2006年,一股地产新兴势力在华南地区悄然崛起，实地集团正式成立。
		          </p >
		          <p class="text-desc">
		            扎根，能量的注入
		            <br>
								2006年，实地集团在中山启动第一个综合社区项目——实地•中山璟湖城。该项目获当地“最受欢迎楼盘”、“最具魅力园林社区”等奖项，为集团赢得良好开局及市场声誉。源的统筹观出发，开发每个城市的独特魅力，探索每个城市的人文价值，创造与之匹配的智能生
		          </p >
		          <p class="text-desc">
		           	生长，全面的发展
		           	<br>
								实地集团发展迅猛，一路高歌、不断壮大，陆续推出实地•遵义蔷薇国际、实地•六盘水紫藤庄园等高品质地产项目，实现以广州为总部，辐射周边省份的跨越式发展。
		          </p >
		          <p class="text-desc">
		           	成熟，崭新的高度
		           	<br>
								2013年，实地集团发展日益成熟，战略触角延伸至华东等地区。实地•无锡玫瑰庄园等项目的落地标志着实地集团吹响进发中国东部房地产市场的号角，并向更高的目标迈进。
		          </p >
		          <p class="text-desc">
		            回归，荣耀的释放
		            <br>
								2015年，实地集团回归一线城市。在广州筑造的百万方生活综合体——实地•广州常春藤项目，拉开了集团新一轮战略布局的序幕。2017年，实地进入第二个十年，旗下项目多点齐发，打开全国发展的新格局。
		          </p >
		          <p class="text-desc">
		            绽放，力量的迸发
		            <br>
								2018年，实地集团加速拓展，新布局十余个中国潜力城市，并正式提出构建SLS（Smart Life System）智慧人居系统的战略设想，通过建立统一的云平台，与用户保持高频次的互动，不断迭代产品、优化服务，构建覆盖家居、社区、城市的智慧生活版图。
		          </p >
		          <p class="text-desc">
		           
		          </p >
		          <p class="text-desc">
		           
		          </p >
		        </simplebar>

		        <div class="brief-arrow-two">
							<div class="brief-arrow-item left" slot="button-prev">
								<div class="hen"></div>
								<div class="xie-left"></div>
								<span :class="'border-item plus'+index" v-for="index in 4">+</span>
							</div>
							<div class="brief-arrow-item right" slot="button-next">
								<div class="hen"></div>
								<div class="xie-right"></div>
								<span :class="'border-item plus'+index" v-for="index in 4">+</span>
							</div>
						</div>
					</div>      
				</div>
			</swiper-slide>
      

    
      </swiper>
		</swiper>

	</div>
</template>
<script>
  import simplebar from 'simplebar-vue';
  import 'simplebar/dist/simplebar.min.css';
	export default{
    data(){
      return{
        swiperOption: {
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".brief-arrow-item.right",
            prevEl: ".brief-arrow-item.left"
          }
        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
   
    methods:{
    	bthNext:function(){
    		console.log(this.swiper)
    		this.swiper.slideNext()
    	},
    },
    components: {
      simplebar
    },

	}
	
</script>
<style lang="less" scoped>
	.brief-arrow-two{
		position: absolute;
		bottom: 66px;
		right: 22px;
		.brief-arrow-item{
			position:relative;
			display: inline-block;
			width: 57px;
			height: 57px;
			border:1px solid #fafafa;
			margin-right: 55px;
			cursor: pointer;
			transition: all .5s;
			z-index: 10;
			vertical-align: top;
			outline: none;
			.hen{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				width: 29px;
				height: 1px;
				background-color: #fafafa;
			}
			.xie-left{
				position:absolute;
				top: 27px;
    		left: 14px;
				transform: rotate(-35deg) translateY(1px);
		    transform-origin: bottom left;
		    width: 10px;
		    border-bottom: 1px solid #fafafa;
			}
			.xie-right{
				position:absolute;
				top:27px;
				right: 32px;
				transform: rotate(389deg) translate(17px,-9px);
		    transform-origin: bottom right;
		    width: 10px;
		    border-bottom: 1px solid #fafafa;
			}
			.border-item{
				position:absolute;
				font-size: 10px;
				color: #fafafa;
			}
			.border-item.plus1{
				top: -9px;
    		left: -4px;
			}
			.border-item.plus2{
				top: -9px;
    		right: -4px;
			}
			.border-item.plus3{
				bottom: -7px;
    		left: -4px;
			}
			.border-item.plus4{
				bottom: -7px;
    		right: -4px;
			}
		}
		
		.brief-arrow-item:hover{
			background-color: rgba(255,255,255,.5);
		}
	}
</style>