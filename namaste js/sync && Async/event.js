console.log('start')

// setTimeout(function cb(){
//     console.log('callback')
// }, 5000);


document.getElementById('btn')
.addEventListener('click',function cb(){
    console.log('callback')
})

console.log('end')
//when this code starts executing the global context is created and pushed in the call stack
//and in the console output will be start and for the setTimeOut() fn it will stay for 5 sec
//js does not wait for none so next console will also executed
//and the global context is now deleted 
// after 5sec the setTimeout part will be executed and a executing context created for callback fn 
// and pushed in the call stack and the popped and give th3e output


console.log('start')

setTimeout(function cbt() {
    console.log('callback')
}, 5000);

fetch('https://api.netflix.com')
.then( function cbf(){
    console.log('getting netflix')//let say it takes 50ms to get response from server
});

console.log('end')