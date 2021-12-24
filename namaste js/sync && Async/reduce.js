// numbers = [1,4,2,6,7];
// // let sum = 0;
// // for(let n of numbers){
// //  sum+=n;
// // }

// //reduce
// let sum = numbers.reduce((accumulater, currentValue)=>{
//     return accumulater+currentValue;
// });
// console.log(sum);

// // filter()

// const filtered = numbers.filter(function(value){
//     return value>2;
// })
// console.log(filtered);

// // Map()

// const mapped = numbers.map((n)=>{
//     return n*n
// })

// console.log(mapped)
// const numbers = [1,5,2,4,3];

// function binary(n){
//     return n.toString(2);
// }

// const output = numbers.map(function binary(n){
//     return n.toString(2);
// });

// const output = numbers.map((n)=>{
//     return n.toString(2);
// });

// const output = numbers.map((n)=>n.toString(2));
// //const output = numbers.map(binary);
// console.log(output)


const users = [
    {firstName: "Rohit", lastName: "Kumar", age: 22},
    {firstName: "Elon", lastName: "Musk", age: 45},
    {firstName: "Ratan", lastName: "Tata", age: 60},
    {firstName: "Mukesh", lastName: "Ambani", age: 45}
]

// const output = users.map((x)=>x.firstName+" "+x.lastName);
// console.log(output)

// const output = users.reduce(function(acc,curr){
//     if(acc[curr.age])
//     {
//         acc[curr.age]=++acc[curr.age]
//     }
//     else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{})
// console.log(output)

const output = users.filter((x)=>x.age>30).map(x=>x.firstName)
console.log(output)