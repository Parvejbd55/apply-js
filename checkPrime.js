
function isprime(n){
    for(i = 2; i < n; i++) {
        //console.log(i, n % i);
        if(n % i == 0) {
            return 'Not a Prime Number';
        }
    }
    return'Your Number is Prime Number';
}

var result = isprime(129);
console.log(result);
