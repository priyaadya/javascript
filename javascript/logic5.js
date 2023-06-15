// For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more,
//  so 15 rounds up to 20. Alternately,
//   round down to the previous multiple of 10 if its rightmost digit is less than 5, 
//   so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. 
//   To avoid code repetition, write a separate helper "public int round10(int num) {" and call it 3 times. 
//   Write the helper entirely below and at the same indent level as roundSum().

function roundoff(num){
    var lastDigit = num%10;
    if(lastDigit>=5){
        return num + (10 - lastDigit);
    }
    else{
        return num - lastDigit;
    }
}

function roundSum(a , b, c){
    var x= roundoff(a);
    var y = roundoff(b);
    var z = roundoff(c);


    console.log(x + y + z);
}

roundSum(26,12,58);