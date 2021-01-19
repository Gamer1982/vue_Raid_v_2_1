<template>
  <div class="wrapper">
    <div class="top top_helmet">
      <div class="image helmet-1"></div>
      <div class="image2 helmet-1"></div>
  <Sets />

      <div class="baza helmet">
        <select name="Helmet" class="wep">
          <option value="0" class="hp_sum">HP+ </option></select
        ><input type="number" /><select name="Helmet1">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" selected>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select
        ><input type="number" /><select name="Helmet2">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" selected>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select
        ><input type="number" /><select name="Helmet3">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" selected>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select
        ><input type="number" /><select name="Helmet4">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" selected>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select
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
