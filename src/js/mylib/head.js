

define(["jquery"], function($) {
   
        //console.log("kaishi");
        $("#head").load("/pages/lib/head.html",function(){
            $(".register").on("click", function (event) {
                //console.log("aaa");
                $(".header_menu").show();
                event.stopPropagation();
                $("html").click(function () {
                    $(".header_menu").hide();
                })
    
            })
    
            $(".header_inf_login").click(function () {
                window.open("/pages/login/login.html");
            })
    
            $(".header_inf_register").click(function () {
                window.open("/pages/register/register.html");
            })
    
            $(".nav_sale").click(function () {
                window.open("/pages/sale/sale.html");
            })
    
            $(".nav_index").click(function () {
                window.open("/index.html");
            })
    
    
    
            
            var user = JSON.parse(getCookie("users"));
            console.log("head"+user);
    
            if(user){
                $(".register_word").html("您好，欢迎<br>我的账户&nbsp;&nbsp;﹀");
            }
    
    
    
            $(".register").on("click", function (event) {
                console.log("aaa");
                $(".header_menu").show();
                event.stopPropagation();
                $("html").click(function () {
                    $(".header_menu").hide();
                })
    
            })
    
    
        
        function getCookie(key) {
            var cookiesstr = document.cookie;
            var list = cookiesstr.split("; ");
            for(var i in list) {
                var kv = list[i].split("=");
                if(kv[0] == key) return kv[1];
            }
            return null;
        }
        });
});