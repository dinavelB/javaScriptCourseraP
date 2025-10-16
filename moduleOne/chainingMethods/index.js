const numbers = [34,546,66,46,64]

const filterNum = numbers.filter(nums => nums > 56);
const mapNum = filterNum.map(nums => nums += 10);

//this is how you chain a method array.
const combine = numbers.filter(nums => nums > 56).map(nums => nums += 10);


const userScores =  [45, 60, 75, 30, 90, 55]
let percentage = 10;
const result  = userScores.filter(nums => nums > 50).map(nums =>{
    const addedPercent = nums* (percentage/100)  
    const finalGrade = nums + addedPercent

    return finalGrade;
})

console.log(result)