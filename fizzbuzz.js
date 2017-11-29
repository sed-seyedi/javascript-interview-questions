function fizzbuzz(){
    var message;
    for(var i = 1; i < 101; i++){
        message = i;
        if(i % 3 == 0){
            message = 'fizz';
        }
        if(i % 5 == 0){
            message = 'buzz';
        }
        if(i % 15 == 0){
            message = 'fizzbuzz';
        }
        console.log(message);
    }
}

fizzbuzz();