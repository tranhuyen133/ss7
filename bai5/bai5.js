"use strict";
let variableAny;
let variableUnknown;
// Gán giá trị cho biến any và biến unknown
variableAny = 5;
variableUnknown = "Hello";
// Truy cập thuộc tính của biến any và biến unknown
console.log("Biến any:", variableAny.toFixed(2)); // Output: Biến any: 5.00
// console.log("Biến unknown:", variableUnknown.toFixed(2)); // Lỗi: Object is of type 'unknown'.
// Ép kiểu và truy cập thuộc tính của biến unknown
if (typeof variableUnknown === "number") {
    console.log("Biến unknown:", variableUnknown.toFixed(2)); // Output: Biến unknown: Lỗi vì variableUnknown không chắc chắn là number
}
else {
    console.log("Biến unknown không phải là một số.");
}
