module.exports = {
	devServer: {
		//本地开发跨域处理
		proxy: {
			'/app': {
				target: 'http://localhost:3000',//TODO 代理地址，这里设置的地址会代替请求中的域名
				changeOrigin: true,// 如果接口跨域，需要进行这个参数配置
				pathRewrite: {//重写url，把用于标识的'域名/app'替换成/
					'^/app': '/'
				}
			}
		},
	}
}
