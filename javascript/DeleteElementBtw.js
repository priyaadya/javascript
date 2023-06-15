//delete a element from a array


function deleteValues(arr,start,deleteCount){
    for(let i=start;i<arr.length;i++){
        arr[i]=arr[i+deleteCount];
    }
    arr.length=arr.length-deleteCount;
    console.log(arr);
}


deleteValues([1,2,3,4,5],2,3);
deleteValues([1,2,3,4,5],0,0);
deleteValues([1,2,3,4,5],0,0);
