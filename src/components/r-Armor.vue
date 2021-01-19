<template>
  <div class="wrapper">
    <div class="top top_armor">
      <div class="image armor-1"></div>
      <div class="image2 armor-1"></div>
      <Sets />

      <div class="baza armor">
        <select name="Armor" class="wep">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" selected>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select
        ><input type="number" /><select name="Armor1">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option
          ><option value="0" class="spd" selected>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option></select
        ><input type="number" /><select name="Armor2">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" selected>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option></select
        ><input type="number" /><select name="Armor3">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" selected>C.DMG </option></select
        ><input type="number" /><select name="Armor4">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="resist" selected>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option></select
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
