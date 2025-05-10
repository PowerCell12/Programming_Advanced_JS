function RangeSum(num1, num2){

    let sum = 0;
    num1 = Number(num1);
    num2 = Number(num2);

    for (let i = num1; i <= num2; i++){
        sum+= i;
    }

    return sum;
}
