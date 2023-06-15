function sample(){
    let genders=document.getElementsByName("gender");
    for(let i=0;i<=genders.length;i++){
        if(genders[i].checked){
            console.log(genders[i].value);
        }
    }
}


function sample(){
    let skills=document.getElementsByTagName("skills");
    for(let i=0;i<=skills.length;i++){
        if(skills[i].checked)
        {
            console.log(skills[i].value);
        }
    }
}