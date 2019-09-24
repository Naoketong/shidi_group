<template>
	<div class="banner-section">
		<div class="banner-text-section">
			<p class="banner-title">THE FUTURE<br>IS HERE</p>
			<p class="banner-sub">未来 • 就在眼前</p>
		</div>
		<!-- <div class="banner-roll">
			<div class="bananer-rool-title">向下滚动</div>
			<p class="banner-roll-text">SCROLL DOWN FOR MORE</p>
		</div> -->



		<div class="body-section">
      <div class="langding-border">
        <div class="border-top horizontal"></div>
        <div class="border-bottom horizontal"></div>
      </div>
      <div class="landing-grid">
        <div class="grid-border-1 horizontal"></div>
        <div class="grid-border-2 horizontal"></div>
        <div class="grid-border-3 horizontal"></div>
      </div>
      <div class="landing-vertical">
        <div class="vertical-1 vertical"></div>
        <div class="vertical-2 vertical"></div>
        <div class="vertical-3 vertical"></div>
        <div class="vertical-4 vertical"></div>
        <div class="vertical-5 vertical"></div>
        <div class="vertical-6 vertical"></div>
        <div class="vertical-7 vertical"></div>
      </div>
      <div class="down-more">
        <div class="landing-textcn">向下滚动</div>
        <div class="landing-texten">SCROLL DOWN FOR MORE</div>
      </div>
      <div class="cross-box">
        <p :class="'cross-item-'+(index+1)" v-for="(item,index) in crossData" :key="index">{{item}}</p>
      </div>
    </div>
    <div class="footer-section">
      <div class="landing-mouse">
        <div class="mouse-btn">
          <span class="block"></span>
        </div>
      </div>
    </div>



	</div>
</template>
<script>
	export default{
		data(){
	    return{
	      crossData:['+','+','+','+','+','+','+','+','+','+','+','+','+','+','+','+','+']
	    }
	  }
	}
