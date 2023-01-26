//! Lab2
let data = [
  [23, "gold"],
  [30, "Red"],
  [64, "Yealow"],
  [73, "Change Personal"],
  [83, "Gold"],
  [83, "Gold"],
  [93, "Gold3"],
  [93, "Gold4"],
];
//todo 1. Hãy tạo ra 1 mảng các sự kiện khác nhau xảy ra trong suốt trận đấu
let newData1 = [...new Set(data.map((element) => element[1]))];
console.log(newData1);

//todo 2. Phát hiện ra rằng thẻ vàng phút 64 là không đúng Delete no

let deleteErrorData = [
  ...new Set(newData1.filter((element) => element[0] != 64)),
];
console.log(deleteErrorData);

//todo 3.

console.log(
  `trung bình 1 sự kiện sảy ra trong vòng ${Math.floor(
    90 / deleteErrorData.length
  )}'`
);

//todo 4.

data.forEach((element) => {
  const allArray = element[0] <= 45 ? "FIRST HALF" : "The second half";
  console.log(`${allArray}    ${element[0]} : ${element[1]}`);
});

//! LAB2.2:
console.log("LAB2 ----------------");
let testData = [
  "underscore_case",
  "first_name",
  "Some_Variable",
  "calculate_AGE",
  "delayed_departure",
];

let img = "🙇‍♂️";
testData.forEach((element) => {
  console.log(`${element.replace("_", "")} ${img}`);
  img += "🙇‍♂️";
});

//! LAB2.3
console.log("LAB2.3");
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
for (const iterator of flights.split("+")) {
  // console.log(iterator);
  const [type, from, to, time] = iterator.split(";");
  // console.log(type, from, to, time);
  console.log(
    `${type.startsWith("_Delayed_") ? "🉐" : "".padStart(13)} ${type.replace(
      "_",
      ""
    )} ${from.slice(0, 3).toLocaleUpperCase()} ${to
      .slice(0, 3)
      .toLocaleUpperCase()} (${time.replace(":", "h")})`
  );
}

//! LAB2.4:
(() => {
  let takeH1 = document.querySelector("h1");
  takeH1.style.color = "blue";
  document.body.addEventListener("click", () => {
    takeH1.style.color = "red";
  });
})();
