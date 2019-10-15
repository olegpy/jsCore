String.prototype.hasConsonants = function() {
    let consonants = 'b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,z';
    let arrString = this.split('');
    // how to get for string text
    // let str = this;
    for(var i = 0; i < arrString.length; i++) {
        if (consonants.indexOf(arrString[i]) != -1) {
            return true;
        }
    }
    return false;

}

console.log('aqw'.hasConsonants());