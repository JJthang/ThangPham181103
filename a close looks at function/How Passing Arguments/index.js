//! đối với kiểu dữ liệu Primitive thì giá trị được
//! chuyền vào sẽ không bị thay đổi (tham chiếu)
//? Đối với kiểu dữ liệu Non-Primitive thì giá trị có thể thay đổi
//? Tùy thuộc vào các thao tác (Tham chiếu)
const Name = "Thang";
// const thang1 = 222;
const appearance = {
  age: 12,
  Face: "Vilike",
};

const checkItout = (Name, appearance) => {
  Name = "Pham Thang";
  appearance.Face = "Mr." + appearance.Face;
  appearance.age = 23;
  console.log(Name);
  if (appearance.age === 12) {
    alert("OK bro");
  } else {
    alert("No bro");
  }
};
checkItout(Name, appearance);
console.log(Name, appearance);

//! Arr
const NewArr = ["lala", "hehehe"];
function exchangeArr(NewArr) {
  NewArr[1] = 23;
  console.log(NewArr);
}
exchangeArr(NewArr);

//! Object
// const newPass = (appearance) => {
//   appearance.age = Math.trunc(Math.random() * 1000);
//   console.log(appearance.age);
// };
// console.log(thang1, appearance);
// newPass(appearance);
// checkItout(Name, appearance);
