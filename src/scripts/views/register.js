$("#user").focus(function(){
  $("#null").css("display","none");
  $("#phone").css("display","none")
})
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
