<template>
  <div class="wrapper">
    <div class="top top_helmet">
      <div class="image helmet-1"></div>
      <div class="image2 helmet-1"></div>
      <Sets index="9" />

      <div class="baza helmet">
        <select name="Helmet" class="wep">
          <option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option></select
        ><input type="number" /><select name="Helmet1">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option
          ><option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option
          ><option value="0" class="cDmg" selected>{{ $store.state.lang.cDmg }} </option
          ><option value="0" class="resist">{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option
          ><option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Helmet2">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option
          ><option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option
          ><option value="0" class="cDmg" selected>{{ $store.state.lang.cDmg }} </option
          ><option value="0" class="resist">{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option
          ><option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Helmet3">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option
          ><option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option
          ><option value="0" class="cDmg" selected>{{ $store.state.lang.cDmg }} </option
          ><option value="0" class="resist">{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option
          ><option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Helmet4">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option
          ><option value="0" class="cRate" disabled>{{ $store.state.lang.cRate }} </option
          ><option value="0" class="cDmg" selected>{{ $store.state.lang.cDmg }} </option
          ><option value="0" class="resist">{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option
          ><option value="0" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";

export default {
  name: "Helmet",
  components: { Sets },
};
</script>

<style lang="scss">
.top_helmet {
  border: solid 0.2em gray;
}
</style>
