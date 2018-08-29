<template id="">
  <div class="m-miaokai">
    <header>
      <h1>秒开</h1>
    </header>
    <section>
      <div id="wrapper">
        <div id="index-scroll">
            <div class="head hide">
              <img src="/images/arrow.png" width="40" height="40"/>
              <span>下拉刷新...</span>
            </div>
            <ul>
              <li v-for="item in list" :data-id="item.id">
                <router-link :to="'/detail/'+item.id">
                  <div>
                      <i><img v-bind:src="item.imgUrl" /></i>
                      <b>{{item.content}}</b>
                  </div>
                  <div>
                    <div>
                      <p>开奖进度:<span>{{item.progress}}</span></p>
                      <p><span :style="'width:'+item.progress"></span></p>
                    </div>
                    <div>立即夺宝</div>
                  </div>
                </router-link>
              </li>
            </ul>
            <div class="foot hide">
              <img src="/images/arrow.png" width="40" height="40"/>
              <span>上拉加载更多...</span>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
var common=require('../utils/util.common.js');

module.exports={   //底部切效果
  data:function(){
    return{
      list:[]
    }
  },
  mounted:function(){
    fetch('/api/goods').then(response => response.json()).then(res => {

        var that = this;
        that.list = res;
        setTimeout(function(){
          common.scroll(that);
        })
    }).catch(e => console.log("Oops, error", e));
  }
  // methods: {
  //
  // }
}
</script>
