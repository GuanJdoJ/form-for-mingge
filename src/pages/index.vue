<template>
	<view class="index">
<!--姓名-->
		<view class="common__formItem">
			<view class="common__label common__formRequired">姓名</view>
			<view class="common__inputWrap common__inputBottom">
				<view class="common__input">
					<input
							v-model.trim="userName"
							placeholder-style="color: #DCDCDC;"
							maxlength="20"
							placeholder="请输入"/>
				</view>
			</view>
		</view>

<!--性别-->
		<view class="common__formItem common__formTop">
			<view class="common__label common__formRequired">性别</view>
			<view class="common__inputWrap common__inputBottom">
				<picker class="common__picker" mode="selector"
								range-key="name"
								:range="sexRange"
								:value="sexIndex"
								@change="bindPickerChange($event,'sexIndex')"
				>
					<view
							:class="{'common__formPlaceholder' : sexIndex < 0}"
							class="common__formInputWrap">
						{{sexIndex < 0 ? '请选择' : sexRange[sexIndex].name}}
					</view>
					<view class="iconfont icon-right common__pickerIcon"
					></view>
				</picker>
			</view>
		</view>

<!--学历-->
		<view class="common__formItem common__formTop">
			<view class="common__label common__formRequired">学历</view>
			<view class="common__inputWrap common__inputBottom">
				<view class="common__input">
					<input
							v-model.trim="education"
							placeholder-style="color: #DCDCDC;"
							maxlength="20"
							placeholder="请输入"/>
				</view>
			</view>
		</view>

<!--院系-->
		<view class="common__formItem common__formTop">
			<view class="common__label common__formRequired">院系</view>
			<view class="common__inputWrap common__inputBottom">
				<picker class="common__picker" mode="selector"
								range-key="name"
								:range="facultyRange"
								:value="facultyIndex"
								@change="bindPickerChange($event,'facultyIndex')"
				>
					<view
							:class="{'common__formPlaceholder' : facultyIndex < 0}"
							class="common__formInputWrap">
						{{facultyIndex < 0 ? '请选择' : facultyRange[facultyIndex].name}}
					</view>
					<view class="iconfont icon-right common__pickerIcon"
					></view>
				</picker>
			</view>
		</view>

<!--专业-->
		<view class="common__formItem common__formTop">
			<view class="common__label common__formRequired">专业</view>
			<view class="common__inputWrap common__inputBottom">
				<view class="common__input">
					<input
							v-model.trim="professional"
							placeholder-style="color: #DCDCDC;"
							maxlength="20"
							placeholder="请输入"/>
				</view>
			</view>
		</view>

<!--期望工作行业-->
		<view class="common__formItem common__formTop">
			<view class="common__label common__formRequired">期望工作行业</view>
			<view class="common__inputWrap common__inputBottom">
				<view class="common__input">
					<input
							v-model.trim="hopeIndustry"
							placeholder-style="color: #DCDCDC;"
							maxlength="20"
							placeholder="请输入"/>
				</view>
			</view>
		</view>

<!--期望职位-->
		<view class="common__formItem common__formTop">
			<view class="common__label common__formRequired">期望职位</view>
			<view class="common__inputWrap common__inputBottom">
				<view class="common__input">
					<input
							v-model.trim="hopePosition"
							placeholder-style="color: #DCDCDC;"
							maxlength="20"
							placeholder="请输入"/>
				</view>
			</view>
		</view>


<!--期望薪资-->
		<view class="common__formItem common__formTop">
			<view class="common__label common__formRequired">期望薪资</view>
			<view class="common__inputWrap common__inputBottom">
				<view class="common__input">
					<input
							v-model.trim="hopeSalary"
							placeholder-style="color: #DCDCDC;"
							maxlength="20"
							placeholder="请输入"/>
				</view>
			</view>
		</view>


