<template>
  <div  class="wrapper">
    <div class="top top_earing">
      <div class="image earing-1"></div>
      <div class="image2 earing-1"></div>

      <div class="earing">
        <select name="Earing">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum" disabled>HP+ </option
          ><option value="0" class="def_sum" disabled>DEF+ </option
          ><option value="0" class="cDmg" selected>C.DMG </option></select
        ><input type="number" /><select name="Earing1">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum" disabled>HP+ </option
          ><option value="0" class="def_sum" disabled>DEF+ </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist" selected>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option></select
        ><input type="number" /><select name="Earing2">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum" disabled>HP+ </option
          ><option value="0" class="def_sum" disabled>DEF+ </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" selected>ACC </option></select
        ><input type="number" /><select name="Earing3">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum" disabled>HP+ </option
          ><option value="0" class="def_sum" selected>DEF+ </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option></select
        ><input type="number" /><select name="Earing4">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum" selected>HP+ </option
          ><option value="0" class="def_sum" disabled>DEF+ </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist" disabled>RESIST </option
          ><option value="0" class="acc" disabled>ACC </option></select
        ><input type="number" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Earing",
};
</script>

<style lang="scss">
.top_earing {
  border: solid 1px gray;
}
</style>
