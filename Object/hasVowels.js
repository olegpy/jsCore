String.prototype.hasVowels = function() {
    let vowels = 'a,e,i,o,u,y';
    let arrString = this.split('');
    // how to get for string text
    // let str = this;
    for(var i = 0; i < arrString.length; i++) {
        if (vowels.indexOf(arrString[i]) != -1) {
            return true;
        }
    }
    return false;
}

console.log('qqqa'.hasVowels());