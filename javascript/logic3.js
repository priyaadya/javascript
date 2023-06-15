// We want make a package of goal kilos of chocolate. 
// We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, 
// assuming we always use big bars before small bars. Return -1 if it can't be done.


var small=4;
var big=1;
var goal=7;


if(small+big*5>=goal && goal%5<=small){
    if(goal/5<=big){                //big bars given is more or equal

        console.log(goal%5);        //use all bars
    }
    else{                           //big bars given is lesser than req

        console.log(goal-big*5);    //so use onle what they have given
    }
}
else{
        console.log(-1);
}