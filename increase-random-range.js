function rand5(){
    return Math.round(Math.random() * 5);
}

function rand8(){
    // using only rand5();
    return Math.round((rand5() / 5) * 8);
}

console.log(rand8());