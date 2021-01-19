<template>
  <div class="a1">
    <Weapon />

    <Helmet />

    <Shield />
  </div>
</template>

<script>
import Weapon from "./r-Weapon";
import Helmet from "./r-Helmet";
import Shield from "./r-Shield";

export default {
  name: "A1",
  components: { Weapon, Helmet, Shield },
};
</script>

<style lang="scss"></style>
