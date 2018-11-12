/**
 * gulp3.9.1新的开发目录
 * 2017年12月11日13:33:28
 * hui
 * @type {Gulp}
 */

// 引入所有的模块
var gulp = require("gulp");
var less = require("gulp-less");
var rename = require("gulp-rename");
var autoprefixer = require("gulp-autoprefixer");
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var sass = require("gulp-sass");
var babel = require("gulp-babel");
var htmlImport = require("gulp-html-import");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;

// 定义常量，以便引用
const debug = "./debug/";
const formal = "./formal/";
const debugBabel = "./debug/Babel/";
const debugJS = "./debug/JavaScript/";
const debugLess = "./debug/Less/";
const debugSass = "./debug/Sass/";
const debugComponents = "./debug/Components/";
const formalCss = "./formal/css/";
const formalImages = "./formal/images/";
const formalJS = "./formal/js/";

/**
 * exploCss 是php等服务器的css存放目录
 * exploJS 是php等服务器的js存放目录
 * hostUrl 是即将监听的动态网站的ip或者域名
 * @type {string}
 */
const exploCss = "D:\\phpStudy\\WWW\\yone\\Application\\Home\\Common";
const exploJS = "D:\\phpStudy\\WWW\\yone\\Application\\Home\\Common";
const hostUrl = "http://127.0.0.1";

/**
 * 编译less
 */
gulp.task("less", function () {
    gulp.src(debugLess + "*.less")
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            remove: true
        }))
        .pipe(rename({
            prefix: "L-"
        }))
        .pipe(gulp.dest(formalCss))
        .pipe(reload({stream: true}))
})

/**
 * 编译sass
 */
gulp.task("sass", function () {
    return gulp.src(debugSass + "*.scss")
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sass().on('error', sass.logError))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            remove: true
        }))
        .pipe(rename({
            prefix: "S-"
        }))
        .pipe(gulp.dest(formalCss))
        .pipe(reload({stream: true}))
})

/**
 * 编译ES6语法
 */
gulp.task("babel", function () {
    return gulp.src(debugBabel + "*.js")
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(formalJS))
        .pipe(reload({stream: true}))
})

/**
 * html压缩等小操作
 */
gulp.task("html", function () {
    return gulp.src(debug + "*.html")
        .pipe(htmlImport(debugComponents))
        .pipe(gulp.dest(formal))
        .pipe(browserSync.stream())
})

/**
 * 静态页面的总任务
 */
gulp.task("dev", ["less", "sass", "babel", "html"], function () {
    // 初始化服务
    browserSync.init({
        server: {
            baseDir: formal
        }
    })
    // 监听文件变化
    gulp.watch(debugLess + "*.less", ["less"]);
    gulp.watch(debugSass + "*.scss", ["sass"]);
    gulp.watch(debugBabel + "*.js", ["babel"]);
    gulp.watch(debug + "*.html", ["html"]);
    gulp.watch(debugComponents + "*.html", ["html"]);
})


/**
 * 监听动态网站，例如PHP搭建的localhost
 */
/**
 * Less输出到www目录下
 */
gulp.task("LessDestWww", function () {
    return gulp.src(debugLess + "*.less")
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            remove: true
        }))
        .pipe(rename({
            prefix: "L-"
        }))
        .pipe(gulp.dest(exploCss))
        .pipe(reload({stream: true}))
})

/**
 * Sass输出到www目录下
 */
gulp.task("SassDestWww", function () {
    return gulp.src(debugSass + "*.scss")
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sass().on('error', sass.logError))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            remove: true
        }))
        .pipe(rename({
            prefix: "S-"
        }))
        .pipe(gulp.dest(exploCss))
        .pipe(reload({stream: true}))
})

/**
 * ES6输出到www目录下
 */
gulp.task("BabelDestWww", function () {
    return gulp.src(debugBabel + "*.js")
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(exploJS))
        .pipe(reload({stream: true}))
})
/**
 * 动态网页的总任务
 */
gulp.task("build",["LessDestWww"], function () {
    browserSync.init({
        proxy: hostUrl
    })
    // 监听文件变化
    gulp.watch(debugLess + "*.less", ["LessDestWww"]);
    gulp.watch(debugSass + "*.scss", ["SassDestWww"]);
    gulp.watch(debugBabel + "*.js", ["BabelDestWww"]);
})
