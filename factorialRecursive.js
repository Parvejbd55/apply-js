// 0!! = 1
//6! = 1*2*3*4*5*6
//8! = (8-1)!*8
//n! = (n-1)!*n
function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

var result = factorial(10);
console.log(result);