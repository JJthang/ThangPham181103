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

let [nuoc, coca, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];
let { thu, ...rest } = restaurant.opening;
console.log(thu);
console.log(rest);

console.log(nuoc, coca, otherFood);

let x = [1, 2, 3, 4, 5];

restaurant.order(...x);
