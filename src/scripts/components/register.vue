<template id="">
  <div class="m-register">
    <header>
      <div>取消</div>
      <div></div>
      <div><router-link :to="'/login'">登陆</router-link><div>
    </header>
    <section>
      <div>
        <p id="null">手机号码不能为空</p>
        <p id="phone">请输入正确得电话号码</p>
        <input id="user" type="text" placeholder="请输入手机号"/>
        <span>获取验证码</span>
      </div>
      <div>
        <input id="pass" type="text" placeholder="请输入验证码"/>
      </div>
      <div id="btn">下一步</div>
    </section>
  </div>
</template>
<script>
module.exports={
  mounted:function(){
    $("#user").focus(function(){
      $("#null").css("display","none");
      $("#phone").css("display","none")
    });
    $("#btn").click(function(){
       var user=$("#user").val();
       var pass=$("#pass").val();
       if(user==""){
         $("#null").css("display","block")
       }else if(!/^1[34578]\d{9}$/.test(user)){
         $("#phone").css("display","block")
       }else{
         $.ajax({
             url:"http://datainfo.duapp.com/shopdata/userinfo.php",
             data:{
                 status:"register",
                 userID:user,
                 password:pass
             },
             success:function(data){
                 if(data==0){
                     alert("用户名已存在！")
                 }else if(data==1){
                     alert("注册成功");
                     location.href="login.html";
                 }else if(data==2){
                     alert("404");
                 }
             }
         })
       }
    })
  }

}

</script>
