<template>
  <div class="hello">
    <div class="lang">
      <input list="title" placeholder="For screenshot" v-model="title" @input="changeTitle" />
      <datalist id="title">
        <option v-for="(title, i) in local" :key="i" :value="title"></option>
      </datalist>

      <input type="button" value="save" @click="saveTitle" />
      <input type="button" value="reset" @click="allReset" />
      <select name="langg" class="langg" v-model="selectedLanguage" @change="changeLanguage">
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
      selectedLanguage: localStorage.getItem("language") || "en", //Выбор языка
      pro: false,
      storage: [],
    };
  },
  methods: {
    changeLanguage() {
      //Замена языка в локальном хранилище и Store для сохранения языка при перезагрузке
      console.log(this, lang[this.selectedLanguage]);
      localStorage.setItem("language", this.selectedLanguage);
      this.$store.commit("CHANGE_LANG_TO_STATE", lang[this.selectedLanguage]);
    },

    changeTitle() {
      //Замена Имени в локальном хранилище для сохранения option при перезагрузке
      let titleArray = JSON.parse(localStorage.getItem(`${this.title.toUpperCase()}`));

      if (titleArray) {
        console.log("Ok", titleArray);
        this.$store.commit("CHANGE_OPTIONS_TO_STATE", titleArray);
      } else {
        console.log("No((((");
      }

      localStorage.setItem("title", this.title.toUpperCase());
    },
    saveTitle() {
      //Сохранение в локальном хранилище нового набора option с использованием Title(Имени)
      localStorage.setItem(`${this.title.toUpperCase()}`, JSON.stringify(this.$store.state.options));
      this.storage.push(`${this.title.toUpperCase()}`);
    },
    allReset() {
      //Сброс option for 0
      this.title = "";
      this.$store.commit("CHANGE_OPTIONS_TO_STATE", [
        "00",
        "atk_sum",
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        "00",
        "hp_sum",
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        "00",
        "def_sum",
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        "00",
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        "00",
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        "0",
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        ,
        0,
        0,
        ,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
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
        "acc",
        0,
        "resist",
        0,
        "cDmg",
        0,
        "cRate",
        0,
        "spd",
        0,
        "def_100",
        0,
        "atk_100",
        0,
        "hp_100",
        0,
        "def_sum",
        0,
        "atk_sum",
        0,
        "hp_sum",
        0,
      ]);
    },
    ...mapActions(["GET_OPTION_FROM_TOKEN", "GET_LANG_TO_STATE"]),
  },
  mounted() {
    this.$store.commit("CHANGE_LANG_TO_STATE", lang[this.selectedLanguage]);
    this.$store.commit("CHANGE_OPTIONS_TO_STATE", [
      "00",
      "atk_sum",
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      "00",
      "hp_sum",
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      "00",
      "def_sum",
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      "00",
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      "00",
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      "00",
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      ,
      0,
      0,
      ,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
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
      "acc",
      0,
      "resist",
      0,
      "cDmg",
      0,
      "cRate",
      0,
      "spd",
      0,
      "def_100",
      0,
      "atk_100",
      0,
      "hp_100",
      0,
      "def_sum",
      0,
      "atk_sum",
      0,
      "hp_sum",
      0,
    ]);
  },
  computed: {
    local() {
      this.storage = Object.keys(localStorage).filter((item) => item !== item.toLowerCase());
      return this.storage;
    },
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
