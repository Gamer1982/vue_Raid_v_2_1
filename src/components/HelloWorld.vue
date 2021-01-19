<template>
  <div class="hello">
    <div class="lang">
      <input
        placeholder="For screenshot"
        v-model="title"
        @change="changeTitle"
      />
      <input type="button" value="save" @click="saveTitle" />
      <input type="button" value="reset" @click="allReset" />
      <select
        name="langg"
        class="langg"
        v-model="selected"
        @change="changeLanguage"
      >
        <option value="en">en </option
        ><option value="ru">ru </option
        ><option value="fr">fr </option
        ><option value="du">de </option
        ><option value="it">it </option
        ><option value="es">es </option
        ><option value="pt">pt </option
        ><option value="ko">ko </option
        ><option value="zh">zh </option
        ><option value="ja">ja </option
        ><option value="tr">tr </option
        ><option value="uk">uk </option>
      </select>
    </div>
    <A1 class="hello__a1" />
    <B1 class="hello__b1" />
    <MainStatus class="hello__mainStatus" />``
    <A2 class="hello__a2" />
    <A3 class="hello__a3" />
  </div>
</template>

<script>
import A1 from "./r-a1";
import A2 from "./r-a2";
import A3 from "./r-a3";
import B1 from "./r-b1";
import MainStatus from "./r-MainStatus";
import { mapGetters, mapMutations, mapActions } from "vuex";
import lang from "../assets/js/data";

export default {
  name: "HelloWorld",
  components: { A1, A2, A3, B1, MainStatus },
  props: {},
  data() {
    return {
      title: localStorage.getItem("title") || "",
      selected: localStorage.getItem("language") || "en", //Выбор языка
      option: [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      lan: {},
    };
  },
  methods: {
    changeLanguage() {
      //Замена языка в локальном хранилище и Store для сохранения языка при перезагрузке
      console.log(this, lang[this.selected]);
      localStorage.setItem("language", this.selected);
      this.$store.commit("CHANGE_LANG_TO_STATE", lang[this.selected]);
    },

    changeTitle() {
      //Замена Имени в локальном хранилище для сохранения option при перезагрузке
      localStorage.setItem("title", this.title.toUpperCase());
    },
    saveTitle() {
      //Сохранение в локальном хранилище нового набора option с использованием Title(Имени)
      localStorage.setItem(`${this.title.toUpperCase()}`, this.option);
    },
    allReset() {
      //Сброс option for 0
      this.title = "";
      this.option = new Array(116).fill(0);
    },
    ...mapActions(["GET_OPTION_FROM_TOKEN", "GET_LANG_TO_STATE"]),
  },
  mounted() {
    this.$store.commit("CHANGE_LANG_TO_STATE", lang[this.selected]);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.hello {
  width: 100vw;
  height: 100vh;
  //border: 1px solid red;
  position: relative;
  background: url(../assets/images/jaguar.jpg) no-repeat center center fixed;
  background-size: cover;
  opacity: 1;
  &__a1 {
    position: absolute;
    top: 1%;
    left: 1%;
    right: 83%;
    bottom: 10%;
    // border: 1px solid red;
  }
  &__a2 {
    position: absolute;
    top: 1%;
    left: 83%;
    right: 1%;
    bottom: 10%;
    // border: 1px solid red;
  }
  &__a3 {
    position: absolute;
    left: 20%;
    right: 32%;
    bottom: 2%;
    // border: 1px solid red;
  }
  &__b1 {
    position: absolute;
    top: 1%;
    left: 18%;
    right: 19%;
    bottom: 90%;
    //border: 1px solid red;
  }
  &__mainStatus {
    position: absolute;
    top: 15%;
    left: 19%;
    right: 17%;
    bottom: 32%;
    //border: 1px solid red;
  }
}
.lang {
  position: absolute;
  display: flex;
  right: 3%;
  bottom: 2%;
  // border: 1px solid red;
  select {
    width: auto;
    text-transform: uppercase;
  }
  input {
    text-transform: uppercase;
  }
}
</style>
