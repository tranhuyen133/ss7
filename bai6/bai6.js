"use strict";
// Phân biệt giữa 2 kiểu trả về void và never, cho ví dụ minh họa.
// Void:
// void được sử dụng khi một hàm không trả về bất kỳ giá trị nào.
// Nó thường được sử dụng cho các hàm không có lệnh return hoặc chỉ có lệnh return không trả về giá trị.
function greet() {
    console.log("Hello!");
    // Hàm này không trả về bất kỳ giá trị nào, chỉ in ra một thông điệp.
}
const result = greet(); // Hợp lệ
console.log(result); // Output: undefined
// Never:
// never được sử dụng khi một hàm không bao giờ hoàn thành hoặc khi nó luôn throw ra một exception hoặc có một vòng lặp vô hạn.
// Nó thường được sử dụng cho các hàm không thể kết thúc hoặc khi một hàm throw một exception mà không bao giờ được bắt.
function throwError(message) {
    throw new Error(message);
    // Hàm này luôn throw ra một exception và không bao giờ trả về giá trị.
}
function infiniteLoop() {
    while (true) {
        console.log("This is an infinite loop!");
    }
    // Hàm này có một vòng lặp vô hạn và không bao giờ kết thúc.
}
