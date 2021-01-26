<template>
  <div class="wrapper">
    <div class="stats" @input="mainCalc">
      <div class="start startHp">
        <input v-model="$store.state.options[109]" type="number" class="stats_input startHp_input" placeholder="Start HP" /><output class="stats_output startHp_output">+{{ bonusHp }}</output
        ><span>{{ $store.state.lang.hp }}-</span>
        <p>{{ +$store.state.options[109] + +bonusHp }}</p>
      </div>

      <div class="start startAtk">
        <input v-model="$store.state.options[110]" type="number" class="stats_input" placeholder="Start ATK" /><output class="stats_output">+{{ bonusAtk }}</output
        ><span>{{ $store.state.lang.atk }}-</span>
        <p>{{ +$store.state.options[110] + +bonusAtk }}</p>
      </div>

      <div class="start startDef">
        <input v-model="$store.state.options[111]" type="number" class="stats_input" placeholder="Start DEF" /><output class="stats_output">+{{ bonusDef }}</output
        ><span>{{ $store.state.lang.def }}-</span>
        <p>{{ +$store.state.options[111] + +bonusDef }}</p>
      </div>

      <div class="start startSpeed">
        <input v-model="$store.state.options[112]" type="number" class="stats_input" placeholder="Start SPD" /><output class="stats_output">+{{ bonusSpd }}</output
        ><span>{{ $store.state.lang.spd }}-</span>
        <p>{{ +$store.state.options[112] + +bonusSpd }}</p>
      </div>

      <div class="start startCrate">
        <input v-model="$store.state.options[113]" type="number" class="stats_input" placeholder="Start C.Rate" /><output class="stats_output">+{{ bonusCrate }}%</output><span>{{ $store.state.lang.minCritRate }}-</span>
        <p>{{ +$store.state.options[113] + +bonusCrate }}%</p>
      </div>

      <div class="start startCdmg">
        <input v-model="$store.state.options[114]" type="number" class="stats_input" placeholder="Start C.Dmg" /><output class="stats_output">+{{ bonusCdmg }}%</output><span>{{ $store.state.lang.minCritDamage }}-</span>
        <p>{{ +$store.state.options[114] + +bonusCdmg }}%</p>
      </div>

      <div class="start startResist">
        <input v-model="$store.state.options[115]" type="number" class="stats_input" placeholder="Start RES" /><output class="stats_output">+{{ bonusResist }}</output
        ><span>{{ $store.state.lang.resMin }}-</span>
        <p>{{ +$store.state.options[115] + +bonusResist }}</p>
      </div>

      <div class="start startAcc">
        <input v-model="$store.state.options[116]" type="number" class="stats_input" placeholder="Start ACC" /><output class="stats_output">+{{ bonusAcc }}</output
        ><span>{{ $store.state.lang.acc }}-</span>
        <p>{{ +$store.state.options[116] + +bonusAcc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainStatus",
  data() {
    return {
      bonusHp: 0,
      bonusAtk: 0,
      bonusDef: 0,
      bonusSpd: 0,
      bonusCrate: 0,
      bonusCdmg: 0,
      bonusResist: 0,
      bonusAcc: 0,
    };
  },
  methods: {
    mainCalc() {
      let options = this.$store.state.options;
      let hp_sum = options.filter((item, i, arr) => arr[i - 1] === "hp_sum").reduce((a, b) => +a + +b);
      let hp_100 = options.filter((item, i, arr) => arr[i - 1] === "hp_100").reduce((a, b) => +a + +b);
      let atk_sum = options.filter((item, i, arr) => arr[i - 1] === "atk_sum").reduce((a, b) => +a + +b);
      let atk_100 = options.filter((item, i, arr) => arr[i - 1] === "atk_100").reduce((a, b) => +a + +b);
      let def_sum = options.filter((item, i, arr) => arr[i - 1] === "def_sum").reduce((a, b) => +a + +b);
      let spd = options.filter((item, i, arr) => arr[i - 1] === "spd").reduce((a, b) => +a + +b);
      let cRate = options.filter((item, i, arr) => arr[i - 1] === "cRate").reduce((a, b) => +a + +b);
      let cDmg = options.filter((item, i, arr) => arr[i - 1] === "cDmg").reduce((a, b) => +a + +b);
      let resist = options.filter((item, i, arr) => arr[i - 1] === "resist").reduce((a, b) => +a + +b);
      let acc = options.filter((item, i, arr) => arr[i - 1] === "acc").reduce((a, b) => +a + +b);
      let set = options[107] === "1.15" ? 1.15 : 1;

      console.log(hp_sum, set, acc);
    },
  },
};
</script>

<style lang="scss">
.stats {
  font-size: 5vh;
  display: flex;
  flex-wrap: wrap;
  height: 80%;
}
.start {
  min-width: 100%;
  input {
    width: 25%;
    padding: 0;
    height: 4vh;
  }
}
.stats p {
  display: inline-block;
}
</style>
