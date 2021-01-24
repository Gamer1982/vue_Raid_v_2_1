export default (t) => {
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("acc") ? (t.isAcc = true) : (t.isAcc = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("atk_sum") ? (t.isAtk_sum = true) : (t.isAtk_sum = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("atk_100") ? (t.isAtk_100 = true) : (t.isAtk_100 = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("def_sum") ? (t.isDef_sum = true) : (t.isDef_sum = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("def_100") ? (t.isDef_100 = true) : (t.isDef_100 = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("hp_sum") ? (t.isHp_sum = true) : (t.isHp_sum = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("hp_100") ? (t.isHp_100 = true) : (t.isHp_100 = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("resist") ? (t.isResist = true) : (t.isResist = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("cRate") ? (t.isCRate = true) : (t.isCRate = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("cDmg") ? (t.isCDmg = true) : (t.isCDmg = false);
  t.$store.state.options.slice(t.index + 1, t.index + 10).includes("spd") ? (t.isSpd = true) : (t.isSpd = false);
};
// t=>контекст  т,е this Элемента
