//delete the first element from an array


function deleteFirst(a){
    for(let i=0;i<a.length;i++){
        a[i]=a[i+1];
    }
    a.length--;
    console.log(a);

}
deleteFirst([1,2,3,4,5]);