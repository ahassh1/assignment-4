function  sendProposal(husbentbio, wifebio){

if(typeof husbentbio ==="object" && typeof wifebio ==="object" && !Array.isArray(husbentbio, wifebio) ){
    if(husbentbio.distrit===wifebio.distrit){
        console.log("proposole done");
    }
else{
    console.log("no that's not done yet");
}
}
else{
    console.log("invalid input");
}
}

const husbent = {
  name: "habib",
  age:23,
  distrit:"dhaka",
  email:"ahsaan@gmail.com"
}

const wife= {
    name:"shuba",
    age:22,
    distrit:"rangpur",
    email:"shubar@gmail.com"
}
sendProposal (husbent, []);