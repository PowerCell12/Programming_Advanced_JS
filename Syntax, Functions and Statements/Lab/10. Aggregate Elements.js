function Operations(array){

    let sum = 0;
    let sum1  = 0;
    let concat = "";

    for (let i = 0; i < array.length; i++){
        sum += array[i];
        sum1 += 1 / array[i];
        concat += array[i];


    }

    console.log(sum);
    console.log(sum1);
    console.log(concat);
}
