import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: localStorage.getItem("language") || "en", //Выбор языка
    $lang: {}, //Языковой пакет
    options: [], //Пакет параметров
  },
  mutations: {
    CHANGE_LANG_TO_STATE(state, lang) {
      state._lang = lang;
    },
  },
  actions: {
    GET_LANG_TO_STATE(state, lang) {
      sobmmit("CHANGE_LANG_TO_STATE", lang);
    },
  },

  // modules: {},
});
