import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
// 创建一个vuex对象，输出
export default new Vuex.Store({
    plugins:[createPersistedState()],
    state: {
        cityObj: {
            id: 30,
            name: "深圳"
        }
    },
    getters: {
    },
    mutations: {
        changeCity(state, city) {
            state.cityObj.id = city.id;
            state.cityObj.name = city.name;
        }
    },
    actions: {
    },
    modules: {
    }
})
