export default (t) => {
   let res = t.$store.state.options[t.index].slice(0, 2);

   switch (res) {
      case "01":
         t.vStyle = "border: #95c11f 0.1em solid";
         break;
      case "02":
         t.vStyle = "border: #db0203 0.1em solid";
         break;
      case "03":
         t.vStyle = "border: #ffbf6a 0.1em solid";
         break;
      case "04":
         t.vStyle = "border: #d59400 0.14em double";
         break;
      case "05":
         t.vStyle = "border: #0786f6 0.1em solid";
         break;
      case "06":
         t.vStyle = "border: #05d2eb 0.1em solid";
         break;
      case "07":
         t.vStyle = "border: #b3a400 0.14em double";
         break;
      case "08":
         t.vStyle = "border: #c21600 0.14em double";
         break;
      case "09":
         t.vStyle = "border: #d30646 0.2em dashed";
         break;
      case "10":
         t.vStyle = "border: #bd4e8e 0.2em solid";
         break;
      case "11":
         t.vStyle = "border: #84ff0f 0.2em solid";
         break;
      case "12":
         t.vStyle = "border: #93556a 0.2em solid";
         break;
      case "13":
         t.vStyle = "border: #d73281 0.2em double";
         break;
      case "14":
         t.vStyle = "border: #aa6a45 0.2em solid";
         break;
      case "15":
         t.vStyle = "border: #c20530 0.2em double";
         break;
      case "16":
         t.vStyle = "border: #dfcc00 0.2em solid";
         break;
      case "17":
         t.vStyle = "border: #a0ceff 0.2em solid";
         break;
      case "18":
         t.vStyle = "border: #ffe562 0.2em solid";
         break;
      case "19":
         t.vStyle = "border: #c74d0e 0.2em solid";
         break;
      case "20":
         t.vStyle = "border: #54045a 0.2em solid";
         break;
      case "21":
         t.vStyle = "border: #f90fe1 0.2em solid";
         break;
      case "22":
         t.vStyle = "border: #b69330 0.2em double";
         break;
      case "23":
         t.vStyle = "border: #5219ed 0.2em solid";
         break;
      case "24":
         t.vStyle = "border: #46a92a 0.2em solid";
         break;
      case "25":
         t.vStyle = "border: #bad800 0.2em double";
         break;
      case "26":
         t.vStyle = "border: #19c588 0.2em solid";
         break;
      case "27":
         t.vStyle = "border: #ad0d10 0.2em solid";
         break;
      case "28":
         t.vStyle = "border: #e24a33 0.2em solid";
         break;
      case "29":
         t.vStyle = "border: #fb4600 0.1em dashed";
         break;
      case "30":
         t.vStyle = "border: #00b06b 0.1em dashed";
         break;
      case "31":
         t.vStyle = "border: #45bfc4 0.1em dashed";
         break;
      case "32":
         t.vStyle = "border: #ac547d 0.1em dashed";
         break;
      case "33":
         t.vStyle = "border: #fc0000 0.1em dashed";
         break;
      case "34":
         t.vStyle = "border: #b1d065 0.1em dashed";
         break;
      case "35":
         t.vStyle = "border: #614e7f 0.2em dashed";
         break;
      case "36":
         t.vStyle = "border: #91bd45 0.2em dashed";
         break;
      case "37":
         t.vStyle = "border: #3ffc75 0.15em dashed";
         break;
      case "38":
         t.vStyle = "border: #de0211 0.15em dashed";
         break;
      case "39":
         t.vStyle = "border: #A22F21 0.15em dashed";
         break;
      case "40":
         t.vStyle = "border: #C67C37 0.2em dashed";
         break;
      case "41":
         t.vStyle = "border: #DC1B0F 0.2em dashed";
         break;
      case "42":
         t.vStyle = "border: #9BFEFF 0.15em dashed";
         break;
      case "43":
         t.vStyle = "border: #D9B37E 0.2em dashed";
         break;
      case "44":
         t.vStyle = "border: #FFC869 0.2em dotted";
         break;
      case "45":
         t.vStyle = "border: #E93706 0.15em dotted";
         break;
      case "46":
         t.vStyle = "border: #BA903A 0.2em dotted";
         break;
      case "00":
         t.vStyle = "border: solid 0.1em gray";
         break;
      default:
         t.vStyle = "border: solid 0.1em gray";
   }
};
