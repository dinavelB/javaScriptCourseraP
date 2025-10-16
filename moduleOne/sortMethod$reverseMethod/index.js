//sort method   
//this is how you use sort() method, the a-b is increasing and b-a is decreasing. 
const books = [
    {name: 'Memoirs of geisha', id: 1},
    {name: 'Law of Attraction', id: 5},
    {name: 'Veil', id: 2}
]

const sortByIdIncreasing = books.sort((a,b) => a.id - b.id)

//reverse method
const numbers = [2,4,5,6,78,4,2]

const reversed = numbers.reverse()
console.log(reversed)