</script>
<style scoped lang="less">
	.body-section{
    width: 100%;
    height: 79%;
    position: relative;
    .langding-border{
      position: absolute;
      height: 100%;
      width: 100%;
      .border-top{
        width: 0;
        top: 0;
        position: absolute;
        animation: lineardashcenter 1s 3s linear forwards;
        transform-origin: center;
      }
      .border-bottom{
        width: 0;
        bottom: 0;
        position: absolute;
        animation: lineardashcenter 1s 3s linear forwards;
        transform-origin: center;
      }
      @keyframes lineardashcenter{
        0%{
          left:50%;
          right:50%;
          width:0%;
        }
        100%{
          left:0%;
          right:0%;
          width:100%;
        }
      }
    }
    .landing-grid{
      height: 100%;
      width: 100%;
      position: absolute;
      @keyframes linearh1{
        0%{
          left:37.5%;
          right:62.5%;
          width:0%;
        }
        100%{
          left:0%;
          right:0%;
          width:100%;
        }
      }
      @keyframes linearh2{
        0%{
          left:75%;
          right:25%;
          width:0%;
        }
        100%{
          left:0%;
          right:0%;
          width:100%;
        }
      }
      @keyframes linearh3{
        0%{
          width:0%;
        }
        100%{
          width:100%;
        }
      }
      .grid-border-1{
        position: absolute;
        top: 24%;
        animation: linearh1 1s 4s linear forwards;
      }
      .grid-border-2{
        position: absolute;
        top: 50%;
        opacity: 0.3;
        animation: linearh2 1s 4s linear forwards;
      }
      .grid-border-3{
        top: 75%;
        position: absolute;
        animation: linearh3 1s 4s linear forwards;
      }
    }
    .landing-vertical{
      height: 100%;
      width: 100%;
      position: absolute;
      @keyframes linearv1{
        0%{
          top:75%;
          bottom:25%;
          height:0%;
        }
        100%{
          top:0%;
          bottom:0%;
          height:100%;
        }
      }
      @keyframes linearv2{
        0%{
          top:50%;
          bottom:50%;
          height:0%;
        }
        100%{
          top:0%;
          bottom:0%;
          height:100%;
        }
      }
      @keyframes linearv3{
        0%{
          top:75%;
          bottom:25%;
          height:0%;
        }
        100%{
          top:0%;
          bottom:0%;
          height:100%;
          width: 1px;
        }
      }
      @keyframes linearv4{
        0%{
          top:50%;
          bottom:50%;
          height:0%;
        }
        100%{
          top:0%;
          bottom:0%;
          height:100%;
          width: 1px;
        }
      }
      @keyframes linearv5{
        0%{
          top:25%;
          bottom:75%;
          height:0%;
        }
        100%{
          top:0%;
          bottom:0%;
          height:100%;
          width: 1px;
        }
      }
      @keyframes linearv6{
        0%{
          top:50%;
          bottom:50%;
          height:0%;
        }
        100%{
          top:0%;
          bottom:0%;
          height:100%;
        }
      }
      .vertical-1{
        position: absolute;
        left: calc((100%/2)/4);
        animation: linearv1 1s 3s linear forwards;
      }
      .vertical-2{
        position: absolute;
        left: calc(((100%/2)/4)*2);
        animation: linearv2 1s 3s linear forwards;
      }
      .vertical-3{
        position: absolute;
        left: calc(((100%/2)/4)*3);
        animation: linearv3 1s 4s linear forwards;
      }
      .vertical-4{
        position: absolute;
        left: calc(100%/2);
        opacity: 0.3;
        animation: linearv4 1s 4s linear forwards;
      }
      .vertical-5{
        position: absolute;
        right: calc(((100%/2)/4)*3);
        opacity: 0.3;
        animation: linearv5 1s 4s linear forwards;
      }
      .vertical-6{
        position: absolute;
        right: calc(((100%/2)/4)*2);
        opacity: 0.3;
        animation: linearv6 1s 3s linear forwards;
      }
      .vertical-7{
        position: absolute;
        right: calc((100%/2)/4);
        animation: linearv6 1s 3s linear forwards;
      }
    }
    .horizontal{
      border-bottom: solid 0.05em transparent;
      background-image: linear-gradient(white, white), radial-gradient(#fafafa,rgba(0,0,0,0));
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
    .vertical{
      opacity: 0.8;
      border-left: solid 0.05em transparent;
      background-image: linear-gradient(white, white), radial-gradient(#fafafa,rgba(0,0,0,0));
      background-origin: border-box;
      background-clip: content-box, border-box;
    }
    .body-title{
      position: relative;
      float: right;
      width: 50%;
      top: 25.5%;
      .landing-title{
        font-family: "DIN-Regular";
        font-weight: 300;
        font-size:40px;
        letter-spacing: 8px;
        color: white;
      }
      .ladding-subtitle{
        font-family: "NotoSansCJKsc-Thin";
        padding-top: 2%;
        font-size: 35px;
        color: white;
        font-weight: 200;
        letter-spacing: 8px;
      }
    }
    .down-more{
      position: absolute;
      bottom: 0;
      left:0;
      right:0;
      text-align: center;
      transform: translateY(6px);
      opacity: 0;
      animation: fadeInDown 1s 5s linear forwards;
      @keyframes fadeInDown {
        from {
          opacity: 0;
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        } 
      }
      .landing-textcn{
        font-family: "NotoSansCJKsc-Regular";
        font-size: 20px;
        opacity: 0.8;
        margin-bottom: 7px;
        color:white;
      }
      .landing-texten{
        font-size: 14px;
        color: white;
        letter-spacing: 3px;
        text-transform: uppercase;
        font-family: 'Roboto', sans-serif;
        padding-bottom: 14px;
        display: inline-block;
        border-bottom: 2px dashed #fff;
      }
    }
    .cross-box{ 
      width: 100%;
      position: absolute;
      bottom: 0;
      top: 0;
      p{
        opacity: 0;
        animation: fadeIncross 1s 4s forwards;
        font-size: 20px;
        margin-top: 1px;
        color: white;
        @keyframes fadeIncross{
          0%{
            opacity: 0;
          }
          100%{
            opacity: 1;
          }
        }
      }
      .cross-item-1{
        top: 25%;
        left: 12.4%;
        transform: translate(-5px,-17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-2{
        left: 12.4%;
        transform: translate(-5px,-13px);
        position: absolute;
        top: 74.5%;
      }
      .cross-item-3{
        top: -0.5%;
        left: 24.9%;
        transform: translate(-5px,-11px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-4{
        top: 50%;
        left: 25%;
        transform: translate(-5px,-17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-5{
        top: 100%;
        left: 25%;
        transform: translate(-5px,-13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-6{
        top: 0%;
        left: 50%;
        transform: translate(-5px,-11px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-7{
        top: 50%;
        left: 50%;
        transform: translate(-5px,-17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-8{
        top: 100%;
        left: 50%;
        transform: translate(-5px,-13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-9{
        top: 25%;
        right: 37%;
        transform: translate(-5px,-17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-10{
        top: 75%;
        right: 37%;
        transform: translate(-5px,-13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-11{
        top: 0%;
        right: 25%;
        transform: translate(5px,-11px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-12{
        top: 50%;
        right: 24.5%;
        transform: translate(-5px,-17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-13{
        top: 100%;
        right: 25%;
        transform: translate(5px,-13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-14{
        top: 25%;
        right: 12%;
        transform: translate(-5px,-17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-15{
        top: 75%;
        right: 12%;
        transform: translate(-5px,-13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-16{
        top: 75%;
        left: 37.5%;
        transform: translate(-5px,-13px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
      .cross-item-17{
        top: 25%;
        left: 37.4%;
        transform: translate(-5px,-17px);
        position: absolute;
        margin: 0;
        padding: 0;
      }
    }
  }
  .footer-section{
    width: 100%;
    height: 14%;
    position: relative;
    .landing-mouse{
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0%;
      opacity: 0;
      animation: fadeInDown 1s 5s linear forwards;
      @keyframes fadeInDown{
        from {
          opacity: 0;
          -webkit-transform: translate3d(0, -100%, 0);
          transform: translate3d(0, -100%, 0);
        }
        to {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        } 
      }
      .mouse-btn{
        position: relative;
        top: -2px;
    		left: -2px;
        display: block;
        width: 30px;
        height: 55px;
        margin: 0 auto 30px;
        box-sizing: border-box;
        border: 2px solid white;
        border-radius: 15px;
        opacity: 0.8;
        .block{
          position: absolute;
          left: 50%;
          width: 8px;
          height: 8px;
          margin: -4px 0 0 -4px;
          background: white;
          border-radius: 50%;
          animation: ani-mouse 2.5s linear infinite;
        }
        @keyframes ani-mouse{
          0%{
            opacity: 1;
            top: 29%;
          }
          15%{
            opacity: 1;
            top: 71%;
          }
          50%{
            opacity: 0;
            top: 71%;
          }
          100%{
            opacity: 0;
            top: 71%;
          }
        }
      }
    }
  }
</style>