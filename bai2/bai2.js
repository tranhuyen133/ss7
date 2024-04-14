"use strict";
// Khai báo biến có kiểu dữ liệu là mảng các số
let numbers = [1, 2, 3, 4, 5, 6];
// Duyệt qua mảng và in ra các số thỏa mãn điều kiện
console.log("Các số lớn hơn 2 và nhỏ hơn 5:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 2 && numbers[i] < 5) {
        console.log(numbers[i]);
    }
}
