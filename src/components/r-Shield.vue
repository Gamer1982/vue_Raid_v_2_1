<template>
  <div class="wrapper">
    <div class="top top_shield">
      <div class="image shield9-1"></div>
      <div class="image2 shield9-1"></div>
      <Sets />
      <div class="baza shield9">
        <select name="Shield" class="wep">
          <option value="0" class="def_sum">DEF+</option> </select
        ><input type="number" /><select name="Shield1">
          <option value="0" class="hp_sum">HP+</option>
          <option value="0" class="spd" disabled>SPD</option>
          <option value="0" class="cRate" disabled>C.RATE</option>
          <option value="0" class="cDmg" selected>C.DMG</option>
          <option value="0" class="resist">RESIST</option>
          <option value="0" class="acc" disabled>ACC</option>
          <option value="0" class="hp_100">HP%</option>
          <option value="0" class="def_100">DEF%</option> </select
        ><input type="number" /><select name="Shield2">
          <option value="0" class="hp_sum">HP+</option>
          <option value="0" class="spd" disabled>SPD</option>
          <option value="0" class="cRate" selected>C.RATE</option>
          <option value="0" class="cDmg" disabled>C.DMG</option>
          <option value="0" class="resist">RESIST</option>
          <option value="0" class="acc" disabled>ACC</option>
          <option value="0" class="hp_100">HP%</option>
          <option value="0" class="def_100">DEF%</option> </select
        ><input type="number" /><select name="Shield3">
          <option value="0" class="hp_sum">HP+</option>
          <option value="0" class="spd" selected>SPD</option>
          <option value="0" class="cRate" disabled>C.RATE</option>
          <option value="0" class="cDmg" disabled>C.DMG</option>
          <option value="0" class="resist">RESIST</option>
          <option value="0" class="acc" disabled>ACC</option>
          <option value="0" class="hp_100">HP%</option>
          <option value="0" class="def_100">DEF%</option> </select
        ><input type="number" /><select name="Shield4">
          <option value="0" class="hp_sum">HP+</option>
          <option value="0" class="spd" disabled>SPD</option>
          <option value="0" class="cRate" disabled>C.RATE</option>
          <option value="0" class="cDmg" disabled>C.DMG</option>
          <option value="0" class="resist">RESIST</option>
          <option value="0" class="acc" selected>ACC</option>
          <option value="0" class="hp_100">HP%</option>
          <option value="0" class="def_100">DEF%</option> </select
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
