// const GetName = "JoNeee";
// const GetNameCopy = GetName.toLowerCase();

// const NewGetname = GetNameCopy[0] + GetNameCopy.slice(1);
// console.log(NewGetname);

//! Comparing Emails
// const email = "hello@gmail.com";
// const loginEmail = "   hello@gmail.com /n";
// const newa = loginEmail.slice(1, -2).trim();
// console.log(loginEmail.slice(1, -2).trim());
// console.log(email === newa);

//! Replacing

// const priceGB = "236.66&";
// const priceDolor = priceGB.replace("&", "$");
// console.log(priceDolor);

//! Practice

let practice = (e) => {
  const plane = e.toLowerCase();
  if (plane.includes("sung") || plane.includes("dao")) {
    console.log("you can go on plane get out here");
  } else {
    console.log("WellCome to plane");
  }
};

practice("hom nay len may bay t mang theo sung");
practice("hom nay len may bay t mang theo dao");
practice("hom nay len may bay t mang theo do an");
