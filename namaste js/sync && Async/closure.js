// function x(){
//     var a=7;
//     function y(){
//         console.log(a)
//     }
//     y();
//    return y;

// }
//var z = x();
//console.log(z)
// x() 

// ...console.log.apply.apply.apply.apply.apply.apply
// z()


// function x(){
//     var a=7;
//     function y(){
//         console.log(a)
//     }
//     a=100;
//     return y;
// }
// var z= x() ;
// console.log(z);

// // after thousands of line of code
// z();

function z(){
    var b =100;
    function x(){
        var a=7;
        function y(){
            console.log(a,b)
        }
        y();
    }
    x();
}
z();