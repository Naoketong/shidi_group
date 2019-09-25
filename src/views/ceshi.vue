<template>
  <div id="app">
    <ul id="menu" class="menu-container">
      <li><a data-menuanchors="about" href="#about">关于实地</a></li>
      <li><a data-menuanchors="development" href="#development">地产开发</a></li>
      <li><a data-menuanchors="news" href="#news">最新消息</a></li>
      <li><a data-menuanchors="joinus" href="#joinus">加入实地</a></li>
      <li>
        <a data-menuanchors="whistleblower" href="#whistleblower">廉洁举报</a>
      </li>
      <li><a data-menuanchors="contact" href="#contact">联系我们</a></li>
    </ul>

    <full-page
      class="fullpage-container"
      ref="fullpage"
      :options="options"
      id="fullpage"
    >
      <div class="section">未来•就在眼前</div>
      <div class="section">
        <swiper :options="swiperOption" ref="mySwiper" style="height: 100%;">
          <!-- slides -->
          <swiper-slide>关于实地 1</swiper-slide>
          <swiper-slide>关于实地 2</swiper-slide>
          <swiper-slide>关于实地 3</swiper-slide>
          <swiper-slide>关于实地 4</swiper-slide>
          <swiper-slide>关于实地 5</swiper-slide>
          <swiper-slide>关于实地 6</swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="section">
        <simplebar data-simplebar-auto-hide="false">
          <div class="flex-cell">
            <div class="flex-cell-card" style="background-color: #333;"></div>
            <div class="flex-cell-card" style="background-color: #444;"></div>
            <div class="flex-cell-card" style="background-color: #555;"></div>
            <div class="flex-cell-card" style="background-color: #666;"></div>
            <div class="flex-cell-card" style="background-color: #777;"></div>
            <div class="flex-cell-card" style="background-color: #888;"></div>
            <div class="flex-cell-card" style="background-color: #999;"></div>
            <div class="flex-cell-card" style="background-color: #000;"></div>
            <div class="flex-cell-card" style="background-color: #111;"></div>
            <div class="flex-cell-card" style="background-color: #222;"></div>
            <div class="flex-cell-card" style="background-color: #333;"></div>
            <div class="flex-cell-card" style="background-color: #444;"></div>
          </div>
        </simplebar>
      </div>
      <div class="section">最新消息</div>
      <div class="section">加入实地</div>
      <div class="section">廉洁举报</div>
      <div class="section">联系我们</div>
    </full-page>
  </div>
</template>

<script type="text/javascript">
import simplebar from 'simplebar-vue';
import 'simplebar/dist/simplebar.min.css';
export default {
  data() {
    return {
      options: {
        licenseKey: "4F375E3E-7D814D7F-B82954BA-31DC667F",
        menu: "#menu",
        anchors: [
          "landing",
          "about",
          "development",
          "news",
          "joinus",
          "whistleblower",
          "contact"
        ],
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "rgba(0,0,0,.2)",
          "rgba(0,0,0,.4)",
          "rgba(0,0,0,.6)",
          "rgba(0,0,0,.8)"
        ]
      },
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
    };
  },
  components: {
    simplebar
  }
};
</script>

<style lang="less">
body {
  padding: 0;
  margin: 0;
}
.menu-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  .active {
    background-color: #35b558;
  }
}

.flex-cell{
  display: flex;
  width: 2400px;
  height: 100vh;
  flex-wrap: wrap;
  .flex-cell-card{
    flex:none;
    background: #333;
    width: 400px;
    height: 50%;
  }
}
</style>