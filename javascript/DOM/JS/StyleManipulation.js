//get the deafultstye
function sample()
{
    let div=document.getElementById("box");
    let defaultStyle1=getComputedStyle(div);
    console.log(defaultStyle1.backgroundColor);

    let h1=document.querySelector("h1");
    let defaultStyle2=getComputedStyle(h1);
    console.log(defaultStyle2.margin);
}


//read the style applied

function sample()
{
    let div=document.getElementById("box");
    console.log(div.style.backgroundColor);
    console.log(div.style.width);
    console.log(div.style.height);
}


function sample()
{
    //for creating
    let div=document.getElementById("box");
    div.style.border="solid 5px black";
    div.style.backgroundColor = "crimson";
    div.style.transform="rotate(45deg)"
    div.style.transform="1s";



   /// using body 
   document.body.style.backgroundColor="aqua";


}