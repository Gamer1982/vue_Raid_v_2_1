<template>
  <div class="wrapper">
    <div class="top top_boxing">
      <div class="image boxing-1"></div>
      <div class="image2 boxing-1"></div>
      <Sets />

      <div class="baza boxing">
        <select name="Boxing" class="wep">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="cRate" selected>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select
        ><input type="number" /><select name="Boxing1">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" selected>C.DMG </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option
          ><option value="0" class="spd">SPD </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option></select
        ><input type="number" /><select name="Boxing2">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option
          ><option value="0" class="spd">SPD </option
          ><option value="0" class="resist" selected>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option></select
        ><input type="number" /><select name="Boxing3">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option
          ><option value="0" class="spd" selected>SPD </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option></select
        ><input type="number" /><select name="Boxing4">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option
          ><option value="0" class="spd">SPD </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" selected>ACC </option></select
        ><input type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";

export default {
  name: "Boxing",
  components: { Sets },
};
</script>

<style lang="scss">
.top_boxing {
  border: solid 0.2em gray;
}
</style>
