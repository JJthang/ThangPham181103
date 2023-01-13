let arr1 = {
  thang: ["thang1", "thang2", "thang3"],
  tai: ["tai1", "tai2", "tai3"],
  tu: ["tu1", "tu2", "tu3"],
  getthang(start, end) {
    return [this.thang[start], this.thang[end]];
  },
  OpeningHourse: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 13,
      close: 23,
    },
    mon: {
      open: 14,
      close: 24,
    },
  },
  live: function ({ indexstart, indexend, time, age }) {
    console.log(
      `
      Fist Brother ${this.tai[indexstart]}, 
      2nd brother  ${this.thang[indexend]},
      what time ${time}
      2 brother age ${age}
      `
    );
  },
};

//! the Map tượng giữ các cặp khóa-giá trị và ghi nhớ thứ tự chèn ban đầu của các khóa.
//! Bất kỳ giá trị nào (cả đối tượng và giá trị nguyên thủy ) đều có thể được sử dụng làm khóa hoặc giá trị.

const Maps = new Map();

const arr = [1, 2];

Maps.set("number", "day la element number")
  .set("Number2", "day la number 2")
  .set("arr", ["heh1", "heh2", "heeh3"])
  .set("open", 8)
  .set("closed", 23)
  .set(true, "We are Open")
  .set(false, "we closed")
  .set(arr, "test");

console.log(Maps);
console.log(Maps.get(arr));
const time = 10;

console.log(Maps.get(time >= Maps.get("open") && time <= Maps.get("closed")));
