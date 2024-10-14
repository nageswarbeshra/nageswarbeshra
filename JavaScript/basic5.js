const Person = require('./basic7')

let day = 'tuesday '
console.log(day.length)
let subDay = day.slice(0,4)
console.log(subDay)
console.log(day[1])
let splitday = day.split("s") 
console.log(splitday[1].trim().length)



let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)


let newQuote = day+ "is funday"
console.log(newQuote)
let val = newQuote.indexOf("day",5)
console.log(val)
let count = 0
let value = newQuote.indexOf("day")
while(value!==-1)
{
    count++ 
    value = newQuote.indexOf("day",value+1)
}
console.log(count)


let person = new Person("Chris","Edward")
console.log(person.fullName())
