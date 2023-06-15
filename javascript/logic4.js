// Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1),
// while the other is "far", differing from both other values by 2 or more.
// Note: Math.abs(num) computes the absolute value of a number.


var a=10;
var b=9;
var c=8;


var ab=Math.abs(a-b);
var ac=Math.abs(a-c);
var bc=Math.abs(b-c);


if(ab<=1 && bc>=2 && ac>=2){
    console.log(true);
}
else if(ac<=1 && bc>=2 && ab>=2){
    console.log(true);
}
else{
    console.log(false);
}