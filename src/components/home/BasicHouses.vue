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

            <div class="deve-item-btn">
              <div :class="'btn-push-'+index" v-for="index in 4" :key="index" style="font-size: 15px;">+</div>
              <div class="btn-box">EXPLORE</div>
            </div>
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
            img:'http://www.seedland.cc/wp/wp-content/uploads/2019/06/%E6%88%90%E9%83%BD%E6%B5%B7%E6%A3%A0%E5%90%8D%E8%91%97.jpg'
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
<style lang="less" scoped>
  .deve-item-btn{
    position: absolute;
    width: 125px;
    right: 10%;
    // top: calc(50vh - 10vh);
    right: 30px;
    bottom: 35px;
    .btn-push-1{
      color: #fff;
      position: absolute;
      left: -4px;
      bottom: -11px;
      transition: transform 0.7s ease-in-out;
    }
    .btn-push-2{
      color: #fff;
      position: absolute;
      right: -4px;
      bottom: -11px;
      transition: transform 0.7s ease-in-out;
    }
    .btn-push-3{
      color: #fff;
      position: absolute;
      left: -4px;
      top: -1px;
      transition: transform 0.7s ease-in-out;
    }
    .btn-push-3:before{
      position:absolute;
      top: 10px;
      left: 4px;
      display: inline-block;
      content: '';
      width: 1px;
      height: 0;
      background-color: #fafafa; 
      transition: height 1.3s;
    }
    .btn-push-4{
      color: #fff;
      position: absolute;
      right: -4px;
      top: -1px;
      transition: transform 0.7s ease-in-out;
    }
    .btn-push-4:before{
      position:absolute;
      top: 10px;
      right: 4px;
      display: inline-block;
      content: '';
      width: 1px;
      height: 0;
      background-color: #fafafa; 
      transition: height 1.3s;
    }
    .btn-push-4:after{
      position:absolute;
      top: 11px;
      right: 3px;

      content: '';
      display: inline-block;
      height: 1px;
      // width: 125px;
      width: 0px;
      background-color: #fafafa;
      transition: width 1.3s;
    }
    .btn-box{
      opacity: 0;
      z-index: 2;
      font-size: 14px;
      margin-top: -22px;
      float: right;
      width: 125px;
      height: 33px;
      padding-top: 6px;
      padding-bottom: 6px;
      color: #fff;
      background-color: rgba(0,0,0,0.50);
      cursor: pointer;
      font-family: "DIN-Regular";
      letter-spacing: 3px;
      border: 1px solid #ffffff60;
      text-align: center;
      line-height: 21px;
      transition: opacity 1s ease-in-out;
    }
    .btn-box:hover{
      background-color: rgba(179, 175, 175, 0.397);
    }
  }
.houses-item:hover{
  
  .btn-push-1{
    transform: rotate(180deg)
  }
  .btn-push-1{
  }
  .btn-push-2{
    transform: rotate(180deg)
  }
  .btn-push-3{
    transform: translateY(-32px)
  }
  .btn-push-4{
    transform: translateY(-32px)
  }
  .btn-box{
    opacity:1;
  }
  .btn-push-3:before{
    height: 33px;
  }
  .btn-push-4:before{
    height: 33px;
  }
  .btn-push-4:after{
    width: 125px;
  }
}
.deve-item-btn:before{
  position:absolute;
  bottom:0px;
  display: inline-block;
  content: '';
  width: 100%;
  height: 1px;
  background-color: #fafafa;
}
</style>