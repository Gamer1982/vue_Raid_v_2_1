<template>
  <div class="wrapper">
    <div class="top top_earing">
      <div class="image earing-1"></div>
      <div class="image2 earing-1"></div>

      <div class="earing">
        <select name="Earing">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum" disabled>{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum" disabled>{{ $store.state.lang.def }}+ </option
          ><option value="0" class="cDmg" selected>{{ $store.state.lang.cDmg }} </option></select
        ><input type="number" /><select name="Earing1">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum" disabled>{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum" disabled>{{ $store.state.lang.def }}+ </option
          ><option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option
          ><option value="0" class="resist" selected>{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option></select
        ><input type="number" /><select name="Earing2">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum" disabled>{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum" disabled>{{ $store.state.lang.def }}+ </option
          ><option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option
          ><option value="0" class="resist" disabled>{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" selected>{{ $store.state.lang.acc }} </option></select
        ><input type="number" /><select name="Earing3">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum" disabled>{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum" selected>{{ $store.state.lang.def }}+ </option
          ><option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option
          ><option value="0" class="resist" disabled>{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option></select
        ><input type="number" /><select name="Earing4">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum" selected>{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum" disabled>{{ $store.state.lang.def }}+ </option
          ><option value="0" class="cDmg" disabled>{{ $store.state.lang.cDmg }} </option
          ><option value="0" class="resist" disabled>{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" disabled>{{ $store.state.lang.acc }} </option></select
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
