//The .reduce() method reduces an array to a single value 
//  by repeatedly applying a function to each element, accumulating a result.

//the reduce method, adds all the values to make it one.
//the accumulator param is the one that holds or adding a new value to the existing value (curentValue)
const numbers = [10,20,30,40,50]

const sumUp = numbers.reduce((oldValue, currentValue)=>{
    currentValue += oldValue;
    return currentValue;
})


//the task is you need to sum up all the marks of one student using the reduce method.

const student  = [
    {name: 'Dinavel', points: 40},
    {name: 'Andrew', points: 50},
    {name: 'Dinavel', points: 34},
    {name: 'Andrew', points: 43},
    {name: 'Dinavel', points: 76},
    {name: 'Andrew', points: 45},
    {name: 'Dinavel', points: 23},
    {name: 'Andrew', points: 23},
]

const allMarks = student.reduce((totalMarks, currentObjMarks) => currentObjMarks.name === 'Dinavel'? totalMarks += currentObjMarks.points : totalMarks, 0)//the zero here is the starting point

console.log(allMarks)