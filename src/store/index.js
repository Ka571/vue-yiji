import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
import pics from "../store/modules/pics"
import recommends from "../store/modules/recommend"
import users from "../store/modules/user"
import main from "../store/modules/main"
const store = new Vuex.Store({
  modules: {
    pics, recommends, users, main
  }
});
export default store;