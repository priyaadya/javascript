//add an element for the first position of an array


function addFirst(a,newValue){
    for(let i=a.length;i>0;i--){
        a[i]=a[i-1];
    }
    a[0]=newValue;
    console.log(a);

}
addFirst([1,2,3,4,5],100);