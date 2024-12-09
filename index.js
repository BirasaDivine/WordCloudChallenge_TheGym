const text=document.querySelector("#myParagraph").textContent;
//console.log(text);
const newText=text.replaceAll(".","").replaceAll(",","").replaceAll(";","").replaceAll(":","").replaceAll("\n"," ");
//console.log(newText);
const secondText=newText.split(" ");
//console.log(secondText);
const thirdText=secondText.filter(x=>x.length >= 1)
let textObject={};
 for(let i=0;i<thirdText.length;i++){
     let counter = 0;
    for(let y=0;y<thirdText.length;y++){
        if(thirdText[y] == thirdText[i]){
            counter++
        }
    }
    textObject[thirdText[i]] = counter;

 }
console.log(textObject)
let valuesArray=Object.values(textObject);
console.log(valuesArray);
let uniqueArray=new Set(valuesArray)
let SortingArray=Array.from(uniqueArray) // Slice to get the twelve most occuring 
//console.log(SortingArray.sort((a,b) => b - a));
//let final_array = new Array();
const newOne = Object.entries(textObject).sort(([,a],[,b]) => b-a)
console.log(newOne.slice(0,12))
