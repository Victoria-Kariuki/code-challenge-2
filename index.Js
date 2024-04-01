// an ascending array
function ascendingArray(low,high){
    const length =Math.abs(Math.ceil((low-high))/steps) +1
    const steps = Math.sign(high-low);
    return Array.from({length}, (_,i) =>low + (i *steps) )
}
console.log(arrayGenerate(4,7));
//should give output no from 4 to 7
console .log(arrayGenerate(-4,7))
//should give output no from -4 to 7