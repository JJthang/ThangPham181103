//!  / /g dùng cho replace có thể dùng để thay thế từ hoặc bất cứ thứ j bằng chuỗi
const OneWord = (str) => {
  return str.replace(/ Phạm /g, " Aloo ").toLowerCase();
};
const UperCaseFistWord = (str) => {
  let [fistWord, ...WordRest] = str.split(" ");
  return [fistWord.toUpperCase(), ...WordRest].join(" ");
};
//! high-order fuction
const Stranforms = (fist, rest) => {
  console.log(" Chũ thường rest : ", rest(""));
  console.log(" Chũ thường first : ", rest.name);
  console.log(" chũ được transform : ", rest(fist));
};

Stranforms("hello Tôi là Phạm Đắc Thắng", UperCaseFistWord);
console.log("/////////////////////");
Stranforms("hello Tôi là Phạm Đắc Thắng1", OneWord);

//! JS uses Callback all the time

function Hifight() {
  console.log("🙄");
}
document.body.addEventListener("click", Hifight);
["arr", "arr1", "arr2"].forEach(Hifight);

var thang = " HELLO_Thang".replace(/ /g, "").toLowerCase();
console.log(thang);
