function findName(list){
  let temp =[];

  for(let i=0; i<list.length; i++){
    const wifeName = list [i];
    if(wifeName.includes("h")){
        temp.push(wifeName);
    }
  }
  return temp;
}
const wifeName = ["arhima", "himika", "shuba", "nusrat", "jahan","omaorun"];
const newWifeList= findName(wifeName);
console.log(newWifeList);
