let s = "You have to pay attention to yourself no one is really care about you";

let words = s.split(/\W+/).filter(x => x.length >= 3);
console.log(words)


const users = [
    {firstName: "Rohit", lastName: "Kumar", age: 22},
    {firstName: "Elon", lastName: "Musk", age: 45},
    {firstName: "Ratan", lastName: "Tata", age: 60},
    {firstName: "Mukesh", lastName: "Ambani", age: 45}
]

const output = users.filter((x)=>x.age>30).map(x=>x.firstName)
console.log(output);


numbers = [1,4,2,6,7];
// let sum = 0;
// for(let n of numbers){
//  sum+=n;
// }

//reduce
let sum = numbers.reduce((accumulater, currentValue)=>{
    return accumulater+currentValue;
});
console.log(sum);
