// const [FirstName, LastName] = "hello thang".split(" ");

// const newWords = ["Mr.", FirstName, LastName].join(" ");
// console.log(newWords);

//!
// let thang = (e) => {
//   const changetoArray = e.split(" ");
//   const arrNAN = [];
//   for (const iterator of changetoArray) {
//     // arrNAN.push(iterator[0].toUpperCase() + iterator.slice(1));
//     arrNAN.push(iterator.replace(iterator[0], iterator[0].toUpperCase()));
//   }
//   console.log(arrNAN.join(" "));
// };
// thang("hello toila thang");
// thang("Good toila thang1");
// thang("Bye toila thang2");

//! padStart(length, "string") => Thêm String vào đầu chuỗi
// const Stringnew = "Object in javascrip";
// const new1 = Stringnew.padEnd(20, "**");
// console.log(new1);

let fun = (eee) => {
  const str = eee + "";
  const thang = str.slice(-4);
  return thang.padStart(str.length, "*").padEnd(str.length + 5, "*");
};
console.log(fun(123123123));
console.log(fun("helllos"));
console.log(fun("123213123"));

//! repeat
const repit = "bad waether .... Alll day";
const repitCopy = repit.repeat(4);
console.log(repitCopy);
