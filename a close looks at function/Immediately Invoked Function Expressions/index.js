// //! Immediately Invoked Function Expressions
// //todo : tác dụng là ham sẽ được chạy gọi luôn khi chạy
// const NormalFuction = (a) => {
//   console.log(a);
// };
// NormalFuction("Hello");

// //! IIFC : Thêm dấu () bao toàn bộ fuction
// (() => console.log("hello Thang"))();
(() => {
  let ChangeColor = document.querySelector("h1");
  ChangeColor.style.color = "red";
  document.querySelector("body").addEventListener("click", () => {
    ChangeColor.style.color = "blue";
  });
})();
