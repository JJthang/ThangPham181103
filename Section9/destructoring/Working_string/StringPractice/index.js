let CodeFlight =
  "_Delayed_Departure; fao93766109;tx12133758440;11:25+_Arrival;bru0943384722; fa093766109;11:45+_Delayed_Arrival;hel7439299980; ;fao93766109;12:05+_Departure; fao93766109; lis2323639855;12:30;";
const newCode = CodeFlight.split("+");
for (const iterator of newCode) {
  let [bien1, bien2, bien3, bien4] = iterator.split(";");
  let output = `🔴 ${bien1.replaceAll("_", "")} ${bien2.replace(
    "",
    "from"
  )} ${bien3} : (${bien4.replace(":", "h")}) `;
  console.log(output);
}
