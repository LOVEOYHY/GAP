

require(["../../js/conf/config"],function(){
    require(["jquery","swiper","cookie"],function($,Swiper,cookie){
        $(function(){
            // 为相对路径
            $("#head").load("../lib/head.html");
            $("#foot").load("../lib/foot.html");
            

            $(".input-big:eq(0)").blur(function(){
                var reg = /^1[0-9]{10}/;
                var res = reg.test($(".input-big:eq(0)").val());
                if(res==false){
                    $("span:eq(1)").text("这是必填项");
                }else{
                    $("span:eq(1)").text("");
                }
            })
            $(".input-small").blur(function(){
                var reg = /^1[0-9]{10}/;
                var res = reg.test($(".input-small").val());
                if(res==false){
                    $("span:eq(2)").text("--------------这是必填项");
                }else{
                    $("span:eq(2)").text("");
                }
            })
            $(".input-big:eq(1)").blur(function(){
                var reg2 = /\w{6,16}/;
                var res2 = reg2.test($(".input-big:eq(1)").val());
                if(res2==false){
                    $("span:eq(3)").text("这是必填项");
                }else{
                    $("span:eq(3)").text("");
                }
            })
            $(".input-big:eq(2)").on("blur",function(){
                var x = $(".input-big:eq(2)").val();
                if(x != $(".input-big:eq(1)").val() || x == ""){
                    $("span:eq(4)").text("这是必填项");
                }else{
                    $("span:eq(4)").text("");
                }
            })
                
            $(".form-btn").on("click",function(){
                var Name = $(this).parent().parent().parent().children().first().find(".input-big").val();
                var Password = $(this).parent().find(".input-big").val();
                console.log(Name,Password);

                var user = {
                    Name : Name,
                    Password : Password
                }

                console.log("login",user);

                // var users = JSON.stringify(user);

                // var now = new Date();
                // now.setDate(now.getDate()+7);
                // document.cookie = "user=" + users + "; expires=" + now + "; path=/";
                // console.log(users)

                cookie.setCookie("users",JSON.stringify(user),3600*12*7,"/");

                $(".form-btn").click(function(){
                    window.open("/index.html");
                })

            })
            


        })
    })
})