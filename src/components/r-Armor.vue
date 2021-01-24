<template>
  <div class="wrapper">
    <div class="top top_armor" :style="vStyle" @change="color">
      <div class="image armor-1"></div>
      <div class="image2 armor-1"></div>
      <Sets :index="index" />

      <div class="baza armor" @change="disab">
        <select v-model="$store.state.options[45]" name="Armor" class="wep">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input v-model="$store.state.options[46]" type="number" /><select v-model="$store.state.options[47]" name="Armor1">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option></select
        ><input v-model="$store.state.options[48]" type="number" /><select v-model="$store.state.options[49]" name="Armor2">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option></select
        ><input v-model="$store.state.options[50]" type="number" /><select v-model="$store.state.options[51]" name="Armor3">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option></select
        ><input v-model="$store.state.options[52]" type="number" /><select v-model="$store.state.options[53]" name="Armor4">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option></select
        ><input v-model="$store.state.options[54]" type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";
import borderColor from "../assets/js/color";
import selectDisabled from "../assets/js/disabled";

export default {
  name: "Armor",
  data() {
    return {
      index: 44,
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
      isActive: true,
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
.top_armor {
  border: solid 0.2em gray;
}
</style>
