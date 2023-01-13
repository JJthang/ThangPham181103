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

for (const [keys, { open, close }] of Object.entries(arr1.OpeningHourse)) {
  console.log(
    `On ${keys} we will open : ${open} hours and close : ${close} hours`
  );
}
