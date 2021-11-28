<template>
  <div class="wrapper">
    <div class="a4">
      <div class="a4_main power">
        <div class="power_person">
          <h2>{{ $store.state.lang.rank }}</h2>
          <select
            v-model="$store.state.options[117]"
            :class="clas"
            name=""
            id=""
          >
            <option class="gold" value="3">Legendary</option>
            <option class="purpur" value="2">Epic</option>
            <option class="blue" value="1">Rare</option>
            <option class="green" value="0">Uncommon</option>
            <option class="white" value="-1">Common</option>
          </select>
        </div>
        <div v-if="+$store.state.options[117] > 0" class="power_faction">
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
        <div v-if="$store.state.options[117] == 3" class="power_empower">
          <h2>{{ $store.state.lang.empower }}</h2>
          <select v-model="$store.state.options[118]" name="" id="">
            <option value="0">0</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
            <option value="4">+4</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clas: `gold`,
    };
  },
  beforeMount() {
    this.clas = this.$store.state.options[117];
  },
  beforeUpdate() {
    switch (this.$store.state.options[117]) {
      case "3":
        this.clas = "gold";
        break;
      case "2":
        this.clas = "purpur";
        break;
      case "1":
        this.clas = "blue";
        break;
      case "0":
        this.clas = "green";
        break;
      case "-1":
        this.clas = "white";
        break;
    }
  },
};
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
  background: orange;
}
.purpur {
  background: purple;
}
.blue {
  background: blue;
}
.green {
  background: green;
}
.white {
  background: grey;
}
</style>