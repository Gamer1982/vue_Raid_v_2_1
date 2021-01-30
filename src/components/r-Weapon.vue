<template>
  <div class="wrapper">
    <div class="top top_weapon" :style="vStyle" :class="{ active: isActive }">
      <div class="image weapon-1" @click="isActive = !isActive"></div>
      <div class="image2 weapon-1"></div>
      <Sets :index="index" @set-color="color" />

      <div class="baza weapon" @change="disab">
        <select v-model="$store.state.options[1]" name="Weapon" class="wep">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+</option> </select
        ><input v-model="$store.state.options[2]" type="number" /><select v-model="$store.state.options[3]" name="Weapon1">
          <option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option>
          <option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option>
          <option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option>
          <option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option>
          <option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option>
          <option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option>
          <option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option>
          <option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option> </select
        ><input v-model="$store.state.options[4]" type="number" /><select v-model="$store.state.options[5]" name="Weapon2">
          <option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option>
          <option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option>
          <option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option>
          <option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option>
          <option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option>
          <option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option>
          <option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option>
          <option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option> </select
        ><input v-model="$store.state.options[6]" type="number" /><select v-model="$store.state.options[7]" name="Weapon3">
          <option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option>
          <option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option>
          <option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option>
          <option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option>
          <option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option>
          <option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option>
          <option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option>
          <option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option> </select
        ><input v-model="$store.state.options[8]" type="number" /><select v-model="$store.state.options[9]" name="Weapon4">
          <option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option>
          <option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option>
          <option value="cRate" :disabled="isCRate" class="cRate">{{ $store.state.lang.cRate }} </option>
          <option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option>
          <option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option>
          <option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option>
          <option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option>
          <option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option> </select
        ><input v-model="$store.state.options[10]" type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";
import borderColor from "../assets/js/color";
import selectDisabled from "../assets/js/disabled";

export default {
  name: "Weapon",
  data() {
    return {
      index: 0,
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
  components: { Sets },
  methods: {
    disab() {
      selectDisabled(this);
    },
    color() {
      borderColor(this);
    },
    changeDisp() {
      console.log(69, this.isActive);
    },
  },
};
</script>

<style lang="scss">
.top_weapon {
  border: solid 0.2em gray;
}
</style>
