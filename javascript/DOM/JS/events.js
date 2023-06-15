let button = document.getElementById("btn");

//handling evevt using event listener as a property
button.onclick=applyStyle;

//handling events using event listener as a method
button.addEventListener("click",applyStyle)



function applyStyle()
{

    let h1=document.getElementById("head1");


    h1.style.letterSpacing="5px";
    h1.style.wordSpacing="15px";
    h1.style.transition="0.5s linear"
    console.log("executed");

}