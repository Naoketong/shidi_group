<template>
	<div class="brief-section">
		<div class="brief-option">
			<img class="right-tab" src="@/img/hamburger.png">
		</div>
		<!-- 轮播图 -->
		<div class="brief-swiper-list">
			<ul class="brief-list">
				<li class="brief-item"></li>
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
			<!-- 这是内容 -->
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




				<!-- <div class="breifitem-content">我是内容</div> -->
        <simplebar class="breifitem-content" style="width: 40vw;height: 45vh;">
          <p class="text-descript">
            实地集团，2006年从广州出发，始于地产而不止于地产。13年来，实地一直致力于将人类科技的<br>
            一切探索创新以人居业态为依托运用于生活中的方方面面，将科技与人文连接，重新构建人类对<br>
            于自身与居住空间关系的认知。目前，实地集团已经发展成为一家为用户提供贯穿全生命周期<br>
            智慧人居解决方案的综合性企业。
          </p >
          <p class="text-descript">
            实地集团现已覆盖全国六大最具成长力城市群，在26城全面绽放。每落子一地，均从区域先天资<br>源的统筹观出发，开发每个城市的独特魅力，探索每个城市的人文价值，创造与之匹配的智能生<br>
            活解决方案，为每座城市打造专属的人居经典。
          </p >
          <p class="text-descript">
            实地集团坚持用户至上原则，关注每一个个体的真实需求。从项目规划之初，就从用户痛点出发，<br>以科技创新的产品思维先行，借助智能产品、数据分析、生活配套三位一体的服务体系，<br>满足用户对居住环境安全、家庭健康、时间管理、情感交互等多维度的需求,以此为主线来逐步构建<br>
            SLS (Smart Life System)智慧人居系统为用户打造美好生活体验的同时，引领行业发展方向，<br>
            提升城市整体的人居品质。
          </p >
        </simplebar>

				
				<div class="brief-next">
					<div class="brief-next-text">
						<p class="en">EXPLORE MORE</p>
						<p class="cn">点击更多</p>
					</div>
					<div class="brief-arrows">
						<div class="brief-arrows-hen"></div>
						<div class="brief-arrows-xie"></div>
					</div>
					<ul class="brief-pierce-list">
						<li class="brief-pierce-item step1">+</li>
						<li class="brief-pierce-item step2">+</li>
						<li class="brief-pierce-item step3">+</li>
						<li class="brief-pierce-item step4">+</li>
					</ul>
				</div>
			</div>

       







		</div>














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
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        }
      }
    },
    components: {
      simplebar
    },

	}
</script>