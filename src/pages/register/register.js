

require(["../../js/conf/config"],function(){
    require(["jquery","swiper","template-web"],function($,Swiper){
        $(function(){
            // 为相对路径
            $("#head").load("../lib/head.html");
			$("#foot").load("../lib/foot.html");
        })
    })
})