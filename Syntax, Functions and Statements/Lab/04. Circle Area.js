function TypeCheck(first){

    if (typeof(first) === 'number'){
        upper = first ** 2
        fianl  = upper * Math.PI;
        return `${fianl.toFixed(2)}`
    }
    else{
        return (`We can not calculate the circle area, because we receive a ${typeof(first)}.`)
    }
}
