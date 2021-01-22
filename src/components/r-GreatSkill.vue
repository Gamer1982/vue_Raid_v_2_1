<template>
  <div class="wrapper">
    <div class="greatSkill">
      <h2>{{ $store.state.lang.masteries }}</h2>
      <div class="masteries1">
        <div class="masteries1_box">
          <div class="d16_1">
            <div>
              <select>
                <option value="0">{{ $store.state.lang.skill }} </option
                ><option value="75" class="atk_sum">{{ $store.state.lang.atk }} 75 </option
                ><option value="5" class="cRate">{{ $store.state.lang.cRate }} 5% </option
                ><option value="75" class="def_sum">{{ $store.state.lang.def }} 75 </option
                ><option value="10" class="resist">{{ $store.state.lang.resMin }} 10 </option></select
              >
            </div>
            <div>
              <select>
                <option value="0">{{ $store.state.lang.skill }} </option
                ><option value="75" class="def_sum">{{ $store.state.lang.def }} 75 </option
                ><option value="10" class="resist">{{ $store.state.lang.resMin }} 10 </option
                ><option value="810" class="hp_sum">M.HP 810 </option
                ><option value="10" class="acc">{{ $store.state.lang.acc }} 10 </option></select
              >
            </div>
          </div>
          <div class="d16">
            <select>
              <option value="0">{{ $store.state.lang.skill }} </option
              ><option value="10" class="cDmg">{{ $store.state.lang.cDmg }} 10% </option></select
            >
          </div>
          <div class="d16">
            <select>
              <option value="0">{{ $store.state.lang.skill }} </option
              ><option value="0.15" class="set_">SET +15% </option></select
            >
          </div>
          <div class="d16">
            <select>
              <option value="0">{{ $store.state.lang.skill }} </option
              ><option value="20" class="cDmg">{{ $store.state.lang.cDmg }} 20% </option
              ><option value="200" class="def_sum">{{ $store.state.lang.def }} 200 </option
              ><option value="50" class="resist">{{ $store.state.lang.res }} 50 </option
              ><option value="3000" class="hp_sum">M.HP 3000 </option
              ><option value="50" class="acc">{{ $store.state.lang.acc }} 50 </option></select
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreatSkill",
};
</script>

<style lang="scss">
.greatSkill {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.masteries1_box {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.d16,
.d16_1 {
  min-width: 24%;
  max-width: 24%;
  //border: 1px solid royalblue;
  select {
    width: 98%;
    border-radius: 40%;
  }
}
</style>
