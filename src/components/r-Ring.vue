<template>
  <div class="wrapper">
    <div class="top top_ring">
      <div class="image ring-1"></div>
      <div class="image2 ring-1"></div>

      <div class="ring">
        <select name="Ring">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum" disabled>{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum" selected>{{ $store.state.lang.def }}+ </option></select
        ><input type="number" /><select name="Ring1">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum" disabled>{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum" disabled>{{ $store.state.lang.def }}+ </option
          ><option value="0" class="atk_100" disabled>{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100" disabled>{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100" selected>{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Ring2">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><select value="0" class="hp_sum" disabled
            >{{
              $store.state.lang.hp
            }}+ </select
          ><option value="0" class="def_sum" disabled>{{ $store.state.lang.def }}+ </option
          ><option value="0" class="atk_100" disabled>{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100" selected>{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100" disabled>{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Ring3">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum" disabled>{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum" disabled>{{ $store.state.lang.def }}+ </option
          ><option value="0" class="atk_100" selected>{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100" disabled>{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100" disabled>{{ $store.state.lang.def }}% </option></select
        ><input type="number" /><select name="Ring4">
          <option value="0" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="0" class="hp_sum" selected>{{ $store.state.lang.hp }}+ </option
          ><option value="0" class="def_sum" disabled>{{ $store.state.lang.def }}+ </option
          ><option value="0" class="atk_100" disabled>{{ $store.state.lang.atk }}% </option
          ><option value="0" class="hp_100" disabled>{{ $store.state.lang.hp }}% </option
          ><option value="0" class="def_100" disabled>{{ $store.state.lang.def }}% </option></select
        ><input type="number" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ring",
};
</script>

<style lang="scss">
.top_ring {
  border: solid 1px gray;
}
</style>
