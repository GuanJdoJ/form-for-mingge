import api from '@/utils/api'

//接口别名
const urls = {
	'submit-from': 'api/submit-form'//TODO 在此处改接口
}

//处理请求 failToast-控制是否展示接口报错信息 modalLoading-控制接口调用过程中页面是否展示loading及文字
const request = (url, {method, data = {}, failToast = true, modalLoading = ''}) => {
	modalLoading && uni.showLoading({
		title: modalLoading,//loading及文字
		mask: true,
	})
	const proxyFlag = process.env.NODE_ENV === 'development' ? `/app` : `http://xxx`//TODO 此处需调整为真实请求域名
	return new Promise((resolve, reject) => {
		uni.request({
			url: `${proxyFlag}/${urls[url]}`,
			data: data,
			method: method || 'POST',
			header: header,
			success: res => {
				modalLoading && uni.hideLoading()
				if (res.statusCode == '200') {
					//正常输出
					console.log('=============接口调用返回值', res)
					resolve(res.data.data) //TODO 此处需要根据后台接口返回格式调整
				} else {
					//异常输出
					failToast && api.toast(res.data.message)//TODO 此处需要根据后台接口返回格式调整报错信息
				}
			},
			fail: err => {
				modalLoading && uni.hideLoading()
				reject(err) /* 请求错误 */
				failToast && api.toast('网络异常，请检查您的手机网络')
			},
		})
	})
}

export {request}
