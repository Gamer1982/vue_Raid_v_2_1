<template>
  <div class="wrapper">
    <div class="top top_earing" :class="{ active: isActive }">
      <div class="image earing-1" @click="isActive = !isActive"></div>
      <div class="image2 earing-1"></div>

      <div class="earing" @change="disab">
        <select class="atr" v-model="$store.state.options[76]" @change="$store.state.options[77] = ''"  name="Earing">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option></select
        ><input v-model="$store.state.options[77]" type="number" /><select v-model="$store.state.options[78]" @change="$store.state.options[79] = ''"  name="Earing1">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option></select
        ><input v-model="$store.state.options[79]" type="number" /><select v-model="$store.state.options[80]" @change="$store.state.options[81] = ''"  name="Earing2">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option></select
        ><input v-model="$store.state.options[81]" type="number" /><select v-model="$store.state.options[82]" @change="$store.state.options[83] = ''"  name="Earing3">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option></select
        ><input v-model="$store.state.options[83]" type="number" /><select v-model="$store.state.options[84]" @change="$store.state.options[85] = ''"  name="Earing4">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option></select
        ><input v-model="$store.state.options[85]" type="number" />
      </div>
    </div>
  </div>
</template>

<script>
import selectDisabled from "../assets/js/disabled";

export default {
  name: "Earing",
  data() {
    return {
      index: 75,
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
  },  updated() {
    selectDisabled(this);
  },
};
</script>

<style lang="scss">
.top_earing {
  border: solid 1px gray;
	z-index: 12;
}
</style>
