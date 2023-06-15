//we want to make a row of bricks that is goal inches
//We have a number of small bricks(1 inches) and big bricks (5 inches each)
//Return true if it is possible to make the goal by choosing from the given bricks

var small=1;
var big=2;
var goal=9;

if(small*1+big*5>=goal && goal%5<=small){

    //combination exceed goal && requirement should be less than supply
    console.log(true);
}
else{
    console.log(false);
}