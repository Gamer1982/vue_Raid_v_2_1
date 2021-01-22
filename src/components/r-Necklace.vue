<template>
  <div class="wrapper">
    <div class="top top_necklace">
      <div class="image necklace-1"></div>
      <div class="image2 necklace-1"></div>

      <div class="necklace">
        <select name="Necklace">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="resist">{{ $store.state.lang.res }} </option
          ><option value="0" class="acc" selected>{{ $store.state.lang.acc }} </option></select
        ><input type="number" /><select name="Necklace1">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="spd" selected>{{ $store.state.lang.spd }} </option
          ><option value="0" class="atk_100" disabled>{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100" disabled>{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100" disabled>{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Necklace2">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><select value="0" class="hp_sum"
            >{{
              $store.state.lang.hp
            }}+ </select
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option
          ><option value="0" class="atk_100" selected>{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100" disabled>{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100" disabled>{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Necklace3">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="0" class="spd" disabled>{{ $store.state.lang.spd }} </option
          ><option value="0" class="atk_100" disabled>{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100" selected>{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100" disabled>{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Necklace4">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><select value="0" class="spd" disabled
            >{{
              $store.state.lang.spd
            }} </select
          ><option value="0" class="atk_100" disabled>{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100" selected>{{ $store.state.lang.def }}% </option></select
        ><input type="number" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Necklace",
};
</script>

<style lang="scss">
.top_necklace {
  border: solid 1px gray;
}
</style>
