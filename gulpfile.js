var gulp=require('gulp');
var uglify=require('gulp-uglify');
var rename=require('gulp-rename');
var concat=require('gulp-concat');
var sass=require('gulp-sass');
var cssnano=require('gulp-cssnano');
var babel=require('gulp-babel');


//测试gulp
//gulp.task("test",function(){
//	console.log("aaa");
//})

//压缩加重命名
//gulp.task("js",function(){
//	gulp.src("./src/js/*.js").pipe(uglify()).pipe(rename({suffix : ".min"}))
//.pipe(gulp.dest("dist"));
//})


//压缩合并,转es5
gulp.task("js",function(){
	gulp.src("./project/src/js/*.js")
	.pipe(babel({
		presets:['env']
	}))
	.pipe(uglify())
	.pipe(concat("all.js"))
	.pipe(gulp.dest("project/dist"));
})

//监听
//gulp.task("default",function(){
//	gulp.watch("./src/js/*.js",["js"]);
//})

//ES6转ES5
//gulp.task("es6",function(){
//	gulp.src("./src/js/*.js")
//	.pipe(babel({
//		presets:['env']
//	}))
//	.pipe(gulp.dest('dist'));
//})	


//scss压缩重命名
gulp.task("sass",function(){
	gulp.src("./project/src/scss/*.scss")
	.pipe(sass())
	.pipe(rename({suffix:".min"}))
//	.pipe(cssnano())
	.pipe(gulp.dest("project/dist"));
})


//监听
//gulp.task("default",function(){
//	gulp.watch("./src/scss/*.scss",["sass"]);
//})


gulp.task("default",function(){
	gulp.watch(["./src/scss/*.scss","./src/js/*.js"],["sass","js"]);
})

