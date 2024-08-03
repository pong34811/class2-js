function printnumber (isnum){
    for (let i = 2; i <= isnum; i++) {
        if( isPrime(i)){
            console.log(i)
        }
        
    }
}
printnumber(20);

function isPrime(num){
    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

