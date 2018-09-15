

//先加载config配置文件
require(["conf/config"],function(){
	//再加载各个模块
	require(["jquery","swiper"],function($,Swiper){
	console.log("index3.js");		
		//等页面加载完成后
		$(function(){

			//打折的轮播图
			new Swiper("#one",{
				direction: 'horizontal',
				loop: true,
				autoplay:true,
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				// 如果需要分页器
				pagination: {
				el: '#one2',
				},
				// 如果需要前进后退按钮
				navigation: {
				nextEl: '#one3',
				prevEl: '#one4',
				},
			})
			//超值购的轮播图
			new Swiper("#two",{
				direction: 'horizontal',
				loop: true,
				autoplay:true,
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				// 如果需要前进后退按钮
				navigation: {
				nextEl: '#two3',
				prevEl: '#two4',
				},
			})
		})
	})
})







// $(function(){
//     $(".register").click(function(){
//         $(".header_menu").show();
//     })    
// })






// //轮播图
// $(document).ready(function() {
    
// 	var disciunt = new Swiper ('#one', {
// 		direction: 'horizontal',
// 		loop: true,
// 		autoplay:true,
// 		spaceBetween: 30,
// 		centeredSlides: true,
// 		autoplay: {
// 			delay: 3000,
// 			disableOnInteraction: false,
// 		},
// 		// 如果需要分页器
// 		pagination: {
// 		  el: '#one2',
// 		},
		
// 		// 如果需要前进后退按钮
// 		navigation: {
// 		  nextEl: '#one3',
// 		  prevEl: '#one4',
// 		},
		
// 		// 如果需要滚动条
// 	// 	scrollbar: {
// 	// 	  el: '.swiper-scrollbar',
// 	// 	},
//    })        




//    var twenty = new Swiper ('#two', {
// 		direction: 'horizontal',
// 		loop: true,
// 		autoplay:true,
// 		spaceBetween: 30,
// 		centeredSlides: true,
// 		autoplay: {
// 			delay: 2500,
// 			disableOnInteraction: false,
// 		},
// 		// 如果需要分页器
// 		// pagination: {
// 		// el: '#two2',
// 		// },
		
// 		// 如果需要前进后退按钮
// 		navigation: {
// 		nextEl: '#two3',
// 		prevEl: '#two4',
// 		},
		
// 		// 如果需要滚动条
// 	// 	scrollbar: {
// 	// 	  el: '.swiper-scrollbar',
// 	// 	},
// 	})        



// });