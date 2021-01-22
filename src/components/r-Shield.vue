<template>
  <div class="wrapper">
    <div class="top top_shield">
      <div class="image shield9-1"></div>
      <div class="image2 shield9-1"></div>
      <Sets index="18" />
      <div class="baza shield9">
        <select name="Shield" class="wep">
          <option value="0" class="def_sum">{{ $store.state.lang.def }}+</option> </select
        ><input type="number" /><select name="Shield1">
          <option value="0" class="hp_sum">{{ $store.state.lang.hp }}+</option>
          <option value="0" class="spd" disabled>{{ $store.state.lang.spd }}</option>
          <option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }}</option>
          <option value="0" class="cDmg" selected>{{ $store.state.lang.cDmg }}</option>
          <option value="0" class="resist">{{ $store.state.lang.res }}</option>
          <option value="0" class="acc" disabled>{{ $store.state.lang.acc }}</option>
          <option value="0" class="hp_100">{{ $store.state.lang.hp }}%</option>
          <option value="0" class="def_100">{{ $store.state.lang.def }}%</option> </select
        ><input type="number" /><select name="Shield2">
          <option value="0" class="hp_sum">{{ $store.state.lang.hp }}+</option>
          <option value="0" class="spd" disabled>{{ $store.state.lang.spd }}</option>
          <option value="0" class="cRate" selected>{{ $store.state.lang.cRate }}</option>
          <option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }}</option>
          <option value="0" class="resist">{{ $store.state.lang.res }}</option>
          <option value="0" class="acc" disabled>{{ $store.state.lang.acc }}</option>
          <option value="0" class="hp_100">{{ $store.state.lang.hp }}%</option>
          <option value="0" class="def_100">{{ $store.state.lang.def }}%</option> </select
        ><input type="number" /><select name="Shield3">
          <option value="0" class="hp_sum">{{ $store.state.lang.hp }}+</option>
          <option value="0" class="spd" selected>{{ $store.state.lang.spd }}</option>
          <option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }}</option>
          <option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }}</option>
          <option value="0" class="resist">{{ $store.state.lang.res }}</option>
          <option value="0" class="acc" disabled>{{ $store.state.lang.acc }}</option>
          <option value="0" class="hp_100">{{ $store.state.lang.hp }}%</option>
          <option value="0" class="def_100">{{ $store.state.lang.def }}%</option> </select
        ><input type="number" /><select name="Shield4">
          <option value="0" class="hp_sum">{{ $store.state.lang.hp }}+</option>
          <option value="0" class="spd" disabled>{{ $store.state.lang.spd }}</option>
          <option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }}</option>
          <option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }}</option>
          <option value="0" class="resist">{{ $store.state.lang.res }}</option>
          <option value="0" class="acc" selected>{{ $store.state.lang.acc }}</option>
          <option value="0" class="hp_100">{{ $store.state.lang.hp }}%</option>
          <option value="0" class="def_100">{{ $store.state.lang.def }}%</option> </select
        ><input type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";

export default {
  name: "Shield",
  components: { Sets },
};
</script>

<style lang="scss">
.top_shield {
  border: solid 0.2em gray;
}
</style>
