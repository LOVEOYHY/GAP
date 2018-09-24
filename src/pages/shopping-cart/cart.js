

require(["../../js/conf/config"],function(){
    require(["jquery","swiper","template-web","cookie","head"],function($,Swiper,template,cookie){
        $(function(){
            // 为相对路径
            // $("#head").load("../lib/head.html");
            $("#foot").load("/pages/lib/foot.html");
            

            var goodsstr = JSON.parse(cookie.getCookie("goods"));
            console.log(goodsstr);

            if( goodsstr == null || goodsstr == "" ){
                $(".cart_under").hide();
                $(".cart_isNull").show();
                $("tbody").html("");
            }

            //var list = JSON.parse(liststr.substring(5));
            //console.log(list);
            //console.log(list[0].name,list[0].price,list[0].picture);
            
            var goodsList = template("tr-cart-list",{
                GoodsStr : goodsstr
            })
            
            //console.log(list);

            $("tbody").html( $(".cart-list").html()+goodsList );
            //console.log("aaa");
            $(".cart-close-head-left").children().text( $(".cart-list-inf-sum").text() );
            $(".cart-close-head-right").text( $(".cart-list-add").children().text() );



            // if( $("tbody").html() == "underfind" ){
            //     $(".cart_under").hide();
            //     $(".cart_isNull").show();
            // }


            goodsstr.forEach(function(item){
                $(".cart-list").on("click",".cart-list-do-del",function(){
                    // $(".cart-list").remove();
                    // $(".cart_under").hide();
                    // $(".cart_isNull").show();
                    // console.log("删除");
                    //cookie.setCookie("goods",null,3600*12*7,"/");
                    $(this).parent().parent().remove();
                    
                    
                    if( $(this).parent().parent().children().eq(1).find("img").attr("src") == item.goodsPicture ){
                        goodsstr.splice(goodsstr.indexOf(item),1);
                        console.log($(this).parent().parent().children().eq(1).find("img").attr("src"),item.goodsPicture);
                        cookie.setCookie("goods",JSON.stringify(goodsstr),3600*12*7,"/");
                        if( goodsstr.length == 0 ){
                            $(".cart-list").remove();
                            $(".cart_under").hide();
                            $(".cart_isNull").show();
                            $("tbody").html("");
                        }
                    }
                    
                    
                })
            })
            
        })
    })
})