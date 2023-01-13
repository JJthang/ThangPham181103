let arr1 = {
  thang: ["thang1", "thang2", "thang3"],
  tai: ["tai1", "tai2", "tai3"],
  tu: ["tu1", "tu2", "tu3"],
  getname(thang1, thang2, thang3) {
    console.log(`
    Đây là thắng 1 : ${thang1}
    Đây là thắng 2 : ${thang2}
    Đây là thắng 3 : ${thang3}
    `);
  },
};
let newarray = [...arr1.tai, "hello cuoi mang"];
console.log(newarray);

let personal = "thang";
let personalCopy = [...personal, ""];
console.log(personalCopy);

//! ${...personal} => can't runing

let obj = {
  one1: "hi",
  one2: "hi1",
  one3: "hi2",
};
let objcpoy = { ...obj };
console.log(objcpoy);

arr1.getname(objcpoy.one1);

//? shallow coppy and deep copy
