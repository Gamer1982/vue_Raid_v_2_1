<template>
  <div class="b1">
    <GreatHall class="b1__greatHall" />

    <Arena class="b1__Arena" />

    <GreatSkill class="b1__greatSkill" />
  </div>
</template>

<script>
import GreatHall from "./r-GreatHall";
import Arena from "./r-Arena";
import GreatSkill from "./r-GreatSkill";

export default {
  name: "B1",
  components: { GreatHall, Arena, GreatSkill },
};
</script>

<style lang="scss">
.b1 {
  display: flex;
  justify-content: space-between;
  &__greatHall {
    width: 50%;
  }
  &__Arena {
    width: 10%;
  }
  &__greatSkill {
    width: 35%;
  }
}
</style>
