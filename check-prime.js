function case_prime(number){
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

console.log(case_prime(14));