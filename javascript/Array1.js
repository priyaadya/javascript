//!print array values seperatly

function printAll(arr){
    var str="";
    for (let i = 0; i < arr.length; i++)
     {
        str=str+" "+arr[i];
        console.log(arr[i]);
        
     }
}
printAll([1,2,3,4,5,])