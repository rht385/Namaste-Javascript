
// setTimeout(function (){
//     console.log('timer')
// }, 5000);

// function x(y){
//     console.log('x');
//     y();
// }
// x(function y(){
//     console.log('y');
// })

function addevet(){
    let cnt=0;
    document.getElementById('onclick').addEventListener('click',function xyz(){
        console.log("button clicked ",cnt++)
    })
}
addevet()

