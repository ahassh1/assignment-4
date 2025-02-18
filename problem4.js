function removeDuplicate(mainList){
    let newDawatlist = [];
    for(const relative of mainList){
       let isUnique = true; 
       for(const newRelative of newDawatlist){
        if(relative.name===newRelative.name && relative.mumber===newRelative.mumber){
            isUnique =false;
            break;
        }
       }
       if(isUnique){
        newDawatlist.push(relative)
       }
    }
    return newDawatlist;
}


const relatives =[
    { name:"polash", mumber : 3},
    { name:"shuba", mumber : 2},
    { name:"rahima", mumber : 4},
    { name:"shuma", mumber : 5},
    { name:"maddy", mumber : 4},
    { name:"polash", mumber : 3},
    { name:"freank", mumber : 2},
    { name:"polash", mumber : 3},
    { name:"shuba", mumber : 2},
];

// let sumtotal =0;
// for(person  of relatives){
//     sumtotal=sumtotal+ person.mumber;
// }
//     console.log(sumtotal);

const result = removeDuplicate(relatives);
console.log(result)