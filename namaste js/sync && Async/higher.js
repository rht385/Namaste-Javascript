const companies = [
    {firstName: "Rohit", lastName: "Kumar", age: 22},
    {firstName: "Elon", lastName: "Musk", age: 45},
    {firstName: "Ratan", lastName: "Tata", age: 60},
    {firstName: "Mukesh", lastName: "Ambani", age: 45}
]

const ages = [22, 21, 23, 20, 34, 32, 33, 19, 35]

companies.forEach(function(company){
    console.log(company.firstName)
})

const getAge = ages.filter(x => x>=20)
console.log(getAge)