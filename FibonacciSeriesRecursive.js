//[0,1,1,2,5,8,13,21]
function fibonacci(n) {
    if(n == 0){
        return [0];
    }
    elseif(n == 1){
        return [0, 1];
    }
    else{
        //calculate array with nth element array
        var fibo = fibonacci(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

var result = fibonacci(10);
console.log(result);