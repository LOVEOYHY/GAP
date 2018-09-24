

require(["../../js/conf/config"],function(){
    require(["jquery","swiper","template-web","cookie"],function($,Swiper,template,cookie){
        $(function(){
            // 为相对路径
            $("#head").load("../lib/head.html");
            $("#foot").load("../lib/foot.html");
            

            var goodsstr = JSON.parse(cookie.getCookie("goods"));
            console.log(goodsstr);

            if( goodsstr == null ){
                $(".cart_under").hide();
                $(".cart_isNull").show();
            }

            //var list = JSON.parse(liststr.substring(5));
            //console.log(list);
            //console.log(list[0].name,list[0].price,list[0].picture);
            
            var goodsList = template("tr-cart-list",{
                $value : goodsstr
            })
            
            //console.log(list);

            $("tbody").html( $(".cart-list").html()+goodsList );
            //console.log("aaa");
            $(".cart-close-head-left").children().text( $(".cart-list-inf-sum").text() );
            $(".cart-close-head-right").text( $(".cart-list-add").children().text() );
            

        })
    })
})