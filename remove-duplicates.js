function remove_duplicates(arr){
    var result = [], item, obj = {};
    for(item of arr){
        if(obj[item]){
            continue;
        }
        obj[item] = 1;
        result.push(item);
    }
    return result;
}

console.log(remove_duplicates([1,2,3,3,5,'good','nice','nice']));