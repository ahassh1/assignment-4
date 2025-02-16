function market(totalMoney, fish , meat, oil, rice){
    const totalCost  = fish + meat + oil + rice;
    const sum = totalMoney - totalCost;
    return sum;
   
}
totalMoney =1500;
const fish =399;
const meat =200;
const oil =368;
const rice =299;

const returnMoney = market (totalMoney, fish , meat, oil, rice);
console.log(returnMoney);