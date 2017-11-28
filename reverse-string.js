String.prototype.reverse = function reverse_string(){
    return this.split("").reverse().join("");
};

console.log("Good".reverse());