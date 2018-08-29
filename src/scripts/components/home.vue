<template>
	<div class="container">
		<header>
		    <ul>
		      <li class="yo-ico"></li>
		      <li>
		        <span>一元街</span>
		      </li>
		      <li class="yo-ico"></li>
		    </ul>
		</header>
		<aside>
	      <div class="swiper-container" id="banner-swiper">
	        <div class="swiper-wrapper">
	          <div class="swiper-slide"  v-for="(item, index) in ban">
	            <ol><li><i>
	                <img :src="item.imgBanner"/>
	              </i></li></ol>
	          </div>
	        </div>
	      </div>
		</aside>
		<figure>
	      <ul>
	        <li v-for="(item, index) in cate">
	          <i><img :src="item.imgcate" /></i>
	          <b>{{item.title}}</b>
	        </li>
	      </ul>
		</figure>
		<nav>
	      <ul>
	        <li v-on:click="changeTab(index)" :class="{active: index==navIndex}" v-for="(item, index) in nav">{{item}}</li>
	      </ul>
		</nav>
		<section>
	      <div id="index-swiper">
	        <div id="indexContainer" ref="indexContainer">
	          <div class="index-scroll"  v-for="(item,i) in list" v-bind:class="{ nowpage: i==navIndex }" style="display: none;">
	          	<div class="wrapper">
	              <div class="head hide">
	                <img src="/images/arrow.png" width="40" height="40"/>
	                <span>下拉刷新...</span>
	              </div>
		            <ul>
		              <li v-for="ite in item.swiperItem">
		                <i><img :src="ite.imgSrc" /></i>
		                <b>{{ite.title}}</b>
		              </li>
		            </ul>
		            <div class="foot hide">
	                <img src="/images/arrow.png" width="40" height="40"/>
	                <span>上拉加载更多...</span>
	              </div>
        		</div>
	          </div>
	        </div>
	      </div>
		</section>
	</div> 
</template>

<style scoped>
/*css code*/
.nowpage {
  	display: block!important;
}
</style>


<script>
		import $ from 'jquery'
		var common = require('../utils/util.common.js');
		module.exports = {
			data:function(){
				return {
					swiper: null,
				    swiper2: null,
				    navIndex: 0,
				    nav: ['热门商品', '即将开奖', '人气商品','高价商品'],
				    list: [],
				    ban : [],
				    cate : []
				} 
			},
			methods: {
			    changeTab: function (index) {
			      this.navIndex = index;
			    }
			},

			mounted: function () {
			    fetch('/api/list').then(response => response.json())
			    .then(res => {
			      var that = this;
			      //console.log(that)
			      that.list = res;
			      /*that.swiper = new Swiper('#index-swiper', {
			        loop: false,
			        pagination : '.swiper-pagination',
				    paginationClickable: true,
				    longSwipesRatio: 0.3,
				    touchRatio:1,
				    autoplay:3333,//设置自动播放 后面的是毫秒数
				    observer:true,//修改swiper自己或子元素时，自动初始化swiper
				    observeParents:true,//修改swiper的父元素时，自动初始化swiper
				    touchMoveStopPropagation : false,//阻止touchmove冒泡属性（iscroll和swiper共用会有冲突）
			        onSlideChangeStart: function(swiper){
			          that.navIndex = swiper.activeIndex;
			        }
			      });*/



			      common.isAllLoaded('index-scroll .wrapper', function () {
			      	common.scroll(that);
			      	//console.log(common)
			      });
			        
			    })
			    .catch(e => console.log("Oops, error", e));

			    fetch('/api/ban').then(response => response.json())
			    .then(rex => {
			      var that = this;
			      
			      that.ban = rex;
			      that.swiper2 = new Swiper('#banner-swiper',{
			        loop: true,
			        pagination : '.swiper-pagination',
			        paginationClickable: true,
			        longSwipesRatio: 0.3,
			        touchRatio:1,
			        observer:true,//修改swiper自己或子元素时，自动初始化swiper
			        observeParents:true,//修改swiper的父元素时，自动初始化swiper
			      })
			    })
			    .catch(e => console.log("Oops, error", e));

			    fetch('/api/cate').then(response => response.json())
			    .then(rey => {
			      var that = this;
			      that.cate = rey;
			    })
			    .catch(e => console.log("Oops, error", e));
			  }
			};
</script>