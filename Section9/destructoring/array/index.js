let arr1 = {
  thang: ["thang1", "thang2", "thang3"],
  tai: ["tai1", "tai2", "tai3"],
  tu: ["tu1", "tu2", "tu3"],
  getthang(start, end) {
    return [this.thang[start], this.thang[end]];
  },
};
let [newconst, newconst1] = arr1.thang;

console.log(newconst, newconst1);

// let change = newconst;
// newconst = newconst1;
// newconst1 = change;
[newconst, newconst1] = [newconst1, newconst];

console.log(newconst, newconst1);

//! Ceceive 2 return Value from a Func

let [lay1, lay2] = arr1.getthang(0, 2);
console.log(lay1, lay2);

//? nested
let mang = [2, 3, [5, 6]];

let [mang1, , [mang2, mang3]] = mang;
console.log(mang1, mang2, mang3);
