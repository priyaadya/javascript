//find the subString is present inside the maiString or not


function replace(mainStr,subStr,rplcStr){
    for(let i=0;i<mainStr.length;i++){
        let word="";
        for(let j=i;j<i+subStr.length;j++){
            word=word+mainStr[j];
        }
        if(word==subStr){
         let str=MainStr.substring(0,i) + rplcStr + mainStr.subString(i+subStr);
         console.log(str);
         return;   
        }
    }
    console.log(mainStr);
}
replace("hello world How are you","wor","xyz");