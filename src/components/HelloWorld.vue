<template>
  <div class="hello">
    <div class="lang">
      <input placeholder="For screenshot" /><select name="langg" class="langg">
        <option value="en">en </option
        ><option value="ru">ru </option
        ><option value="fr">fr </option
        ><option value="du">de </option
        ><option value="it">it </option
        ><option value="es">es </option
        ><option value="pt">pt </option
        ><option value="ko">ko </option
        ><option value="zh">zh </option
        ><option value="ja">ja </option
        ><option value="tr">tr </option
        ><option value="uk">uk </option></select
      >
    </div>
    <A1 />
    <B1 />
		<MainStatus/>
    <A2 />
    <A3 />
  </div>
</template>

<script>
import A1 from "./r-a1";
import A2 from "./r-a2";
import A3 from "./r-a3";
import B1 from "./r-b1";
import MainStatus from "./r-MainStatus";

export default {
  name: "HelloWorld",
  components: { A1, A2, A3, B1, MainStatus },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
