function printSum(a,num){
    for(let i=0; i<a.length;i++){
        if(a[i]==num){
            return true;
        }
    }
    return false;
}
console.log(printSum([1,2,3,4,5],3));
console.log(printSum([1,2,3,4,5],8));