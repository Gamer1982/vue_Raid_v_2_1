<template>
  <div class="wrapper sets" @change="color">
    <select name="set" class="sett" v-model="$store.state.options[index]">
      <option value="00" class="choose">{{ $store.state.lang.choose }}</option>
      <option value="01(2) hp_100,15" class="hp_100 life">
        {{ $store.state.lang.life }}
      </option>
      <option value="02(2) atk_100,15" class="atk_100 offense">
        {{ $store.state.lang.offense }}
      </option>
      <option value="03(2) def_100,15" class="def_100 defense">
        {{ $store.state.lang.defense }}
      </option>
      <option value="04(2) cRate,12" class="cRate criticalRate">
        {{ $store.state.lang.criticalRate }}
      </option>
      <option value="05(2) acc,40" class="acc accuracy">
        {{ $store.state.lang.accuracy }}
      </option>
      <option value="06(2) spd_100,12" class="spd speed">
        {{ $store.state.lang.speed }}
      </option>
      <option value="07(2) resist,40" class="resist resistance">
        {{ $store.state.lang.resistance }}
      </option>
      <option value="08(2) cDmg,20" class="cDmg critDamage">
        {{ $store.state.lang.critDamage }}
      </option>
      <option value="09(4):" class="lifesteal">
        {{ $store.state.lang.lifesteal }}
      </option>
      <option value="10(4):" class="destroy">
        {{ $store.state.lang.destroy }}
      </option>
      <option value="11(4):" class="retaliation">
        {{ $store.state.lang.retaliation }}
      </option>
      <option value="12(4):" class="fury">{{ $store.state.lang.fury }}</option>
      <option value="13(4):" class="curing">
        {{ $store.state.lang.curing }}
      </option>
      <option value="14(4):" class="reflex">
        {{ $store.state.lang.reflex }}
      </option>
      <option value="15(4):" class="cursed">
        {{ $store.state.lang.cursed }}
      </option>
      <option value="16(4):" class="toxic">
        {{ $store.state.lang.toxic }}
      </option>
      <option value="17(4):" class="frost">
        {{ $store.state.lang.frost }}
      </option>
      <option value="18(4):" class="daze">{{ $store.state.lang.daze }}</option>
      <option value="19(4):" class="immunity">
        {{ $store.state.lang.immunity }}
      </option>
      <option value="20(4):" class="avenging">
        {{ $store.state.lang.avenging }}
      </option>
      <option value="21(4):" class="shield">
        {{ $store.state.lang.shield }}
      </option>
      <option value="22(4):" class="stalwart">
        {{ $store.state.lang.stalwart }}
      </option>
      <option value="23(4):" class="frenzy">
        {{ $store.state.lang.frenzy }}
      </option>
      <option value="24(4):" class="regeneration">
        {{ $store.state.lang.regeneration }}
      </option>
      <option value="25(4):" class="stun">{{ $store.state.lang.stun }}</option>
      <option value="26(4):" class="relentless">
        {{ $store.state.lang.relentless }}
      </option>
      <option value="27(4):" class="savage">
        {{ $store.state.lang.savage }}
      </option>
      <option value="28(4):" class="taunting">
        {{ $store.state.lang.taunting }}
      </option>
      <option value="29(2) atk_100,15" class="atk_100 cruel">
        {{ $store.state.lang.cruel }}
      </option>
      <option value="30(2) hp_100,15" class="hp_100 immortal">
        {{ $store.state.lang.immortal }}
      </option>
      <option value="31(2) hp_100,15" class="hp_100 divineLive">
        {{ $store.state.lang.divineLive }}
      </option>
      <option value="32(2) atk_100,15" class="atk_100 divineOffense">
        {{ $store.state.lang.divineOffense }}
      </option>
      <option value="33(2) cRate,12" class="cRate divineCriticalRate">
        {{ $store.state.lang.divineCriticalRate }}
      </option>
      <option value="34(2) spd_100,12" class="spd divineSpeed">
        {{ $store.state.lang.divineSpeed }}
      </option>
      <option value="35(4) cDmg,30,spd_100,18" class="cDmg spd swiftParry">
        {{ $store.state.lang.swiftParry }}
      </option>
      <option value="36(4) hp_100,20,def_100,20" class="hp_100 def_100 deflection">
        {{ $store.state.lang.deflection }}
      </option>
      <option value="37(2) hp_100,10,def_100,10" class="hp_100 def_100 resilience">
        {{ $store.state.lang.resilience }}
      </option>
      <option value="38(2) acc,40,spd_100,5" class="acc spd perception">
        {{ $store.state.lang.perception }}
      </option>
      <option value="39(2) atk_100,15,cRate,5" class="atk_100 cRate fatal">
        {{ $store.state.lang.fatal }}
      </option>
      <option value="40(4) resist,40" class="resist untouchable">
        {{ $store.state.lang.untouchable }}
      </option>
      <option value="41(4) cDmg,30" class="cDmg affinitybreaker">
        {{ $store.state.lang.affinitybreaker }}
      </option>
      <option value="42(2):" class="frostbite">
        {{ $store.state.lang.frostbite }}
      </option>
      <option value="43(4) cRate,12" class="cRate bloodthirst">
        {{ $store.state.lang.bloodthirst }}
      </option>
      <option value="44(4):" class="guardian">
        {{ $store.state.lang.guardian }}
      </option>
      <option value="45(2) resist,40,def_100,10" class="resist def_100 fortitude">
        {{ $store.state.lang.fortitude }}
      </option>
      <option value="46(4) cRate,10" class="cRate lethal">
        {{ $store.state.lang.lethal }}
      </option>
      <option value="47(6)" class="resist protection">
        {{ $store.state.lang.protection }}
      </option>
      <option value="48(6)" class="hp_100 stone_skin">
        {{ $store.state.lang.stone_skin }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Sets",
  props: {
    index: {
      type: Number,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {
    color() {
      this.$emit("set-color");
    },
  },

  computed: {
    ...mapState(["options"]),
  },
  // watch: {
  //   options() {
  //     this.$emit("set-color");
  //   },
  // },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "CHANGE_OPTIONS_TO_STATE":
          this.$emit("set-color");
          console.log("subscribe");
          break;
      }
    });
  },
};
</script>

<style lang="scss">
.sett {
  max-width: 60%;
  margin-left: 10%;
}
</style>
