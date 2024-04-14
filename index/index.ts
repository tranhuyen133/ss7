/*
        1.Array

*/
     
let numbers:number[]=[1,2,3,4];
//khai báo mảng numbers các phần tử trong mảng number phải là number\

let students:string[]=["hoa","hong","huệ"];

/*
  2.object
*/
let obj:{name:string,address:string,id:number}={
    name:"minh thu",
    address:"hà nội",
    id:1
}
let obj1:{
    name:string,
    address:string,
    id:number
}={
    name:"minh thu",
    address:"hcm",
    id:15,
}

/*
            3.ENUM
*/
enum Role{
    ADMIN//sẽ đánh từ số0
    USER

}




/*

void: áp dụng với function
    khi hàm không trả về kết quà gì?
    -khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu trả về của hàm

*/


function sayHello():void{
        console.log("hello");
        
}
sayHello();

function sum(a:number,b:number):number{
    return a+b;
}
console.log(sum(3,5));


/*
        5.Unknown
        tương tự kiểu dữ liệu any nhưng chặt hơn
        khi dùng any thì kiểu dữ liệu truyền vào là gì cũng được
*/
function test(a:any){
    console.log(a.toUpperCase());//viết hoa từ đó lên
}
test("text")

function test1(a:unknown){
    //bắt buộc kiểm tra kiểu dữ liệu trước khi đi thực hiện phép tính
    if(typeof(a)==="String"){
        console.log(a.toUpperCase());
    }
         
}
test("text")
/*
    6.Type Never
    thuowfng dufng trong vong lặp kh có điểm dừng
    để đo giá gtri
*/
function typeNever():never{
    let a:number=1;
    while (true){
        console.log("giá trị a",a++);
    }


}
//typeNever
