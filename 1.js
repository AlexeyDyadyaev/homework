function getMathResult(num, count) {
    if (typeof(count) !== 'number' || count <= 0) {
        return num;
    } 

    let result = '';
    let x = 0;
    for (let i = 0; i < count; i++){
       x = x + num;
       result += + x;
       if (i === (count-1)){
        return result;
       }
       result +='---';
    }
    return result;
}
console.log(getMathResult(3, -2) );