const bookings = [];
const books = (seats = "23", ticket = 55, airline = 23 * ticket) => {
  const person = {
    seats,
    ticket,
    airline,
  };
  //   bookings.push(person);
  console.log(person);
};
books();
books("22", "location", "Han Quoc");
books("22", "location", "Han Quoc");
books("23", undefined, 1000);
