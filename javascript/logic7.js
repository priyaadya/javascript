// find num2 is present as inside num1 or Not.
// input  -> num1 = 5126 num2 = 12 | output = true
   //input -> num1 = 385 num2 = 7 | output = false


function findNum(num1 ,num2){
    if(num1%10==num2)
    {
        console.log(num2);
    }
    else{
        console.log(num1);
    }

}

findNum(5126, 12)