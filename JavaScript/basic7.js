module.exports = class person
{

    age = 24
    get location()
    {
        return "canada"
    }
    //constructor is method which executes by default when you create object of the class
    constructor(firstName,lastName)
    {
        this.firstName=firstName
        this.lastName=lastName
    }
    //method
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }


}
// let person = new person()
// console.log(person.age)
