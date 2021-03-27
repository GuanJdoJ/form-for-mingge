import {request} from '@/utils/request'

const api = {
	post: (url, opts = {}) => request(url, opts),
	get: (url, opts = {}) => {
		opts.method = 'GET'
		return request(url, opts)
	},
	toast: (title = '', {duration, icon} = {}) => {
		uni.showToast({
			title: title,
			icon: icon || 'none',
			duration: duration || 2000
		})
	},

	//确认弹窗
	modal: (content = '', {showCancel = true, confirmText = '确定'} = {}) =>
			new Promise((resolve, reject) => {
				uni.showModal({
					title: '提示',
					content: content || '',
					showCancel: showCancel,
					cancelText: '取消',
					cancelColor: '#999999',
					confirmText: confirmText,
					confirmColor: '#F1A117',
					success: e => {
						if (e.confirm) {
							resolve(e)
						}
					},
					fail: e => {
						reject(e)
					}
				})
			}),
}

export default api
