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

console.log(3 || "Jonas");
console.log("" || "thang");
console.log(true || 0);
console.log(null || undefined);
console.log(undefined || 0 || null || "null");

//! làm ntn
if (restaurant.order) {
  restaurant.order("thang", "thang1");
}
//! bằng với làm ntn

restaurant.order && restaurant.order("pham thang", "pham tia");

//? The Nullish Coalescing Operator (??)

let foo;
const count = 0;
const text = "";

const someDummyText = foo || "Hello!";
console.log(someDummyText);

const qty = count || 42;
const message = text || "hi!";
console.log(qty); // 42 and not 0
console.log(message); // "hi!" and not ""

restaurant.numberget = null;
const guest = restaurant.numberget ?? 10;
console.log(guest);
