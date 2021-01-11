<template>
  <div>
    <Boxing />

    <Armor />

    <Sneakers />
  </div>
</template>

<script>
import Boxing from "./r-Boxing";
import Armor from "./r-Armor";
import Sneakers from "./r-Sneakers";

export default {
  name: "A2",
  components: { Boxing, Armor, Sneakers },
};
</script>

<style lang="scss"></style>
