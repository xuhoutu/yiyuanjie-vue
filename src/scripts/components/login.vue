<template id="">
  <div class="m-login">
    <header>
      <div>取消</div>
      <div></div>
      <div><router-link :to="'/register'">注册</router-link><div>
    </header>
    <section>
      <div><input type="text" placeholder="请输入手机号"/></div>
      <div><input type="text" placeholder="请输入验证码"/></div>
      <div id="btn">登录</div>
    </section>
    <footer>
      <div>忘记密码？</div>
      <div><span>或使用以下方式直接登录</span></div>
      <div>
      <img src="/images/sq-img/sq-wx.jpg">
      <img src="/images/sq-img/sq-qq.jpg">
      <img src="/images/sq-img/sq-xl.jpg">
      </div>
    </footer>
  </div>
</template>
<script>
module.exports={
  mounted:function(){
    $("#btn").click(function(){
       var user=$("#user").val();
       var pass=$("#pass").val();
       $.ajax({
           url:"http://datainfo.duapp.com/shopdata/userinfo.php",
           data:{
               status:"login",
               userID:user,
               password:pass
           },
           success:function(data){
               if(data==0){
                   alert("用户名不存在！")
               }else if(data==2){
                   alert("密码错误！")
               }else{
                   alert("登陆成功");
                   location.href="index.html";
               }
           }
       })
    });
  }
}

</script>
