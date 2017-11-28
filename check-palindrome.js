function case_palindrome(string){
    string = string.toLowerCase();
    string = string.replace(/[^a-z0-9]/,'');
    return string === string.split("").reverse().join("");
}

console.log(case_palindrome('race car'));