<template>
  <div class="wrapper sets">
    <select name="set" class="sett">
      <option value="0" class="choose" disabled selected>{{
        $store.state.lang.choose
      }}</option
      ><option value="7.5" class="hp_100 life"
        >{{ $store.state.lang.life }} </option
      ><option value="7.5" class="atk_100 offense"
        >{{ $store.state.lang.offense }} </option
      ><option value="7.5" class="def_100 defense"
        >{{ $store.state.lang.defense }} </option
      ><option value="6" class="cRate criticalRate"
        >{{ $store.state.lang.criticalRate }} </option
      ><option value="20" class="acc accuracy"
        >{{ $store.state.lang.accuracy }} </option
      ><option value="6" class="spd speed"
        >{{ $store.state.lang.speed }} </option
      ><option value="20" class="resist resistance"
        >{{ $store.state.lang.resistance }} </option
      ><option value="10" class="cDmg critDamage"
        >{{ $store.state.lang.critDamage }} </option
      ><option value="0" class="lifesteal"
        >{{ $store.state.lang.lifesteal }} </option
      ><option value="0" class="destroy"
        >{{ $store.state.lang.destroy }} </option
      ><option value="0" class="retaliation"
        >{{ $store.state.lang.retaliation }} </option
      ><option value="0" class="fury">{{ $store.state.lang.fury }} </option
      ><option value="0" class="curing">{{ $store.state.lang.curing }} </option
      ><option value="0" class="reflex">{{ $store.state.lang.reflex }} </option
      ><option value="0" class="cursed">{{ $store.state.lang.cursed }} </option
      ><option value="0" class="toxic">{{ $store.state.lang.toxic }} </option
      ><option value="0" class="frost">{{ $store.state.lang.frost }} </option
      ><option value="0" class="daze">{{ $store.state.lang.daze }} </option
      ><option value="0" class="immunity"
        >{{ $store.state.lang.immunity }} </option
      ><option value="0" class="avenging"
        >{{ $store.state.lang.avenging }} </option
      ><option value="0" class="shield">{{ $store.state.lang.shield }}</option
      ><option value="0" class="stalwart">{{
        $store.state.lang.stalwart
      }}</option
      ><option value="0" class="frenzy">{{ $store.state.lang.frenzy }} </option
      ><option value="0" class="regeneration"
        >{{ $store.state.lang.regeneration }} </option
      ><option value="0" class="stun">{{ $store.state.lang.stun }} </option
      ><option value="0" class="relentless"
        >{{ $store.state.lang.relentless }} </option
      ><option value="0" class="savage">{{ $store.state.lang.savage }} </option
      ><option value="0" class="taunting"
        >{{ $store.state.lang.taunting }} </option
      ><option value="7.5" class="atk_100 cruel"
        >{{ $store.state.lang.cruel }} </option
      ><option value="7.5" class="hp_100 immortal"
        >{{ $store.state.lang.immortal }} </option
      ><option value="7.5" class="hp_100 divineLive"
        >{{ $store.state.lang.divineLive }} </option
      ><option value="7.5" class="atk_100 divineOffense"
        >{{ $store.state.lang.divineOffense }} </option
      ><option value="6" class="cRate divineCriticalRate"
        >{{ $store.state.lang.divineCriticalRate }} </option
      ><option value="6" class="spd divineSpeed"
        >{{ $store.state.lang.divineSpeed }} </option
      ><option value="7.5" class="cDmg spd swiftParry"
        >{{ $store.state.lang.swiftParry }} </option
      ><option value="5" class="hp_100 def_100 deflection"
        >{{ $store.state.lang.deflection }} </option
      ><option value="5" class="hp_100 def_100 resilience">{{
        $store.state.lang.resilience
      }}</option
      ><option value="2.5" class="acc spd perception"
        >{{ $store.state.lang.perception }} </option
      ><option value="2.5" class="atk_100 cRate fatal">{{
        $store.state.lang.fatal
      }}</option
      ><option value="10" class="resist untouchable">{{
        $store.state.lang.untouchable
      }}</option
      ><option value="7.5" class="cDmg affinitybreaker">{{
        $store.state.lang.affinitybreaker
      }}</option
      ><option value="0" class="frostbite"
        >{{ $store.state.lang.frostbite }}
      </option></select
    >
  </div>
</template>

<script>
export default {
  name: "Sets",
};
</script>

<style lang="scss">
.sett {
  max-width: 60%;
  margin-left: 10%;
}
</style>
