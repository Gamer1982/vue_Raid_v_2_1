import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: {}, //Языковой пакет
    options: [], //Пакет параметров
  },
  mutations: {
    CHANGE_LANG_TO_STATE(state, item) {
      state.lang = item;
    },
    CHANGE_LANGUAGE_TO_STATE(state, item) {
      state.language = item;
    },
    CHANGE_OPTIONS_TO_STATE(state, item) {
      state.options = item;
    },
  },
  actions: {
    GET_LANG_TO_STATE(state, lang) {
      sobmmit("CHANGE_LANG_TO_STATE", lang);
    },
    GET_OPTIONS_TO_STATE(state, option) {
      sobmmit("CHANGE_LANG_TO_STATE", option);
    },
  },

  // modules: {},
});
