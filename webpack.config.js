var path=require("path");  //导入path插件
var HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
	entry:"./project/dist/all.js",  //配置入口文件
	output:{  //配置出口
		//第一个参数表示当前所在的绝对路径
		path:path.resolve(__dirname,"project/exit"),
		filename:"main.js"
	},
	plugins:[
		new HtmlWebpackPlugin(
			{template:"./project/dist/homePage.html"}
		)
	]
}
