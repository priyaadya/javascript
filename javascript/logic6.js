//print true if a number is divisible by  or 5 but not both.

function find(num)
{
    if((num%3==0 && num%5!==0)||(num%3!=0 && num%5==0)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

find(15);