//sorting an array

function sort(a){
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                let temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    console.log(a);
}
sort( ['d','a','b','c']);
sort([4,5,6,7,1,2]);
sort(["priya","divya","shreya"]);