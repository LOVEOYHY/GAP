let gulp = require("gulp");
//压缩js
let minifyJS = require("gulp-babel-minify");
//压缩css
let minifyCSS = require("gulp-clean-css");
//连接服务器
let connect = require("gulp-connect");
//转换sass
let sass = require("gulp-sass");


//复制文件
gulp.task("build",()=>{
    //编译压缩js
    gulp.src("./src/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./dist"))

    //压缩css
    gulp.src("./src/**/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("./dist"))

    //复制html
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"))

    //复制转译scss
    gulp.src("./src/**/*.scss")
        .pipe(sass({
            otuputStyle : "expanded"
        })).on('error',sass.logError)
        .pipe(gulp.dest("./dist"))
})

gulp.task("refreshJS", ()=>{
    gulp.src("./src/**/*.js")
        .pipe(minifyJS())
        .pipe(gulp.dest("./dist"))        
})

gulp.task("refreshCSS", ()=>{
    gulp.src("./src/**/*.css")
        .pipe(minifyCSS())
        .pipe(gulp.dest("./dist"))        
})

gulp.task("refreshHTML", ()=>{
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./dist"))        
        .pipe(connect.reload());
})

gulp.task("refreshCSS", ()=>{
    gulp.src("./src/**/*.scss")
        .pipe(sass({
            otuputStyle : "expanded"
        })).on('error',sass.logError)
        .pipe(gulp.dest("./dist"))        
})




gulp.task("server", ()=>{
    //创建一个服务器
    connect.server({
        root : "src", //指定服务器根目录在哪
        port : 8080, 
        livereload : true  //服务器是否可以热部署（即时刷新）
    })

    //监听所有文件的变化， 执行相应的任务
    gulp.watch("./src/**/*.html", ["refreshHTML"]);
    gulp.watch("./src/**/*.css", ["refreshCSS", "refreshHTML"]);
    gulp.watch("./src/**/*.js", ["refreshJS","refreshHTML"]);
})