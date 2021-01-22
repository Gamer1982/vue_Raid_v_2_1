<template>
  <div class="wrapper">
    <div class="top top_armor">
      <div class="image armor-1"></div>
      <div class="image2 armor-1"></div>
      <Sets index="36" />

      <div class="baza armor">
        <select name="Armor" class="wep">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="resist" disabled>{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" selected>{{ $store.state.lang.acc }} </option
          ><option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Armor1">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="resist" disabled>{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option
          ><option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100">{{ $store.state.lang.def }}% </option
          ><option value="0" class="spd" selected>{{ $store.state.lang.spd }} </option
          ><option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option
          ><option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option></select
        ><input type="number" /><select name="Armor2">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="resist" disabled>{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option
          ><option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100">{{ $store.state.lang.def }}% </option
          ><option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option
          ><option value="0" class="cRate" selected>{{ $store.state.lang.cRate }} </option
          ><option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option></select
        ><input type="number" /><select name="Armor3">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="resist" disabled>{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option
          ><option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100">{{ $store.state.lang.def }}% </option
          ><option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option
          ><option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option
          ><option value="0" class="cDmg" selected>{{ $store.state.lang.cDmg }} </option></select
        ><input type="number" /><select name="Armor4">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="resist" selected>{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option
          ><option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100">{{ $store.state.lang.def }}% </option
          ><option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option
          ><option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option
          ><option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option></select
        ><input type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";

export default {
  name: "Armor",
  components: { Sets },
};
</script>

<style lang="scss">
.top_armor {
  border: solid 0.2em gray;
}
</style>
