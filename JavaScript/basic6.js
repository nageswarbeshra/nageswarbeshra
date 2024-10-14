//object is collection of properties

let person = {
    firstName:'Time',
    lastName:'Joe',
       ages : 25,
    fullname:function()
    {
        console.log(this.firstName+this.lastName)
    }
}
console.log(person.fullname())
console.log(person.lastName)
console.log(person['lastName'])
person.firstName = 'Tim Dane'
console.log(person.firstName)
person.gender = 'Male'
console.log(person)
delete person.gender
console.log(person)

console.log('gender' in person)


for(let key in person)
{
    console.log(person[key])
}