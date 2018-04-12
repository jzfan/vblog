import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category'
import blog from './modules/blog'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        category, blog
    }
})
