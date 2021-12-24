

//the diffiorence b/w these two fn comes into picture in hoisting


// What is a Function Statement or function declaration in JS
function a(){
    console.log('this is what')
}

// function expression
var b = function(){
    console.log('this is me')
}

a();
b();

// What is an Anonymous Function in JavaScript
// function (){

// }// this type fn are used to assign in a variable

// What are Named Function Expressions in JS
var b = function as(param1,param2){
    console.log('this is me')
}
b(1,2);

//the property of a functions used as values in another is called first class fn

var b = function as(param1){
    console.log(param1)
}

function xyz(){

}
b(xyz);
// b(function(){

// })