String.prototype.repeat = function(time) {
    let result = '';
    while(time > 0) {
        result += this;
        time--;
    }
    return result;
}

console.log('test'.repeat(5));
