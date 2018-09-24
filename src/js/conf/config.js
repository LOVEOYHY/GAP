console.log("config.js");
require.config({
    baseUrl : "http://localhost:8080",
    paths : {
        "jquery" : "./js/lib/jquery-1.9.0",
        "swiper" : "./js/lib/swiper-4.3.5.min",
        "template-web" : "./js/lib/template-web",
        "cookie" : "./js/mylib/cookie",
        "head" : "./js/mylib/head"
    }
})