function fun(...args){
    let sum = 0;
    for (i of args);{
        sum += 2;

    }
    return sum;
    
}

console.log(fun(1,2));
console.log(fun(1,2,2,3,6));
console.log(fun(7,5,9,8,8,7,8))