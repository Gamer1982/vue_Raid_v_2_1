<template>
  <div class="wrapper">
    <div class="greatSkill">
      <h2>{{ $store.state.lang.masteries }}</h2>
      <div class="masteries1">
        <div class="masteries1_box">
          <div class="d16_1">
            <div>
              <select v-model="$store.state.options[104]">
                <option value="0">{{ $store.state.lang.skill }} </option
                ><option value="1" class="atk_sum">{{ $store.state.lang.atk }} 75 </option
                ><option value="2" class="cRate">{{ $store.state.lang.cRate }} 5% </option
                ><option value="3" class="def_sum">{{ $store.state.lang.def }} 75 </option
                ><option value="4" class="resist">{{ $store.state.lang.resMin }} 10 </option></select
              >
            </div>
            <div>
              <select v-model="$store.state.options[105]">
                <option value="0">{{ $store.state.lang.skill }} </option
                ><option value="1" class="def_sum">{{ $store.state.lang.def }} 75 </option
                ><option value="2" class="resist">{{ $store.state.lang.resMin }} 10 </option
                ><option value="3" class="hp_sum">{{ $store.state.lang.maxHp }} 810 </option
                ><option value="4" class="acc">{{ $store.state.lang.acc }} 10 </option></select
              >
            </div>
          </div>
          <div class="d16">
            <select v-model="$store.state.options[106]">
              <option value="0">{{ $store.state.lang.skill }} </option
              ><option value="1" class="cDmg">{{ $store.state.lang.cDmg }} 10% </option></select
            >
          </div>
          <div class="d16">
            <select v-model="$store.state.options[107]">
              <option value="0">{{ $store.state.lang.skill }} </option
              ><option value="1.15" class="set_">{{ $store.state.lang.set_15 }} </option></select
            >
          </div>
          <div class="d16">
            <select v-model="$store.state.options[108]">
              <option value="0">{{ $store.state.lang.skill }} </option
              ><option value="1" class="cDmg">{{ $store.state.lang.cDmg }} 20% </option
              ><option value="2" class="def_sum">{{ $store.state.lang.def }} 200 </option
              ><option value="3" class="resist">{{ $store.state.lang.res }} 50 </option
              ><option value="4" class="hp_sum">{{ $store.state.lang.maxHp }} 3000 </option
              ><option value="5" class="acc">{{ $store.state.lang.acc }} 50 </option></select
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
    margin-bottom: 1vh;
  }
}
</style>
