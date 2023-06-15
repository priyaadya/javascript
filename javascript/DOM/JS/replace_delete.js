function replaceTag()
{
    let teamName=document.getElementById("inp").value
    let newList=document.createElement("li");
    newList.innerText=teamName;


    let ol=document.getElementById("teams");
    ol.replaceChild(newList,ol.lastElementChild);
}
function removeTag()
{
    let ol=document.getElementById("teams");
    ol.removeChild(ol.lastElementChild);
}