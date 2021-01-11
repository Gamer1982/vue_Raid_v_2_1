<template>
  <div>
    <div class="top top_necklace">
      <div class="image necklace-1"></div>
      <div class="image2 necklace-1"></div>
      <br />
      <div class="necklace">
        <select name="Necklace">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" selected>ACC </option></select
        ><input type="number" /><br /><br /><select name="Necklace1">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" selected>SPD </option
          ><option value="0" class="atk_100" disabled>ATK% </option
          ><option value="0" class="hp_100" disabled>HP% </option
          ><option value="0" class="def_100" disabled>DEF% </option></select
        ><input type="number" /><br /><select name="Necklace2">
          <option value="0" class="atk_sum">ATK+ </option
          ><select value="0" class="hp_sum"
            >HP+ </select
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="atk_100" selected>ATK% </option
          ><option value="0" class="hp_100" disabled>HP% </option
          ><option value="0" class="def_100" disabled>DEF% </option></select
        ><input type="number" /><br /><select name="Necklace3">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="atk_100" disabled>ATK% </option
          ><option value="0" class="hp_100" selected>HP% </option
          ><option value="0" class="def_100" disabled>DEF% </option></select
        ><input type="number" /><br /><select name="Necklace4">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum">HP+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><select value="0" class="spd" disabled
            >SPD </select
          ><option value="0" class="atk_100" disabled>ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100" selected>DEF% </option></select
        ><input type="number" /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "Necklace",
};
</script>

<style lang="scss"></style>
