<template>
  <div class="wrapper">
    <div class="stats">
      <div class="start startHp">
        <div class="start__stats">
          <input v-model="$store.state.options[109]" type="number" class="stats_input startHp_input" placeholder="Start HP" /><output class="stats_output startHp_output">+{{ bonusHp }}</output>
        </div>
        <div class="start__res">
          <span>{{ $store.state.lang.hp }}-</span>
          <p>{{ +$store.state.options[109] + +bonusHp }}</p>
        </div>
      </div>

      <div class="start startAtk">
        <div class="start__stats">
          <input v-model="$store.state.options[110]" type="number" class="stats_input" placeholder="Start ATK" /><output class="stats_output">+{{ bonusAtk }}</output>
        </div>
        <div class="start__res">
          <span>{{ $store.state.lang.atk }}-</span>
          <p>{{ +$store.state.options[110] + +bonusAtk }}</p>
        </div>
      </div>

      <div class="start startDef">
        <div class="start__stats">
          <input v-model="$store.state.options[111]" type="number" class="stats_input" placeholder="Start DEF" /><output class="stats_output">+{{ bonusDef }}</output>
        </div>
        <div class="start__res">
          <span>{{ $store.state.lang.def }}-</span>
          <p>{{ +$store.state.options[111] + +bonusDef }}</p>
        </div>
      </div>

      <div class="start startSpeed">
        <div class="start__stats">
          <input v-model="$store.state.options[112]" type="number" class="stats_input" placeholder="Start SPD" /><output class="stats_output">+{{ bonusSpd }}</output>
        </div>
        <div class="start__res">
          <span>{{ $store.state.lang.spd }}-</span>
          <p>
            {{ Math.round((+$store.state.options[112] + +bonusSpd) * 100) / 100 }}
          </p>
        </div>
      </div>

      <div class="start startCrate">
        <div class="start__stats">
          <input v-model="$store.state.options[113]" type="number" class="stats_input" placeholder="Start C.Rate" /><output class="stats_output">+{{ bonusCrate }}%</output>
        </div>
        <div class="start__res">
          <span>{{ $store.state.lang.minCritRate }}-</span>
          <p>{{ +$store.state.options[113] + +bonusCrate }}%</p>
        </div>
      </div>

      <div class="start startCdmg">
        <div class="start__stats">
          <input v-model="$store.state.options[114]" type="number" class="stats_input" placeholder="Start C.Dmg" /><output class="stats_output">+{{ bonusCdmg }}%</output>
        </div>
        <div class="start__res">
          <span>{{ $store.state.lang.minCritDamage }}-</span>
          <p>{{ +$store.state.options[114] + +bonusCdmg }}%</p>
        </div>
      </div>

      <div class="start startResist">
        <div class="start__stats">
          <input v-model="$store.state.options[115]" type="number" class="stats_input" placeholder="Start RES" /><output class="stats_output">+{{ bonusResist }}</output>
        </div>
        <div class="start__res">
          <span>{{ $store.state.lang.resMin }}-</span>
          <p>{{ +$store.state.options[115] + +bonusResist }}</p>
        </div>
      </div>

      <div class="start startAcc">
        <div class="start__stats">
          <input v-model="$store.state.options[116]" type="number" class="stats_input" placeholder="Start ACC" /><output class="stats_output">+{{ bonusAcc }}</output>
        </div>
        <div class="start__res">
          <span>{{ $store.state.lang.acc }}-</span>
          <p>{{ +$store.state.options[116] + +bonusAcc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

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
  //============================
  computed: {
    ...mapState(["options"]),
  },
  watch: {
    options() {
      let options = this.$store.state.options;

      let set = [options[0], options[11], options[22], options[33], options[44], options[55]]
        .sort()
        .filter((str) => str.length > 10)
        .filter((item, i, arr) => item === arr[i - 1] || item === arr[i + 1]);

      //========================================Количество одинаковых элементов в массиве set
      function count(str) {
        let names = {};
        set.forEach((item) => {
          names[item] = (names[item] || 0) + 1;
        });
        return names[str];
      }
      //========================================Массив с "0"-ми,для исключения ошибок при расчетах
      let resultSet = ["hp_100", "0", "atk_100", "0", "def_100", "0", "spd_100", "0", "cRate", "0", "cDmg", "0", "resist", "0", "acc", "0"];
      //========================================Добавляем только полные сеты
      for (let i = 0; i < set.length; i += count(set[i])) {
        switch (Math.floor(count(set[i]) / set[i][3])) {
          case 1:
            resultSet.push(set[i].slice(6));
            break;
          case 2:
            resultSet.push(set[i].slice(6));
            resultSet.push(set[i].slice(6));
            break;
          case 3:
            resultSet.push(set[i].slice(6));
            resultSet.push(set[i].slice(6));
            resultSet.push(set[i].slice(6));
            break;
        }
      }
      //==================================Преобразуем в нужную форму
      resultSet = resultSet.join().split(",");
      //==================================Расчеты
      let powerHp = 0;
      let powerAtk = 0;
      let powerDef = 0;
      let powerResist = 0;
      let powerAcc = 0;
      let powerSpd = 0;
      let powerSpdLeg = 0;
      let powerCrateLeg = 0;
      let powerCdmgLeg = 0;
      let powerResistLeg = 0;
      let powerAccLeg = 0;

      switch (options[118]) {
        case "1":
          powerResistLeg = 15;
          powerAccLeg = 15;
          break;
        case "2":
          powerSpdLeg = 10;
          powerResistLeg = 25;
          powerAccLeg = 25;
          break;
        case "3":
          powerSpdLeg = 10;
          powerResistLeg = 45;
          powerAccLeg = 45;
          break;
        case "4":
          powerSpdLeg = 15;
          powerCrateLeg = 10;
          powerCdmgLeg = 30;
          powerResistLeg = 55;
          powerAccLeg = 55;
          break;
      }

      // ==========power--> Усиленние персонажей в патче 4.9
      switch (options[117]) {
        case "3":
          switch (options[119]) {
            case "10":
              powerHp = (+options[109] / 10) * (1 + +options[118]);
              powerAtk = (+options[110] / 10) * (1 + +options[118]);
              powerResist = 30 + powerResistLeg;
              powerAcc = 30 + powerAccLeg;
              powerDef = (+options[111] / 10) * (1 + +options[118]);
              powerSpd = 10 + powerSpdLeg;
              break;
            case "8":
              powerHp = (+options[109] / 10) * (1 + +options[118]);
              powerAtk = (+options[110] / 10) * (1 + +options[118]);
              powerResist = 30 + powerResistLeg;
              powerAcc = 30 + powerAccLeg;
              powerDef = (+options[111] / 10) * (1 + +options[118]);
              powerSpd = powerSpdLeg;
              break;
            case "6":
              powerHp = (+options[109] / 10) * (1 + +options[118]);
              powerAtk = (+options[110] / 10) * (1 + +options[118]);
              powerResist = 30 + powerResistLeg;
              powerAcc = 30 + powerAccLeg;
              powerDef = (+options[111] / 10) * +options[118];
              powerSpd = powerSpdLeg;
              break;
            case "4":
              powerHp = (+options[109] / 10) * (1 + +options[118]);
              powerAtk = (+options[110] / 10) * (1 + +options[118]);
              powerResist = powerResistLeg;
              powerAcc = powerAccLeg;
              powerDef = (+options[111] / 10) * +options[118];
              powerSpd = powerSpdLeg;
              break;
            case "2":
              powerHp = (+options[109] / 10) * (1 + +options[118]);
              powerAtk = (+options[110] / 10) * +options[118];
              powerResist = powerResistLeg;
              powerAcc = powerAccLeg;
              powerDef = (+options[111] / 10) * +options[118];
              powerSpd = powerSpdLeg;
              break;
            case "0":
              powerHp = (+options[109] / 10) * +options[118];
              powerAtk = (+options[110] / 10) * +options[118];
              powerResist = powerResistLeg;
              powerAcc = powerAccLeg;
              powerDef = (+options[111] / 10) * +options[118];
              powerSpd = powerSpdLeg;
              break;
          }

          break;
        case "2":
          switch (options[119]) {
            case "10":
              powerHp = +options[109] / 10;
              powerAtk = +options[110] / 10;
              powerResist = 15;
              powerAcc = 15;
              powerDef = +options[111] / 10;
              powerSpd = 6;
              break;
            case "8":
              powerHp = +options[109] / 10;
              powerAtk = +options[110] / 10;
              powerResist = 15;
              powerAcc = 15;
              powerDef = +options[111] / 10;
              break;
            case "6":
              powerHp = +options[109] / 10;
              powerAtk = +options[110] / 10;
              powerResist = 15;
              powerAcc = 15;
              break;
            case "4":
              powerHp = +options[109] / 10;
              powerAtk = +options[110] / 10;
              break;
            case "2":
              powerHp = +options[109] / 10;
              break;
          }

          break;
        case "1":
          switch (options[119]) {
            case "10":
              powerHp = +options[109] / 10;
              powerAtk = +options[110] / 10;
              powerResist = 7;
              powerAcc = 7;
              powerDef = +options[111] / 10;
              powerSpd = 3;
              break;
            case "8":
              powerHp = +options[109] / 10;
              powerAtk = +options[110] / 10;
              powerResist = 7;
              powerAcc = 7;
              powerDef = +options[111] / 10;
              break;
            case "6":
              powerHp = +options[109] / 10;
              powerAtk = +options[110] / 10;
              powerResist = 7;
              powerAcc = 7;
              break;
            case "4":
              powerHp = +options[109] / 10;
              powerAtk = +options[110] / 10;
              break;
            case "2":
              powerHp = +options[109] / 10;
              break;
          }

          break;
      }

      let bonusSet = options[107] === "1.15" ? 1.15 : 1;
      let hp_sum = options.filter((item, i, arr) => arr[i - 1] === "hp_sum").reduce((a, b) => +a + +b) + (options[105] === "3" ? 810 : 0) + (options[108] === "4" ? 3000 : 0);
      let hp_100 = options.filter((item, i, arr) => arr[i - 1] === "hp_100").reduce((a, b) => +a + +b) + +options[97] + +options[103] + resultSet.filter((item, i, arr) => arr[i - 1] === "hp_100").reduce((a, b) => +a + +b) * bonusSet;
      let atk_sum = options.filter((item, i, arr) => arr[i - 1] === "atk_sum").reduce((a, b) => +a + +b) + (options[104] === "1" ? 75 : 0);
      let atk_100 = options.filter((item, i, arr) => arr[i - 1] === "atk_100").reduce((a, b) => +a + +b) + +options[98] + +options[103] + resultSet.filter((item, i, arr) => arr[i - 1] === "atk_100").reduce((a, b) => +a + +b) * bonusSet;
      let def_sum = options.filter((item, i, arr) => arr[i - 1] === "def_sum").reduce((a, b) => +a + +b) + (options[104] === "3" ? 75 : 0) + (options[105] === "1" ? 75 : 0) + (options[108] === "2" ? 200 : 0);
      let def_100 = options.filter((item, i, arr) => arr[i - 1] === "def_100").reduce((a, b) => +a + +b) + +options[99] + +options[103] + resultSet.filter((item, i, arr) => arr[i - 1] === "def_100").reduce((a, b) => +a + +b) * bonusSet;
      let spd = options.filter((item, i, arr) => arr[i - 1] === "spd").reduce((a, b) => +a + +b);
      let spd_100 = resultSet.filter((item, i, arr) => arr[i - 1] === "spd_100").reduce((a, b) => +a + +b) * bonusSet;
      let cRate = options.filter((item, i, arr) => arr[i - 1] === "cRate").reduce((a, b) => +a + +b) + (options[104] === "2" ? 5 : 0) + resultSet.filter((item, i, arr) => arr[i - 1] === "cRate").reduce((a, b) => +a + +b) * bonusSet;
      let cDmg = options.filter((item, i, arr) => arr[i - 1] === "cDmg").reduce((a, b) => +a + +b) + (options[106] === "1" ? 10 : 0) + (options[108] === "1" ? 20 : 0) + +options[100] + resultSet.filter((item, i, arr) => arr[i - 1] === "cDmg").reduce((a, b) => +a + +b) * bonusSet;
      let resist = options.filter((item, i, arr) => arr[i - 1] === "resist").reduce((a, b) => +a + +b) + (options[104] === "4" ? 10 : 0) + (options[105] === "2" ? 10 : 0) + (options[108] === "3" ? 50 : 0) + +options[101] + resultSet.filter((item, i, arr) => arr[i - 1] === "resist").reduce((a, b) => +a + +b) * bonusSet;
      let acc = options.filter((item, i, arr) => arr[i - 1] === "acc").reduce((a, b) => +a + +b) + (options[105] === "4" ? 10 : 0) + (options[108] === "5" ? 50 : 0) + +options[102] + resultSet.filter((item, i, arr) => arr[i - 1] === "acc").reduce((a, b) => +a + +b) * bonusSet;
      //===========================================новые сеты с гидры===============================
      switch ([options[0], options[11], options[22], options[33], options[44], options[55]].filter((item) => item === "48(6)").length) {
        case 1:
          console.log("gidra 1");
          hp_100 += 8;
          break;
        case 2:
          console.log("gidra 2");
          hp_100 += 8;
          resist += 40;
          break;
        case 3:
          console.log("gidra 3");
          hp_100 += 8;
          resist += 40;
          def_100 += 15;
          break;
        case 4:
          console.log("gidra 4");
          hp_100 += 8;
          resist += 40;
          def_100 += 15;
          break;
        case 5:
          console.log("gidra 5");
          hp_100 += 8;
          resist += 40;
          def_100 += 30;
          break;
        case 6:
          console.log("gidra 6");
          hp_100 += 8;
          resist += 40;
          def_100 += 30;
          break;
      }
      switch ([options[0], options[11], options[22], options[33], options[44], options[55]].filter((item) => item === "47(6)").length) {
        case 1:
          console.log("gidra 1");
          resist += 20;
          break;
        case 2:
          console.log("gidra 2");
          resist += 20;
          hp_100 += 15;
          break;
        case 3:
          console.log("gidra 3");
          resist += 20;
          hp_100 += 15;
          spd_100 += 12;
          break;
        case 4:
          console.log("gidra 4");
          resist += 20;
          hp_100 += 15;
          spd_100 += 12;
          break;
        case 5:
          console.log("gidra 5");
          resist += 20;
          hp_100 += 15;
          spd_100 += 24;
          break;
        case 6:
          console.log("gidra 6");
          resist += 20;
          hp_100 += 15;
          spd_100 += 24;
          break;
      }
      //=========================================Присваиваем в DOM ++ Извращение с плавающей запятой
      this.bonusHp = Math.round(hp_sum + powerHp + (hp_100 * options[109]) / 100);
      this.bonusAtk = Math.round(atk_sum + powerAtk + (atk_100 * options[110]) / 100);
      this.bonusDef = Math.round(def_sum + powerDef + (def_100 * options[111]) / 100);
      this.bonusSpd = Math.round((spd + powerSpd + (spd_100 * options[112]) / 100) * 100) / 100;
      this.bonusCrate = Math.round((cRate + powerCrateLeg) * 100) / 100;
      this.bonusCdmg = Math.round((cDmg + powerCdmgLeg) * 100) / 100;
      this.bonusResist = Math.round((resist + powerResist) * 100) / 100;
      this.bonusAcc = Math.round((acc + powerAcc) * 100) / 100;

      //    console.log(`resultSet: ${resultSet}`, bonusSet, "hp_sum = ", hp_sum, "hp_100", hp_100, "atk_sum=", atk_sum, "atk_100", atk_100, "def_sum", def_sum, "def_100", def_100, "spd", spd, "cRate", cRate, "cDmg", cDmg, "resist", resist, "acc", acc, "set");
    },
  },
};
</script>

<style lang="scss">
.stats {
  font-size: 5vh;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}
.start {
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    width: 25%;
    padding: 0;
    height: 4vh;
  }
}
.stats p {
  display: inline-block;
}
.start__stats {
  display: flex;
  align-items: center;
  width: 26%;
  input {
    width: 18vw;
  }
}
.start__res {
  display: flex;
  min-width: 30%;
}
</style>
