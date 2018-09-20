

require(["../../js/conf/config"],function(){
    require(["jquery","swiper","template-web"],function($,Swiper,template){
        $(function(){
            // 为相对路径
            $("#head").load("../lib/head.html");
            $("#foot").load("../lib/foot.html");
            

            var liststr = document.cookie;
            var list = JSON.parse(liststr.substring(5));
            //console.log(list);
            //console.log(list[0].name,list[0].price,list[0].picture);
            
            var templist = template("tr-cart-list",{
                lists : list
            })

            //console.log(list);

            $("tbody").html( $(".cart-list").html()+templist);
            //console.log("aaa");

            

        })
    })
})