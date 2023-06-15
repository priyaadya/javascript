//array reverse

function reverse(a){
    for(let i=0,j=a.length-1;i<j;i++,j--)
    {
        let temp=a[i];
        a[i]=a[j];
        a[j]=temp;
    }
    console.log(a);

    }
    reverse([1,2,3,4,5,6,7]);