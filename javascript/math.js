var num=25.4;
const dec=num%1;
if(dec>=0.5){
    num=num+(1-dec);
}
else{
    num=num-dec;
}
console.log(num);