<template>
  <div class="wrapper">
    <div class="top top_shield">
      <div class="image shield9-1"></div>
      <div class="image2 shield9-1"></div>
      <Sets :index="index" />
      <div class="baza shield9" @change="disab">
        <select v-model="$store.state.options[23]" name="Shield" class="wep">
          <option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+</option> </select
        ><input v-model="$store.state.options[24]" type="number" /><select v-model="$store.state.options[25]" name="Shield1">
          <option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+</option>
          <option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }}</option>
          <option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }}</option>
          <option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }}</option>
          <option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }}</option>
          <option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }}</option>
          <option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}%</option>
          <option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}%</option> </select
        ><input v-model="$store.state.options[26]" type="number" /><select v-model="$store.state.options[27]" name="Shield2">
          <option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+</option>
          <option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }}</option>
          <option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }}</option>
          <option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }}</option>
          <option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }}</option>
          <option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }}</option>
          <option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}%</option>
          <option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}%</option> </select
        ><input v-model="$store.state.options[28]" type="number" /><select v-model="$store.state.options[29]" name="Shield3">
          <option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+</option>
          <option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }}</option>
          <option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }}</option>
          <option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }}</option>
          <option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }}</option>
          <option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }}</option>
          <option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}%</option>
          <option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}%</option> </select
        ><input v-model="$store.state.options[30]" type="number" /><select v-model="$store.state.options[31]" name="Shield4">
          <option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+</option>
          <option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }}</option>
          <option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }}</option>
          <option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }}</option>
          <option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }}</option>
          <option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }}</option>
          <option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}%</option>
          <option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}%</option> </select
        ><input v-model="$store.state.options[32]" type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";

export default {
  name: "Shield",
  data() {
    return {
      index: 22,
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
    };
  },
  methods: {
    disab() {
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("acc") ? (this.isAcc = true) : (this.isAcc = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("atk_sum") ? (this.isAtk_sum = true) : (this.isAtk_sum = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("atk_100") ? (this.isAtk_100 = true) : (this.isAtk_100 = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("def_sum") ? (this.isDef_sum = true) : (this.isDef_sum = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("def_100") ? (this.isDef_100 = true) : (this.isDef_100 = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("hp_sum") ? (this.isHp_sum = true) : (this.isHp_sum = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("hp_100") ? (this.isHp_100 = true) : (this.isHp_100 = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("resist") ? (this.isResist = true) : (this.isResist = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("cRate") ? (this.isCRate = true) : (this.isCRate = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("cDmg") ? (this.isCDmg = true) : (this.isCDmg = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("spd") ? (this.isSpd = true) : (this.isSpd = false);
    },
  },
  components: { Sets },
};
</script>

<style lang="scss">
.top_shield {
  border: solid 0.2em gray;
}
</style>
