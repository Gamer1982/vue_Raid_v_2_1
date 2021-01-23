<template>
  <div class="wrapper">
    <div class="top top_earing">
      <div class="image earing-1"></div>
      <div class="image2 earing-1"></div>

      <div class="earing" @change="disab">
        <select v-model="$store.state.options[76]" name="Earing">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option></select
        ><input v-model="$store.state.options[77]" type="number" /><select v-model="$store.state.options[78]" name="Earing1">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option></select
        ><input v-model="$store.state.options[79]" type="number" /><select v-model="$store.state.options[80]" name="Earing2">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option></select
        ><input v-model="$store.state.options[81]" type="number" /><select v-model="$store.state.options[82]" name="Earing3">
          <option value="atk_sum" :disabled="isAtk_sum" class="atk_sum">{{ $store.state.lang.atk }}+ </option
          ><option value="hp_sum" :disabled="isHp_sum" class="hp_sum">{{ $store.state.lang.hp }}+ </option
          ><option value="def_sum" :disabled="isDef_sum" class="def_sum">{{ $store.state.lang.def }}+ </option
          ><option value="cDmg" :disabled="isCDmg" class="cDmg">{{ $store.state.lang.cDmg }} </option
          ><option value="resist" :disabled="isResist" class="resist">{{ $store.state.lang.res }} </option
          ><option value="acc" :disabled="isAcc" class="acc">{{ $store.state.lang.acc }} </option></select
        ><input v-model="$store.state.options[83]" type="number" /><select v-model="$store.state.options[84]" name="Earing4">
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
    };
  },
  methods: {
    disab() {
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("acc") ? (this.isAcc = true) : (this.isAcc = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("atk_sum") ? (this.isAtk_sum = true) : (this.isAtk_sum = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("atk_100") ? (this.isAtk_100 = true) : (this.isAtk_100 = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("def_sum") ? (this.isDef_sum = true) : (this.isDef_sum = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("def_100") ? (this.isDef_100 = true) : (this.isDef_100 = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("hp_sum") ? (this.isHp_sum = true) : (this.isHp_sum = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("hp_100") ? (this.isHp_100 = true) : (this.isHp_100 = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("resist") ? (this.isResist = true) : (this.isResist = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("cRate") ? (this.isCRate = true) : (this.isCRate = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("cDmg") ? (this.isCDmg = true) : (this.isCDmg = false);
      this.$store.state.options.slice(this.index + 1, this.index + 10).includes("spd") ? (this.isSpd = true) : (this.isSpd = false);
    },
  },
};
</script>

<style lang="scss">
.top_earing {
  border: solid 1px gray;
}
</style>
