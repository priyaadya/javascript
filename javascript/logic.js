//Give 2 int values greater than 0,return whichever value is nearest to 21 without going over. return 0 if
//they both go over

var a=21;
var b=22;
if(a>21 && b>21){
    console.log(0);
}
else if((a>b && a<=21)||(b>21)){
    console.log(a);
}
else{
    console.log(b);
}