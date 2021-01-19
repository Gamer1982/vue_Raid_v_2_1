<template>
  <div class="wrapper">
    <div class="top top_weapon">
      <div class="image weapon-1"></div>
      <div class="image2 weapon-1"></div>
      <Sets />

      <div class="baza weapon">
        <select name="Weapon" class="wep">
          <option value="0" class="atk_sum">ATK+ </option></select
        ><input type="number" /><select name="Weapon1">
          <option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><select value="0" class="cRate" disabled
            >C.RATE </select
          ><option value="0" class="cDmg" selected>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option></select
        ><input type="number" /><select name="Weapon2">
          <option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" selected>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option></select
        ><input type="number" /><select name="Weapon3">
          <option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="spd" selected>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option></select
        ><input type="number" /><select name="Weapon4">
          <option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" selected>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option></select
        ><input type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import Sets from "./r-Sets";

export default {
  name: "Weapon",
  components: { Sets },
};
</script>

<style lang="scss">
.top_weapon {
  border: solid 0.2em gray;
}
</style>
