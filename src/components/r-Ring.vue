<template>
  <div>
    <div class="top top_ring">
      <div class="image ring-1"></div>
      <div class="image2 ring-1"></div>
      <br />
      <div class="ring">
        <select name="Ring">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum" disabled>HP+ </option
          ><option value="0" class="def_sum" selected>DEF+ </option></select
        ><input type="number" /><br /><br /><select name="Ring1">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum" disabled>HP+ </option
          ><option value="0" class="def_sum" disabled>DEF+ </option
          ><option value="0" class="atk_100" disabled>ATK% </option
          ><option value="0" class="hp_100" disabled>HP% </option
          ><option value="0" class="def_100" selected>DEF% </option></select
        ><input type="number" /><br /><select name="Ring2">
          <option value="0" class="atk_sum">ATK+ </option
          ><select value="0" class="hp_sum" disabled
            >HP+ </select
          ><option value="0" class="def_sum" disabled>DEF+ </option
          ><option value="0" class="atk_100" disabled>ATK% </option
          ><option value="0" class="hp_100" selected>HP% </option
          ><option value="0" class="def_100" disabled>DEF% </option></select
        ><input type="number" /><br /><select name="Ring3">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum" disabled>HP+ </option
          ><option value="0" class="def_sum" disabled>DEF+ </option
          ><option value="0" class="atk_100" selected>ATK% </option
          ><option value="0" class="hp_100" disabled>HP% </option
          ><option value="0" class="def_100" disabled>DEF% </option></select
        ><input type="number" /><br /><select name="Ring4">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="hp_sum" selected>HP+ </option
          ><option value="0" class="def_sum" disabled>DEF+ </option
          ><option value="0" class="atk_100" disabled>ATK% </option
          ><option value="0" class="hp_100" disabled>HP% </option
          ><option value="0" class="def_100" disabled>DEF% </option></select
        ><input type="number" /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "Ring",
};
</script>

<style lang="scss"></style>
