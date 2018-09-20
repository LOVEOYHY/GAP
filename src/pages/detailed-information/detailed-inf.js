

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
            
            var templist = template("detailed-inf_goods",{
                lists : list
            })

            //console.log(list);

            $(".detailed-inf-goods").html( $(".detailed-inf-goods-arguments").html()+templist);
            //console.log("aaa");

            $(".goods-inf-arguments-right-sum-join-btn").click(function(){
                window.open("/pages/shopping-cart/cart.html");
            })
        })
    })
})