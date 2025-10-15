
//find method is a method that i use when finding a specific value or attribute orf an array.

const persons = [
    {name: 'Dinavel', personality: 'Aloof', hobby: 'practicing JS'}
]

const whoPersonality = persons.find((person)=> {
    if(person.personality === 'Aloof'){
        console.log(person)//avoid console log fpr this kind of method. not recommended
    }
    else {
       console.log('yo can find this person with that personality')
    }
})

//ypu cans till need the find()method if an object ou were looking for is on the inside of the array
function whosThePerson (personality, person){
    const thePerson = person.find(p => p.personality === personality) //person is the param array, personality is the string, person.find()
    if(thePerson){
        return thePerson
    } else {
        return 'cannot find the person here'  
    }
}   

console.log(whosThePerson('Aloof', persons))
