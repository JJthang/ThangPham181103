let cutString = (s) => {
  let newcopy = s.slice(-1);
  if (newcopy === "H" || newcopy === "J") {
    console.log("Congratoration !");
  } else {
    console.log("Sorry About That");
  }
};
cutString("hahahaH");
cutString("lam j day");
cutString("aaaaaJ");

console.log(typeof new String("Hello").slice(-1));
