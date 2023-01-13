let RandomNumber = Math.floor(Math.random() * 10);
let point = 20;
let record = 0;
document.querySelector(".btn").addEventListener("click", () => {
  let takePoint = document.querySelector(".ShowClick").value;
  let taketurn = document.querySelector(".turn h1");
  let takespan = document.querySelector(".turn span");
  let recored = document.querySelector(".recored");
  let img1 = document.querySelector(".img1 h1");
  if (takePoint == RandomNumber) {
    img1.innerHTML = RandomNumber;
    taketurn.innerHTML = "congrats you guessed right 👍";
    recored.innerHTML = point;
    img1.style.animation.stop(true);
  } else if (takePoint < RandomNumber) {
    point--;
    takespan.innerHTML = point;
    taketurn.innerHTML = "bigger Number";
  } else {
    taketurn.innerHTML = "Smaller number";
  }
});

document.querySelector(".Again").addEventListener("click", () => {
  let RandomNumber = Math.floor(Math.random() * 10);
  let point = 20;
  let record = 0;
  document.querySelector(".ShowClick").value = 0;
  document.querySelector(".turn h1").innerHTML = "Guess Your Number 😈";
  document.querySelector(".turn span").innerHTML = 20;
  document.querySelector(".recored").innerHTML = 0;
  document.querySelector(".img1 h1").innerHTML = "?";
});
