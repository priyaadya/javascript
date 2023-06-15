function replace(mainStr,subStr,rplcStr){
    if(mainStr.includes(subStr))
    {
        let i=mainStr.indexOf(subStr);
        let str=mainStr.subString(0,i) + rplcStr + mainStr()
    }
}