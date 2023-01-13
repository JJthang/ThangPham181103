const restaurant = {
  name: "Classico Italiano",
  location: "Hn Vieejt nam hehehehe",
  categories: ["HN", "HP", "TQ", "VN"],
  startMenu: ["Nuoc", "do an", "Co ca", "thit bo"],
  mainMenu: ["Pizza", "pasta", "riot"],
  opening: {
    thu: {
      open: 11,
      close: 12,
    },
    thu1: {
      open: 12,
      close: 13,
    },
    thu2: {
      open: 14,
      close: 15,
    },
  },
  order: function (first, ...rest) {
    console.log(first);
    console.log(...rest);
  },
};

//! sử dụng để tránh trường hợp bị lặp lại element

const thang = new Set([1, 2, 3, 4, 5, 6, 6, 6, 4, 4]);

// const thang = [...new Set([1, 2, 3, 4, 5, 6, 6, 6, 4, 4])]; => Chuyển nó thành mảng

console.log(thang);

// thang.entries();
// thang.forEach((e, i) => {
//   console.log(e);
// });
