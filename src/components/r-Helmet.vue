<template>
  <div class="wrapper">
    <div class="top top_helmet" :style="vStyle" :class="{ active: isActive }">
      <div class="image helmet-1" @click="isActive = !isActive"></div>
      <div class="image2 helmet-1"></div>
      <Sets :index="index" @set-color="color" />

      <div class="baza helmet" @change="disab">
        <select v-model="$store.state.options[12]" name="Helmet" class="wep">
          <option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option></select
        ><input v-model="$store.state.options[13]" type="number" /><select v-model="$store.state.options[14]" name="Helmet1">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input v-model="$store.state.options[15]" type="number" /><select v-model="$store.state.options[16]" name="Helmet2">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input v-model="$store.state.options[17]" type="number" /><select v-model="$store.state.options[18]" name="Helmet3">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input v-model="$store.state.options[19]" type="number" /><select v-model="$store.state.options[20]" name="Helmet4">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input v-model="$store.state.options[21]" type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";
import borderColor from "../assets/js/color";
import selectDisabled from "../assets/js/disabled";

export default {
  name: "Helmet",
  data() {
    return {
      index: 11,
      isAcc: false,
      isAtk_sum: false,
      isAtk_100: false,
      isDef_sum: false,
      isDef_100: false,
      isHp_sum: false,
      isHp_100: false,
      isResist: false,
      isCRate: false,
      isCDmg: false,
      isSpd: false,
      isActive: false,
      vStyle: "border: solid 0.1em gray",
    };
  },

  methods: {
    disab() {
      selectDisabled(this);
    },
    color() {
      borderColor(this);
    },
  },

  components: { Sets },
};
</script>

<style lang="scss">
.top_helmet {
  border: solid 0.2em gray;
}
</style>
