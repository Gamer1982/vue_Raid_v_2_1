<template>
  <div class="wrapper">
    <div class="top top_weapon">
      <div class="image weapon-1"></div>
      <div class="image2 weapon-1"></div>
      <Sets index="0" />

      <div class="baza weapon">
        <select name="Weapon" class="wep" v-model="$store.state.options[1]">
          <option value="6" class="atk_sum">{{ $store.state.lang.atk }}</option> </select
        ><input type="number" /><select name="Weapon1">
          <option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option>
          <option value="0" class="spd" selected>{{ $store.state.lang.spd }} </option>
          <option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option>
          <option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option>
          <option value="0" class="resist">{{ $store.state.lang.res }} </option>
          <option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option>
          <option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option>
          <option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option> </select
        ><input type="number" /><select name="Weapon2">
          <option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option>
          <option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option>
          <option value="0" class="cRate" selected>{{ $store.state.lang.cRate }} </option>
          <option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option>
          <option value="0" class="resist">{{ $store.state.lang.res }} </option>
          <option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option>
          <option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option>
          <option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option> </select
        ><input type="number" /><select name="Weapon3">
          <option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option>
          <option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option>
          <option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option>
          <option value="0" class="cDmg" selected>{{ $store.state.lang.cDmg }} </option>
          <option value="0" class="resist">{{ $store.state.lang.res }} </option>
          <option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option>
          <option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option>
          <option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option> </select
        ><input type="number" /><select name="Weapon4">
          <option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option>
          <option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option>
          <option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option>
          <option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option>
          <option value="0" class="resist">{{ $store.state.lang.res }} </option>
          <option value="0" class="acc" selected>{{ $store.state.lang.acc }} </option>
          <option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option>
          <option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option> </select
        ><input type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";

export default {
  name: "Weapon",
  data() {
    return {
      option: {},
    };
  },
  components: { Sets },
};
</script>

<style lang="scss">
.top_weapon {
  border: solid 0.2em gray;
}
</style>
