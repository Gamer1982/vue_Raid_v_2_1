<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import "./styles/_reset";
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.2;
  font-size: 2vh;
  text-transform: uppercase;
  font-weight: 900;
}
.top {
  position: relative;
}
h2 {
  min-width: 100%;
  color: orange;
  font-size: 3vh;
  font-weight: 900;
}
p {
  color: orange;
}
input,
select {
  border-radius: 17%;
  margin-bottom: 1px;
  max-width: 98%;
  max-height: 98%;
  font-weight: 900;
  height: 2.4vh;
  appearance: none;
}
select.sett {
  width: 57%;
  margin-left: 10%;
}
select.wep {
  width: 50%;
  margin-left: 25%;
}
.top input {
  left: 55%;
  position: relative;
  width: 35%;
}
.wep + input {
  margin-bottom: 1vh;
}

output {
  display: inline-block;
  color: rgb(3, 250, 16);
  width: 10%;
  font-weight: 900;
}
span {
  display: inline-block;
  color: rgb(255, 208, 0);
  margin-left: 35%;
}
option,
select {
  margin: 0;
  padding: 0;
  width: 65%;
  margin-left: 10%;
  font-weight: 900;
}
select {
  padding-right: 3vh;
  background-image: url(http://s1.iconbird.com/ico/2013/8/426/w32h321377581133134TriangleDown.png);
  background-size: 2vh;
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: right;
}
.image2 {
  display: none;
  width: 100%;
  height: 100%;
  position: relative;
}
.weapon-1 {
  background: url(./assets/images/weapon.svg);
  background-size: 100%;
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
}

.helmet-1 {
  background: url(./assets/images/helmet2.svg);
  background-size: 100%;
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
}
.shield9-1 {
  background: url(./assets/images/shield2.png);
  background-size: 100%;
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
}
.boxing-1 {
  background: url(./assets/images/boxing.svg);
  background-size: 100%;
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
}
.armor-1 {
  background: url(./assets/images/armor.svg);
  background-size: 100%;
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
}
.sneakers-1 {
  background: url(./assets/images/sneakers.svg);
  background-size: 100%;
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
}
.ring-1 {
  background: url(./assets/images/ring.svg);
  background-size: 100%;
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
}
.earing-1 {
  background: url(./assets/images/earrings.svg);
  background-size: 100%;
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
}
.necklace-1 {
  background: url(./assets/images/st.png);
  background-size: 100%;
  width: 3vw;
  height: 3vw;
  position: absolute;
  top: 0;
  right: 0;
  opacity: 1;
}
</style>
