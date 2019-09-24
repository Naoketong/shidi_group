<template>
	<div class="houses-section">


    <simplebar>
      <ul class="houses-list">
        
        <li class="houses-item" v-for="item in houses" 
        :style="{'background-image':'url('+ item.img +')'}">
          <div class="houses-content">
            <div class="houses-item-title">
              <p class="houses-cn">{{item.title}}</p>
              <p class="house-en">{{item.desc}}</p>
            </div>

            
            <div class="houses-deta">
              EXPLORE
              <span class="deta-adorn left">+</span>
              <span class="deta-adorn right">+</span>
              <span class="deta-adorn topleft">+</span>
              <span class="deta-adorn topright">+</span>

            </div>



            <!-- <div class="houses-deta">
              
            </div>

            <ul class="deta-border-list">
                <li class="deta-item step1">+</li>
                <li class="deta-item step2">+</li>
                <li class="deta-item step3">+</li>
                <li class="deta-item step4">+</li>
              </ul> -->


          </div>
        </li>
        

      </ul>
    </simplebar>



  </div>
</template>
<script>
  import simplebar from 'simplebar-vue';
  import 'simplebar/dist/simplebar.min.css';

	export default{
    data(){
      return{
        houses:[
          {
            title:'广州蔷薇花园',
            desc:' QIANGWEI HUAYUAN',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E6%83%A0%E5%B7%9E%E6%9C%A8%E6%A7%BF%E9%9B%85%E8%91%97.jpg'
          },
          {
            title:'广州常青藤',
            desc:'ROSA INTERNATIONA',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E6%83%A0%E5%B7%9E%E6%9C%A8%E6%A7%BF%E9%9B%85%E8%91%97.jpg'
          },
          
          {
            title:'永川蔷薇国际',
            desc:'ROSA INTERNATIONAL',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E4%B8%89%E4%BA%9A%E6%B5%B7%E6%A3%A0%E5%8D%8E%E8%91%97.jpg'
          },
          {
            title:'成都海棠名著',
            desc:'BEGONIA WEAVE',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2019/06/%E4%B8%AD%E5%B1%B1%E7%92%9F%E6%B9%96%E5%9F%8E.jpg'
          },
          {
            title:'广州蔷薇花园',
            desc:' QIANGWEI HUAYUAN',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E6%83%A0%E5%B7%9E%E6%9C%A8%E6%A7%BF%E9%9B%85%E8%91%97.jpg'
          },
          {
            title:'广州常青藤',
            desc:'ROSA INTERNATIONA',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E6%83%A0%E5%B7%9E%E6%9C%A8%E6%A7%BF%E9%9B%85%E8%91%97.jpg'
          },
          
          {
            title:'永川蔷薇国际',
            desc:'ROSA INTERNATIONAL',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E4%B8%89%E4%BA%9A%E6%B5%B7%E6%A3%A0%E5%8D%8E%E8%91%97.jpg'
          },
          {
            title:'成都海棠名著',
            desc:'BEGONIA WEAVE',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2019/06/%E4%B8%AD%E5%B1%B1%E7%92%9F%E6%B9%96%E5%9F%8E.jpg'
          },
          {
            title:'无锡玫瑰庄园',
            desc:'ROSE MANOR',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/ORCHID-SHORE-Intro-2.jpg'
          },
          {
            title:'深圳剑兰郡',
            desc:'THE GLADIOLUS',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E5%85%AD%E7%9B%98%E6%B0%B4%E7%B4%AB%E8%97%A4%E5%BA%84%E5%9B%AD.jpg'
          },
          {
            title:'武汉君兰汀岸',
            desc:'ORCHID SHORE',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2019/06/%E5%A4%A9%E6%B4%A5%E6%B5%B7%E6%A3%A0%E9%9B%85%E8%91%97.jpg'
          },
          {
            title:'中山璟湖城',
            desc:'LAKEVIEW COMMUNITY',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E4%B8%89%E4%BA%9A%E6%B5%B7%E6%A3%A0%E5%8D%8E%E8%91%97.jpg'
          },
          {
            title:'广州蔷薇花园',
            desc:' QIANGWEI HUAYUAN',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E6%83%A0%E5%B7%9E%E6%9C%A8%E6%A7%BF%E9%9B%85%E8%91%97.jpg'
          },
          {
            title:'广州常青藤',
            desc:'ROSA INTERNATIONA',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E6%83%A0%E5%B7%9E%E6%9C%A8%E6%A7%BF%E9%9B%85%E8%91%97.jpg'
          },
          
          {
            title:'永川蔷薇国际',
            desc:'ROSA INTERNATIONAL',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2018/10/%E4%B8%89%E4%BA%9A%E6%B5%B7%E6%A3%A0%E5%8D%8E%E8%91%97.jpg'
          },
          {
            title:'成都海棠名著',
            desc:'BEGONIA WEAVE',
            img:'http://www.seedland.cc/wp/wp-content/uploads/2019/06/%E4%B8%AD%E5%B1%B1%E7%92%9F%E6%B9%96%E5%9F%8E.jpg'
          },

        ],
      }
    
    },
    components: {
      simplebar
    },
	}
</script>