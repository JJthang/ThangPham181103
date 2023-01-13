const gameEvent = new Map([
  [16, "Benzema"],
  [36, "Red QuangHai"],
  [43, "Yeallow PhamThang"],
  [56, "situastion"],
  [66, "CR7"],
  [69, "Yeallow PhamThang"],
  [75, "situastion"],
  [90, "Red QuangHai"],
  [92, "Benzema"],
]);

//! 1. create unite value
const event = [...new Set(gameEvent.values())];

//! 2. delete 66

gameEvent.delete(66);

//! 3.
for (const [key, values] of gameEvent) {
  const hiepdau = key <= 45 ? "hiep 1" : "hiep 2";
  console.log(`hiep dau thu ${hiepdau} minute : ${key} : ${values}    `);
}
