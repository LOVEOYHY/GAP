

require(["../../js/conf/config"],function(){
    require(["jquery","swiper","template-web"],function($,Swiper,template){
        $(function(){
            // 为相对路径
            $("#head").load("../lib/head.html");
            $("#foot").load("../lib/foot.html");
            
            // 请求数据
            $.ajax({
                url : "http://localhost:8080/ajax/json/lining.json",
                dataType : "json",
                success : function(data){
                    var goods = data.data;
                    //console.log(data);
                    //console.log(goods);
                    var tempstr = template("saleGoods",{
                        list : goods
                    });
        
                    $(".sale-goods").html( $(".sale-goods").html()+tempstr );

                    var list = [];
                    $(".saleGoodsBox").on("click",".saleGoodsBox-picture",function(){
                        //console.log("ok")
                        var picture = $(this).attr("src");
                        var name = $(this).parent().next().children().text();
                        var price = $(this).parent().next().next().text();
                        //console.log(name);
                        //console.log(picture,price);
                        var obj = {
                            "picture" : picture,
                            "name" : name,
                            "price" : price
                        }
                        //console.log(obj);
                        list.push(obj);
                        //console.log(list);
                        var str = JSON.stringify(list);
                        //console.log(str);
                        var now = new Date();
                        now.setDate(now.getDate()+7);
                        document.cookie = "list=" + str + "; expires=" + now + "; path=/";
                        window.open("/pages/detailed-information/detailed-inf.html"); 
                    })

                } 
            })
            console.log("kaishi");
            //var list = [];
            
            
            // $(window).scroll(function(){
            //     var x = $(window).scrollTop();
            //     if(x>50){
            //         $(".sale-nav").offset({top:x});
            //     }
            //     if(x<50){
            //         $(".sale-nav").offset({top:50});
            //     }
            // })
        

        })
    })
})



// $(function(){
//     //let goodsCache = new Map();
//     //var start = 0;
//     console.log("sale.js");
    
// })