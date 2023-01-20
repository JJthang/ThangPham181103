//! First-Class
//? JavaScript coi các chức năng là công dân hạng nhất
//? Điều này có nghĩa là các chức năng chỉ đơn giản là các giá trị
//? Hàm chỉ là một "loại" đối tượng khác

//todo Lưu trữ các chức năng trong các biến hoặc thuộc tính
const add = (a, b) => a + b;
const counter = {
  value: 23,
  inc() {
    this.value++;
  },
};

//todo Truyền các hàm làm đối số cho các hàm KHÁC

const greet = () => {
  console.log("hey guys");
};
document.querySelector(".a").addEventListener("click", greet);

//todo Hàm trả về TỪ hàm , Gọi các phương thức trên hàm:
console.log(counter.inc.bind(greet));

//! Higher-Order Functions
//? Một chức năng nhận một chức năng khác như một đối số, trả về một hàm mới hoặc cả hai
//? Điều này chỉ có thể thực hiện được nhờ các chức năng hạng nhất

//todo Hàm nhận về 1 hàm khác
const greet1 = () => {
  console.log("hey guys1");
};
document.querySelector(".a1").addEventListener("click", greet1);

//todo
function count1() {
  let count = 1;
  return () => {
    count++;
  };
}
console.log(count1());
