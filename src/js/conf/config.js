console.log("config.js");
require.config({
    baseUrl : "http://localhost:8080",
    paths : {
        "jquery" : "https://cdn.bootcss.com/jquery/2.2.0/jquery.min",
        "swiper" : "https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.3.5/js/swiper.min",
        "template-web" : "./js/lib/template-web",
        "cookie" : "./js/mylib/cookie"
    }
})