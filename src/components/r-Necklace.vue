<template>
  <div class="wrapper">
    <div class="top top_necklace" :class="{ active: isActive }">
      <div class="image necklace-1" @click="isActive = !isActive"></div>
      <div class="image2 necklace-1"></div>

      <div class="necklace" @change="disab">
        <select class="atr" v-model="$store.state.options[86]" @change="$store.state.options[87] = ''" name="Necklace">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option></select
        ><input v-model="$store.state.options[87]" type="number" /><select v-model="$store.state.options[88]" @change="$store.state.options[89] = ''" name="Necklace1">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input v-model="$store.state.options[89]" type="number" /><select v-model="$store.state.options[90]" @change="$store.state.options[91] = ''" name="Necklace2">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input v-model="$store.state.options[91]" type="number" /><select v-model="$store.state.options[92]" @change="$store.state.options[93] = ''" name="Necklace3">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input v-model="$store.state.options[93]" type="number" /><select v-model="$store.state.options[94]" @change="$store.state.options[95] = ''" name="Necklace4">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="spd" :disabled="isSpd" class="spd">{{ $store.state.lang.spd }} </option
          ><option value="atk_100" :disabled="isAtk_100" class="atk_100">{{ $store.state.lang.atk }}% </option
          ><option value="hp_100" :disabled="isHp_100" class="hp_100">{{ $store.state.lang.hp }}% </option
          ><option value="def_100" :disabled="isDef_100" class="def_100">{{ $store.state.lang.def }}% </option></select
        ><input v-model="$store.state.options[95]" type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import selectDisabled from "../assets/js/disabled";

export default {
  name: "Necklace",
  data() {
    return {
      index: 85,
      isAcc: false,
      isAtk_sum: false,
      isAtk_100: false,
      isDef_sum: false,
      isDef_100: false,
      isHp_sum: false,
      isHp_100: false,
      isResist: false,
      isCRate: false,
      isCDmg: false,
      isSpd: false,
      isActive: false,
    };
  },
  methods: {
    disab(e) {
      if (e.target.length) {
        selectDisabled(this);
        e.target.nextElementSibling.focus();
      }
    },
  },
  updated() {
    selectDisabled(this);
  },
};
</script>

<style lang="scss">
.top_necklace {
  border: solid 1px gray;
  z-index: 11;
}
</style>
