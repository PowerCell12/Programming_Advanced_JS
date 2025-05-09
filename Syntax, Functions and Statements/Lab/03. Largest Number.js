function BiggestNumber(first, second, third){

    if (first > second && first > third){
        return `The largest number is ${first}.`;
    }
    else if  (second > first && second > third){
        return `The largest number is ${second}.`;
    }
    else if  (third > first && third > second){
        return `The largest number is ${third}.`;
    }
    


}
