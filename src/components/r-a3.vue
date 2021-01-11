<template>
  <div>
    <Ring />

    <Earing />

    <Necklace />
  </div>
</template>

<script>
import Ring from "./r-Ring";
import Earing from "./r-Earing";
import Necklace from "./r-Necklace";

export default {
  name: "A3",
  components: { Ring, Earing, Necklace },
};
</script>

<style lang="scss"></style>
