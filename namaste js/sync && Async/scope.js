//in case of c() the parent is a() and for a() the parent is global context and global there 
//is not any parent so it will be null

function a(){//fn a() is lexically inside thye global scope
    c();
    function c(){
        console.log(b);//function c() is lexically setting in a() function
    }
}
var b=10;
a();