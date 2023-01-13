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

let guest1 = {
  age: 13,
};
let guest2 = {
  name: "captor",
  nummberget: 133,
};
// guest1.numbetFake = guest1.numbetFake || 10;
// guest2.numbetFake = guest2.numbetFake || 10;

// guest1.numbetFake = 30;
// guest2.numbetFake = 40;

// guest1.numbetFake ??= 10;
// guest2.numbetFake ??= 20;
// console.log(guest1);
// console.log(guest2);

guest1.name &&= "thangcan1";
guest2.name &&= "thangcan";
console.log(guest1);
console.log(guest2);
