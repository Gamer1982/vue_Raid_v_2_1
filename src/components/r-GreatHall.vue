<template>
  <div class="wrapper">
    <div class="greatHall">
      <div class="hall">
        <h2>{{ $store.state.lang.greatHall }}</h2>

        <div class="box">
          <p>{{ $store.state.lang.hp }}</p>
          <select v-model="$store.state.options[97]" name="HP">
            <option value="0" class="hp_100">0% </option
            ><option value="2" class="hp_100">2% </option
            ><option value="3" class="hp_100">3% </option
            ><option value="4" class="hp_100">4% </option
            ><option value="6" class="hp_100">6% </option
            ><option value="8" class="hp_100">8% </option
            ><option value="10" class="hp_100">10% </option
            ><option value="12" class="hp_100">12% </option
            ><option value="14" class="hp_100">14% </option
            ><option value="17" class="hp_100">17% </option
            ><option value="20" class="hp_100">20% </option></select
          >
        </div>
        <div class="box">
          <p>{{ $store.state.lang.atk }}</p>
          <select v-model="$store.state.options[98]" name="ATK">
            <option value="0" class="atk_100">0% </option
            ><option value="2" class="atk_100">2% </option
            ><option value="3" class="atk_100">3% </option
            ><option value="4" class="atk_100">4% </option
            ><option value="6" class="atk_100">6% </option
            ><option value="8" class="atk_100">8% </option
            ><option value="10" class="atk_100">10% </option
            ><option value="12" class="atk_100">12% </option
            ><option value="14" class="atk_100">14% </option
            ><option value="17" class="atk_100">17% </option
            ><option value="20" class="atk_100">20% </option></select
          >
        </div>
        <div class="box">
          <p>{{ $store.state.lang.def }}</p>
          <select v-model="$store.state.options[99]" name="DEF">
            <option value="0" class="def_100">0% </option
            ><option value="2" class="def_100">2% </option
            ><option value="3" class="def_100">3% </option
            ><option value="4" class="def_100">4% </option
            ><option value="6" class="def_100">6% </option
            ><option value="8" class="def_100">8% </option
            ><option value="10" class="def_100">10% </option
            ><option value="12" class="def_100">12% </option
            ><option value="14" class="def_100">14% </option
            ><option value="17" class="def_100">17% </option
            ><option value="20" class="def_100">20% </option></select
          >
        </div>
        <div class="box">
          <p>{{ $store.state.lang.cDmg }}</p>
          <select v-model="$store.state.options[100]" name="C.DMG">
            <option value="0" class="cDmg">0% </option
            ><option value="2" class="cDmg">2% </option
            ><option value="4" class="cDmg">4% </option
            ><option value="6" class="cDmg">6% </option
            ><option value="8" class="cDmg">8% </option
            ><option value="10" class="cDmg">10% </option
            ><option value="12" class="cDmg">12% </option
            ><option value="15" class="cDmg">15% </option
            ><option value="18" class="cDmg">18% </option
            ><option value="21" class="cDmg">21% </option
            ><option value="25" class="cDmg">25% </option></select
          >
        </div>
        <div class="box">
          <p>{{ $store.state.lang.resMin }}</p>
          <select v-model="$store.state.options[101]" name="RESIST">
            <option value="0" class="resist">0 </option
            ><option value="5" class="resist">5 </option
            ><option value="10" class="resist">10 </option
            ><option value="15" class="resist">15 </option
            ><option value="20" class="resist">20 </option
            ><option value="30" class="resist">30 </option
            ><option value="40" class="resist">40 </option
            ><option value="50" class="resist">50 </option
            ><option value="60" class="resist">60 </option
            ><option value="70" class="resist">70 </option
            ><option value="80" class="resist">80 </option></select
          >
        </div>
        <div class="box">
          <p>{{ $store.state.lang.acc }}</p>
          <select v-model="$store.state.options[102]" name="ACC">
            <option value="0" class="acc">0 </option
            ><option value="5" class="acc">5 </option
            ><option value="10" class="acc">10 </option
            ><option value="15" class="acc">15 </option
            ><option value="20" class="acc">20 </option
            ><option value="30" class="acc">30 </option
            ><option value="40" class="acc">40 </option
            ><option value="50" class="acc">50 </option
            ><option value="60" class="acc">60 </option
            ><option value="70" class="acc">70 </option
            ><option value="80" class="acc">80 </option></select
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreatHall",
};
</script>

<style lang="scss">
.hall {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hall .box {
  width: 14%;
  margin: 0.5%;
  select {
    width: 95%;
  }
}
</style>
