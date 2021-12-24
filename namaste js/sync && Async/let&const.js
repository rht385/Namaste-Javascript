console.log(a);//a is hoisted ,it gives reference error
//from hoisting of a to assigning/initializing a value of a =10 ,this phase is called 
//temporal deadzone,,

//reference error when js engine is trying to find in memory space 
//but not able to acces it this it gives refence error
let a = 10;
var b = 100;
 


 let a = 12; //we can not initialize dublicate value in case of let
//it gives syntax error


var a = 13;//we can not do this also bcz of above reason,gives syntax error

//window object is also known as global object
//in console if we put window.b we get 100
//this.b and window.b are smae thing bcz here (this ) is representing window object

// but if we put window.a we get undefined bcz let and const 
// variable are stored some separete memory space


let a;//in case of let we can declare a variable and not initialize any value 
a=10; //and initialze value anywhere it does not give any error


//but in case of const we can not do only declaration of variable ,we have to 
//do initialization also at the time of declaration


// const b;this is wrong this will give type error
// b=10;

const b=100;