//The .map() method is used to transform the elements of an array
//  — it creates a new array with the results of applying a function to every element.

const numbers = [10,20,30,40,50,60]

const addFive = numbers.map(nums => nums > 10? nums + 5 : nums)

//the task is: return a new array of products that has an updated price from the tax
const products = [{
    name: 'Bread',
    price: 20,
    tax: 0.34
    },
    {
    name: 'Bread',
    price: 20,
    tax: 0.34
    },
    {
    name: 'Bread',
    price: 20,
    tax: 0.34
    }
]

const mapProducts = products.map((items) =>{
    const newPrice = items.price += items.price*items.tax;
    return {
        name: items.name,
        price: newPrice,
        tax: items.tax
    }

})
console.log(mapProducts)