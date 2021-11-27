<template>
  <div class="wrapper">
    <div class="a4">
      <div class="a4_main power">
        <div class="power_person">
          <h2>{{ $store.state.lang.rank }}Rank</h2>
          <select v-model="$store.state.options[117]" class="" name="" id="">
            <option class="gold" value="3">legend</option>
            <option class="purpur" value="2">epic</option>
            <option class="blue" value="1">rar</option>
            <option class="green" value="0">top</option>
            <option class="white" value="0">low</option>
          </select>
        </div>
        <div class="power_empower">
          <h2>{{ $store.state.lang.empower }}</h2>
          <select v-model="$store.state.options[118]" name="" id="">
            <option value="0">0</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
          </select>
        </div>
        <div class="power_faction">
          <h2>{{ $store.state.lang.faction }}</h2>
          <select v-model="$store.state.options[119]" name="" id="">
            <option value="0">0</option>
            <option value="2">2/10</option>
            <option value="4">4/10</option>
            <option value="6">6/10</option>
            <option value="8">8/10</option>
            <option value="10">10/10</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.a4 .power {
  display: flex;
  text-align: center;
  gap: 5%;
}
.power_person {
  width: 20%;
  margin-right: 40%;
  margin-left: 5%;
}
.power_person select {
  //color: rgb(172, 113, 36);
}
.power_dabl {
  width: 20%;
}
.gold {
  color: gold;
}
.purpur {
  color: purple;
}
.blue {
  color: blue;
}
.green {
  color: green;
}
.white {
}
</style>