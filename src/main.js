import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import utils from "@/utils/utils";

import API from '@/utils/api'

Vue.prototype.utils = utils
Vue.use(uView)

Vue.prototype.api = API
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
