function harmless_ransom_note(note,magz){
    var dict_note = {}, dict_magz = {};
    note.toLowerCase()
        .replace(/[^a-z0-9]/g,'')
        .split("")
        .forEach(function(letter){
            if(!dict_note[letter]){
                dict_note[letter] = 0;
            }
            dict_note[letter]++;
        });
    magz.toLowerCase()
        .replace(/[^a-z0-9]/g,'')
        .split("")
        .forEach(function(letter){
            if(!dict_magz[letter]){
                dict_magz[letter] = 0;
            }
            dict_magz[letter]++;
        });
    for(key in dict_note){
        while(dict_note[key] > 0){
            if(!dict_magz[key] || dict_magz[key] < 1){
                return false;
            }
            dict_magz[key]--;
            dict_note[key]--;
        }
    }
    return true;
}

console.log(harmless_ransom_note('g o B o','goOb'));