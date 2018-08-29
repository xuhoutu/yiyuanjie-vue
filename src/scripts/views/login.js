
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
   })
