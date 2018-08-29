<template>
	<div class="m-index" id="m-index">
		<router-view></router-view>
		<footer>
		    <ul>
		      <li :class="{active: index == footIndex}" v-for="(item,index) in footerNav" @click="changeNav(index)">
		      	<router-link :to="item.router">
		      		<i class="yo-ico" v-html="item.ico"></i>
		        	<b>{{item.title}}</b>
		      	</router-link>
		      </li>
		    </ul>
		</footer>
	</div>
</template>



<script>
	var common = require('../utils/util.common.js');

	module.exports = {
		data :function() {
			return {
				footIndex:0,
				footerNav:[
				{
					router:"/",
					ico:"&#xe70c;",
					title:"一元街"
				},
				{
					router:"/miaokai",
					ico:"&#xe69c;",
					title:"秒开"
				},
				{
					router:"/mine",
					ico:"&#xe61e;",
					title:"我"
				}
				]
			}
		},
		methods:{
			changeNav:function(index){
				this.footIndex = index ;
			}
		}
	}
</script>