<!--期望工作城市-->
		<view class="common__formItem common__formTop">
			<view class="common__label common__formRequired">期望工作城市</view>
			<view class="common__inputWrap common__inputBottom">
				<view class="common__input">
					<input
							v-model.trim="hopeCity"
							placeholder-style="color: #DCDCDC;"
							maxlength="20"
							placeholder="请输入"/>
				</view>
			</view>
		</view>

		<!--按钮-->
		<button
				:disabled="btnDisable"
				@tap="handleSubmit"
				:class="{'common__botBtnDis': btnDisable}"
				class="common__botBtn">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnDisable: false,//提交按钮防呆
				userName: '',//学生姓名

				sexIndex: -1,//性别
				sexRange: [
					{ id: 0, name: "男"},
					{ id: 1, name: "女"},
				],

				education: '',//学历

				facultyIndex: -1,//院系
				facultyRange: [
					{ id: 0, name: "化学与制药学院"},
					{ id: 1, name: "材料科学与工程学院"},
					{ id: 2, name: "化学与环境工程学院"},
					{ id: 3, name: "机电学院"},
					{ id: 4, name: "管理学院"},
					{ id: 5, name: "电气信息学院"},
					{ id: 6, name: "法商学院"},
					{ id: 7, name: "其他"},
				],

				professional: '',//专业
				hopeIndustry: '',//期望行业
				hopePosition: '',//期望职位
				hopeSalary: '',//期望薪资
				hopeCity: '',//期望工作城市
			}
		},

		methods: {
			//选中pick
			bindPickerChange(e, index) {
				this[index] = e.target.value
			},

			//提交
			async handleSubmit() {
				//表单校验
				if(!this.userName) {
					return this.api.toast('请填写姓名')
				} else if (this.sexIndex < 0) {
					return this.api.toast('请选择性别')
				} else if (!this.education) {
					return this.api.toast('请填写学历')
				} else if (this.facultyIndex < 0) {
					return this.api.toast('请选择院系')
				} else if (!this.professional) {
					return this.api.toast('请填写专业')
				} else if (!this.hopeIndustry) {
					return this.api.toast('请填写期望工作行业')
				} else if (!this.hopePosition) {
					return this.api.toast('请填写期望职位')
				} else if (!this.hopeSalary) {
					return this.api.toast('请填写期望薪资')
				} else if (!this.hopeCity) {
					return this.api.toast('请填写期望工作城市')
				}
				this.btnDisable = true
				this.api.modal('是否确认提交？').then(async () => {
					try {
						await this.api.post('submit-from', {
							data: {
								userName: this.userName,
								sex: this.sexRange[this.sexIndex].id,
								education: this.education,
								faculty: this.facultyRange[this.facultyIndex].id,
								professional: this.professional,
								hopeIndustry: this.hopeIndustry,
								hopePosition: this.hopePosition,
								hopeSalary: this.hopeSalary,
								hopeCity: this.hopeCity,
							},
							failToast: false,//不展示提交失败接口报错信息
							modalLoading: '提交中，请稍后'
						})
						this.api.toast('提交成功')
						this.btnDisable = false
					} catch (e) {
						this.api.toast('提交失败，请重试')
						this.btnDisable = false
					}
				})
			},
		},
	}
</script>

<style lang="scss">
	//iconfont
	@import url("https://at.alicdn.com/t/font_2253422_0dbchg49usn8.css");

	.index {
		position: relative;
		padding: 24rpx 36rpx 100rpx;

		.common__formTop {
			margin-top: 60rpx;
		}

		//form
		.common__formItem {
			font-size: 30rpx;

			.common__label {
				position: relative;
				font-weight: 500;

				&.common__formRequired::after {
					content: '*';
					display: inline-block;
					position: absolute;
					top: 6rpx;
					margin-left: 8rpx;
					font-size: 30rpx;
					font-weight: bold;
					color: #E12E30;
				}
			}

			.common__inputWrap {
				margin-top: 21rpx;
				color: #6F6F6F;

				&.common__inputBottom {
					border-bottom: 2rpx solid #F0F0F0;
				}

				.common__input {
					position: relative;
					padding: 11rpx 0;
				}

				.common__inputDisable {
					padding: 12rpx 0;
					color: #A1A1A1;
				}
			}

			.common__formInputWrap {
				&.common__formPlaceholder {
					color: #DCDCDC;
				}

				&.common__formPlaceholder20 {
					font-size: 20rpx;
				}
			}
		}

		//picker
		.common__picker {
			position: relative;
			padding: 12rpx 0;

			.common__pickerArrow {
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-50%);
				color: #A4A4A4;
				font-size: 30rpx;
			}

			.common__pickerIcon {
				position: absolute;
				top: 50%;
				right: -12rpx;
				transform: translateY(-50%);
				padding: 12rpx;
				color: #A4A4A4;
				font-size: 30rpx;
			}

			.common__pickerClearIcon {
				position: absolute;
				top: 50%;
				right: -12rpx;
				transform: translateY(-50%);
				padding: 12rpx;
				color: #A4A4A4;
				font-size: 30rpx;
			}
		}

		//btn
		.common__botBtn {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 78rpx;
			padding-left: 0;
			padding-right: 0;
			margin-top: 40rpx;
			margin-left: 0;
			margin-right: 0;
			line-height: normal;
			border-radius: 6rpx;
			background-color: #F1A117;
			color: #FFFFFF;
			font-size: 28rpx;
			&::after {
				border: none;
			}
		}
		.common__botBtnDis {
			color: rgba(0,0,0,.25) !important;
			background: #f5f5f5 !important;
			border-color: #d9d9d9 !important;
		}
	}

</style>
