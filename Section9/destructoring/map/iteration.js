const Personal = new Map([
  ["name", "thang"],
  [1, "C"],
  [2, "Javascrip"],
  [3, "PHP"],
  ["Correct", 3],
  [true, "congratulation"],
  [false, "Sory about that"],
]);
// const Personal1 = new Map(Personal.entries());
// console.log(Personal1);

for (const [key, value] of Personal) {
  if (typeof key === "number") {
    console.log(`Your answer : ${key} : ${value}`);
  }
}

const myanswer = 3;

console.log(
  (Personal.get("Correct") === myanswer && Personal.get(true)) ||
    Personal.get(false)
);

//! how to convert map to array

console.log("/////////////");

console.log(Personal.entries());
console.log([...Personal.keys()]);
console.log([...Personal.values()]);
