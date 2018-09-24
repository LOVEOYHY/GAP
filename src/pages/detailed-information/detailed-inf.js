

require(["../../js/conf/config"],function(){
    require(["jquery","swiper","template-web","cookie"],function($,Swiper,template,cookie){
        $(function(){
            // 为相对路径
            $("#head").load("../lib/head.html");
            $("#foot").load("../lib/foot.html");

            //console.log("de"+cookie.getCookie("list"));
            
            var list = JSON.parse(cookie.getCookie("list"));
            //console.log(list);

            // var liststr = document.cookie;
            // var list = JSON.parse(liststr.substring(5));
            //console.log(list);
            //console.log(list[0].name,list[0].price,list[0].picture);
            
            var templist = template("detailed-inf_goods",{
                $value : list
            })

            //console.log(list);

            $(".detailed-inf-goods").html( $(".detailed-inf-goods").html()+templist);
            //console.log("aaa");


            // $(".gooda-arguments-right-count-x").click(function(){
            //     $("._count").animate({width:122},500,function(){
            //         if($("._count").width() == "122"){
            //             console.log("12222222222")
            //             $(".gooda-arguments-right-count-x").click(function(event){
            //                 //event.stopPropagation();
            //                 console.log("可以")
            //                 $("._count").animate({width:40},500);
            //                 event.stopPropagation();
                            
            //             })
            //         }
            //     });
            //     //event.stopPropagation();
                

            // })


            // $("._count-box").click(function(){
            //     $("._count").animate({width:122},500,function(){
            //         if($("._count").width() != 40){
            //             $(".gooda-arguments-right-count-x").click(function(){
            //                 $("._count").animate({width:40},500);
            //                 event.stopPropagation();
            //             })
            //         }
            //     });
                
                
            // })
            $(".gooda-arguments-right-count-x:eq(0)").width(40).siblings().hide();
            //$(".gooda-arguments-right-count-x:eq(0)").siblings().text().hide();

            $("._count-box").on("click",".gooda-arguments-right-count-x",function(){
                //$(this).siblings().animate({width:0},500);
                //$(this).siblings().text("");
                //$(this).siblings().hide(500);
                $(this).siblings().show(500,function(){
                    $(".gooda-arguments-right-count-x").click(function(){
                        $(this).siblings().hide(500);
                        $(this).addClass("_count-spec");
                        //$(".gooda-arguments-right-count-x:eq(0)").removeClass("_count-spec");
                        $(this).siblings().removeClass("_count-spec");
                        //$("._count-box").text($(this).text());
                        event.stopPropagation();
                        


                        
                        var goodsPicture = $(".detailed-inf-goods-arguments-left-big").children().attr("src");
                        var goodsName = $(".goods-arguments-right-name").text();
                        var goodsPrice = $(".goods-arguments-right-monry_now").text();
                        var goodsCount = $("._count-spec").text();
                        console.log(goodsCount);
                        var goodsMoney = goodsPrice*goodsCount;
                        console.log(goodsMoney)

                        $("._sum_inform_money").text(goodsMoney);

                        var goods = {
                            "goodsPicture" : goodsPicture,
                            "goodsName" : goodsName,
                            "goodsPrice" : goodsPrice,
                            "goodsCount" : goodsCount,
                            "goodsMoney" : goodsMoney
                        }
                    
                        console.log(goods,"aaa");
                        cookie.setCookie("goods",JSON.stringify(goods),3600*12*7,"/");
                    })
                });
                
                // $(this).siblings().show(500,function(){
                //     if($(".gooda-arguments-right-count-x").show()){
                //         $("._count-box").on("click",".gooda-arguments-right-count-x",function(){
                //             $(this).siblings().hide(500);
                //         })
                //     }
                // });  
            })

            // $("._count-box").on("click",".gooda-arguments-right-count-x",function(){
            //     if($(this).siblings().width() != 40){
            //         $(this).siblings().animate({width:40},500);
            //         //$(this).siblings().show(500);
            //     }
            // })
            
            

            
            //console.log(goods);
            //console.log(goods,"bbbb")
            


            $(".goods-inf-arguments-right-sum-join").on("click",".goods-inf-arguments-right-sum-join-btn",function(){
                //cookie.setCookie("goods",JSON.stringify(goods),3600*12*7,"/");
                window.open("/pages/shopping-cart/cart.html");
            })
        })
    })
})