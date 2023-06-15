function printSum(a,num){
    let count=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==num){
            count++;
        }
    }
}
console.log(printSum([1,2,3,3,4,5],3))