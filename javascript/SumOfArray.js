//print the sum of an array


function printSum( a ){
    let sum = 0;
    for(let i=0;i<a.length;i++)
    {
        sum = sum+a[i];
    }
    console.log(sum);
}
printSum([1,2,3,4,5]);