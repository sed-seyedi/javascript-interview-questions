function fibonacci(nth){
    if(nth < 2){
        return nth;
    }
    return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(10));