

require(["../../js/conf/config"], function () {
    require(["jquery", "swiper", "cookie","head"], function ($, Swiper, cookie) {
        $(function () {
            // 为相对路径
            // $("#head").load("../lib/head.html");
            $("#foot").load("/pages/lib/foot.html");
            console.log(JSON.parse(cookie.getCookie("users")));
            var user = JSON.parse(cookie.getCookie("users"));
            
            
            $("#already-name-input").on("blur", function () {
                var name = $("#already-name-input").val();
                if ($.trim(name) == "") {
                    $(this).prev().show();
                    console.log("yes");
                    console.log(name);

                } else {
                    console.log("no");

                    $(this).prev().hide();
                }
                // if(name != ""){
                //     $("#already-name-input").prev().hide();
                // }
            })

            $("#already-pw-input").on("blur", function () {
                var password = $("#already-pw-input").val();
                if (password == "") {
                    $(this).prev().show();
                } else {
                    $(this).prev().hide();
                }
            })


            $(".already-pw-btn").click(function () {



                // console.log("aaa" + name, password)
                // console.log(user.Name, user.Password);

                if ($("#already-name-input").val() == user.Name && $("#already-pw-input").val() == user.Password) {
                    window.open("/index.html");
                } else {
                    $("#already-pw_btn").text("用户名与密码不匹配");
                }
            })




        })
    })
})