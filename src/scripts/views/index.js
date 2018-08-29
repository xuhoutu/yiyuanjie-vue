/*//var common = require('../utils/util.common.js');


new Vue({
  el: '#m-index',
  data: {
    swiper: null,
    swiper2: null,
    navIndex: 0,
    nav: ['热门商品', '即将开奖', '人气商品','高价商品'],
    list: [],
    ban : [],
    cate : []
  },

  methods: {
    changeTab: function (index) {
      this.swiper.slideTo(index);
      this.navIndex = index;
    }
  },

  mounted: function () {
    fetch('/api/list').then(response => response.json())
    .then(res => {
      var that = this;
      that.list = res;
      that.swiper = new Swiper('#index-swiper', {
        loop: false,
        onSlideChangeStart: function(swiper){
          that.navIndex = swiper.activeIndex;
        }
      });

      common.isAllLoaded('.index-scroll ul', function () {
        common.scroll(that);
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
});*/