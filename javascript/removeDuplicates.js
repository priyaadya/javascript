//Remove duplicates elements from an array without taking any new array

function removeDups(a,num){

    let count=0;
    for(let i=0;i<a.length;i++){
        if(a[i]==num){
            count++;
    }
}
console.log(count);
}

removeDups([1,2,3,1,2,1,3,4,4,2,4,4,6],6)