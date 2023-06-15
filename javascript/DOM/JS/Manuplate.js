function addTeam(){
    let newList=document.createElement("li");
    let teamNames = document.getElementById("inp").value
    newList.innerText=teamNames;
    let ol=document.getElementById("teams");
   // ol.append(newList);
   //ol.prepend(newList);

   let olChilds=ol.children;
   for(let i=0;i<olChilds.length;i++)
   {
    if(olChilds[i].innerText==teamNames)
    {
    alert("team already present");
    return;
    }
   }
//   ol.append(newList);
  ol.prepend(newList);
}