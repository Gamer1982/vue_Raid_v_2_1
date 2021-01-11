<template>
  <div>
    <div class="top top_helmet">
      <div class="image helmet-1"></div>
      <div class="image2 helmet-1"></div>
      <select name="set" class="sett">
        <option value="0" disabled selected>Choose a set </option
        ><option value="7.5" class="hp_100 life">Life(2) +15%HP </option
        ><option value="7.5" class="atk_100 offense">Offense(2) +15%ATK </option
        ><option value="7.5" class="def_100 defense">Defense(2) +15%DEF </option
        ><option value="6" class="cRate criticalRate">C.Rate(2) +12% </option
        ><option value="20" class="acc accuracy">Accuracy(2) +40ACC </option
        ><option value="6" class="spd speed">Speed(2) +12%SPD </option
        ><option value="20" class="resist resistance">Resistance(2) +40 </option
        ><option value="10" class="cDmg critDamage">C.Damage(2) +20% </option
        ><option value="0" class="lifesteal">Lifesteal(4) </option
        ><option value="0" class="destroy">Destroy(4) </option
        ><option value="0" class="retaliation">Retaliation(4) </option
        ><option value="0" class="fury">Fury(4) </option
        ><option value="0" class="curing">Curing(4) </option
        ><option value="0" class="reflex">Reflex(4) </option
        ><option value="0" class="cursed">Cursed(4) </option
        ><option value="0" class="toxic">Toxic(4) </option
        ><option value="0" class="frost">Frost(4) </option
        ><option value="0" class="daze">Daze(4) </option
        ><option value="0" class="immunity">Immunity(4) </option
        ><option value="0" class="avenging">Avenging(4) </option
        ><option value="0" class="shield">Shield(4) </option
        ><option value="0" class="stalwart">Stalwart(4) </option
        ><option value="0" class="frenzy">Frenzy(4) </option
        ><option value="0" class="regeneration">Regeneration(4) </option
        ><option value="0" class="stun">Stun(4) </option
        ><option value="0" class="relentless">Relentless(4) </option
        ><option value="0" class="savage">Savage(4) </option
        ><option value="0" class="taunting">Taunting(4) </option
        ><option value="7.5" class="atk_100 cruel">Cruel(2) +15%ATK </option
        ><option value="7.5" class="hp_100 immortal">Immortal(2) +15%HP </option
        ><option value="7.5" class="hp_100 divineLive">D.Life(2) +15%HP </option
        ><option value="7.5" class="atk_100 divineOffense"
          >D.Offense(2) +15%ATK </option
        ><option value="6" class="cRate divineCriticalRate"
          >D.C.Rate(2) +12% </option
        ><option value="6" class="spd divineSpeed">D.Speed(2)+12%SPD </option
        ><option value="7.5" class="cDmg spd swiftParry"
          >Swift parry(4)+18%SPD+30%C.Dmg </option
        ><option value="5" class="hp_100 def_100 deflection"
          >Deflection(4)+20HP%+20DEF% </option
        ><option value="5" class="hp_100 def_100 resilience"
          >Resilience(2)+10HP%+10DEF% </option
        ><option value="2.5" class="acc spd perception"
          >Perception(2)+40ACC +5%SPD </option
        ><option value="2.5" class="atk_100 cRate fatal"
          >Fatal(2) +15%ATK C.Rate +5% </option
        ><option value="10" class="resist untouchable"
          >Untouchable(4) +40 Resist +immunity for 2 turns </option
        ><option value="7.5" class="cDmg affinitybreaker"
          >Affinitybreaker (4) - C. DMG +30%. 20% chance to change weak hit </option
        ><option value="0" class="frostbite">Frostbite(2) </option></select
      >

      <div class="baza helmet">
        <select name="Helmet" class="wep">
          <option value="0" class="hp_sum">HP+ </option></select

        ><input type="number" /><br /><br /><select name="Helmet1">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" selected>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select

        ><input type="number" /><br /><select name="Helmet2">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" selected>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select

        ><input type="number" /><br /><select name="Helmet3">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" selected>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" disabled>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select

        ><input type="number" /><br /><select name="Helmet4">
          <option value="0" class="atk_sum">ATK+ </option
          ><option value="0" class="def_sum">DEF+ </option
          ><option value="0" class="spd" disabled>SPD </option
          ><option value="0" class="cRate" disabled>C.RATE </option
          ><option value="0" class="cDmg" disabled>C.DMG </option
          ><option value="0" class="resist">RESIST </option
          ><option value="0" class="acc" selected>ACC </option
          ><option value="0" class="atk_100">ATK% </option
          ><option value="0" class="hp_100">HP% </option
          ><option value="0" class="def_100">DEF% </option></select

        ><input type="number" /><br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "Helmet",
};
</script>

<style lang="scss"></style>
