<template>
  <div class="wrapper">
    <div class="stats">
      <div class="start startHp">
        <input
          type="number"
          class="stats_input startHp_input"
          placeholder="Start HP"
        /><output class="stats_output startHp_output">+0</output
        ><span>HP-</span>
        <p>0</p>
      </div>

      <div class="start startAtk">
        <input
          type="number"
          class="stats_input"
          placeholder="Start ATK"
        /><output class="stats_output">+0</output><span>ATK-</span>
        <p>0</p>
      </div>

      <div class="start startDef">
        <input
          type="number"
          class="stats_input"
          placeholder="Start DEF"
        /><output class="stats_output">+0</output><span>DEF-</span>
        <p>0</p>
      </div>

      <div class="start startSpeed">
        <input
          type="number"
          class="stats_input"
          placeholder="Start SPD"
        /><output class="stats_output">+0</output><span>SPD-</span>
        <p>0</p>
      </div>

      <div class="start startCrate">
        <input
          type="number"
          class="stats_input"
          placeholder="Start C.Rate"
        /><output class="stats_output">+0%</output><span>C.R-</span>
        <p>0%</p>
      </div>

      <div class="start startCdmg">
        <input
          type="number"
          class="stats_input"
          placeholder="Start C.Dmg"
        /><output class="stats_output">+0%</output><span>C.D-</span>
        <p>0%</p>
      </div>

      <div class="start startResist">
        <input
          type="number"
          class="stats_input"
          placeholder="Start RES"
        /><output class="stats_output">+0</output><span>RES-</span>
        <p>0</p>
      </div>

      <div class="start startAcc">
        <input
          type="number"
          class="stats_input"
          placeholder="Start ACC"
        /><output class="stats_output">+0</output><span>ACC-</span>
        <p>0</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainStatus",
};
</script>

<style lang="scss">
.stats {
  font-size: 4.5vh;
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
