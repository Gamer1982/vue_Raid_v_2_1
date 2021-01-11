<template>
  <div>
    <GreatHall />

    <Arena />

    <GreatSkill />
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

<style lang="scss"></style>
