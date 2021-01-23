<template>
  <div class="wrapper">
    <div class="arena">
      <h2>{{ $store.state.lang.arena }}</h2>

      <div class="box">
        <select v-model="$store.state.options[103]" name="HP">
          <option value="1" class="hp_100 def_100 atk_100">+1% </option
          ><option value="2" class="hp_100 def_100 atk_100">+2% </option
          ><option value="3" class="hp_100 def_100 atk_100">+3% </option
          ><option value="4" class="hp_100 def_100 atk_100">+4% </option
          ><option value="6" class="hp_100 def_100 atk_100">+6% </option
          ><option value="8" class="hp_100 def_100 atk_100">+8% </option
          ><option value="10" class="hp_100 def_100 atk_100">+10% </option
          ><option value="12" class="hp_100 def_100 atk_100">+12% </option
          ><option value="14" class="hp_100 def_100 atk_100">+14% </option
          ><option value="16" class="hp_100 def_100 atk_100">+16% </option
          ><option value="18" class="hp_100 def_100 atk_100">+18% </option
          ><option value="20" class="hp_100 def_100 atk_100">+20% </option
          ><option value="25" class="hp_100 def_100 atk_100">+25% </option></select
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Arena",
};
</script>

<style lang="scss">
.arena {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  select {
    width: 80%;
  }
}

.arena .box {
  min-width: 90%;
  margin: 5%;
}
</style>
