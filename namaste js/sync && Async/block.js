// // var a =100;
let b=200;
function c(){
//     var a =10;//value of a will be modified for always bcz var is global scoped 
     var b=10;
//     const c=30;
//     console.log(a)
     console.log(b);//let and const are block scoped so we cannot access them out of the block
//     console.log(c)
}
c()
// console.log(a)
// // console.log(b);
// // console.log(c);


// // shadowing
// let a = 3;
// {
//     // var a = 4; this is illegal shadowing ,it gives syntax error
//     let a = 6;// this is legal
// }

// var d= 1;
// {
//     let d = 4;//this is legal 
// }
// var a = 2;
// var a = 1;
// console.log(a)