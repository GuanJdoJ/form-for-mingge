<script>
	export default {
		onLaunch: function (o) {

		},
		onShow: function () {
			//console.log('App Show')
		},
		onHide: function () {
			//console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	@import 'uview-ui/index.scss';

	/* reset */
	body {
		background-color: #FFFFFF;
		color: #444444;
	}
	view,
	scroll-view,
	swiper,
	button,
	input,
	textarea,
	label,
	navigator,
	picker,
	image {
		box-sizing: border-box;
	}
	::-webkit-scrollbar {
		display: none;
		opacity: 0;
	}

	/* 刘海屏安全区域 */
	@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {
		body {
			/* ios < 11.2 */
			padding-left: constant(safe-area-inset-left);
			padding-top: constant(safe-area-inset-top);
			padding-right: constant(safe-area-inset-right);
			padding-bottom: constant(safe-area-inset-bottom);
			/* ios >= 11.2 */
			padding-left: env(safe-area-inset-left);
			padding-top: env(safe-area-inset-top);
			padding-right: env(safe-area-inset-right);
			padding-bottom: env(safe-area-inset-bottom);
		}
	}

	/*uni-app picker组件 ---start*/
	/deep/ .uni-picker-container {
		z-index: 11000;
		.uni-picker-header {
			height: 96rpx;
			background-color: #F0F0F0;
		}

		.uni-picker-action {
			line-height: 96rpx;

			&.uni-picker-action-cancel {
				font-size: 28rpx;
				color: #444444;
			}

			&.uni-picker-action-confirm {
				font-size: 28rpx;
				color: #F1A117;
			}
		}

		.uni-picker-view-indicator {
			height: 90rpx;
		}

		.uni-picker-item {
			line-height: 90rpx;
			color: #444444;
		}

	}
	/*uni-app picker组件 ---end*/

</style>
