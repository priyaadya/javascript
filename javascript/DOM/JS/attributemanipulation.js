function createAttr()
{
    var marq=document.getElementById("marq");
    marq.setAttribute("bgcolor","gold");
    marq.setAttribute("scrollamount","10");
    marq.setAttribute("direction","left");


}
function readAttr()
{
    var marq = document.getElementById("marq");
    console.log(marq.getAttribute("direction"));
    console.log(marq.getAttribute("bgcolor"));
}

function removeAttr()
{
    var marq= document.getElementById("marq");
    marq.removeAttribute("bgcolor");
}