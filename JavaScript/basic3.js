var marks = Array(6)
var marks = new Array(20,40,35,12,37,98)

var marks = [20,40,35,12,37,98]
submarks = marks.slice(2,5)
console.log(submarks)
console.log(marks[2])
marks[3] = 14


console.log(marks.length)
marks.push(65)


marks.pop()


marks.unshift(12)
console.log(marks)
console.log(marks.length)

console.log(marks.indexOf(98))

//120 present in array

console.log(marks.includes(20))

marks.slice(2,5,)

var sum = 0

for(let i = 0;i<marks.length;i++)
{
    // console.log(marks[i])
    sum = sum + marks[i]
}
console.log(sum)


//reduce filter map

var total = marks.reduce((sum,Mark)=>sum+Mark,0)
console.log(total)


//create new array with even numbers of scores array [12,14,16]
var scores = [12,13,14,15,16,17,8,99,24,66]
var evenscores = []
for(let i =0;i<scores.length;i++)
{
    if(scores[i]%2 == 0)
    {
        evenscores.push(scores[i])
    }
}
console.log(evenscores)

let newfilterscores = scores.filter(m=>m%2==0)
console.log(newfilterscores)

//map function
let maparray = newfilterscores.map(score=>score*3)
console.log(maparray)

let totalval = maparray.reduce((sum,val)=>sum+val,0)
console.log(totalval)

var scores1 =  [12,13,14,15,16,17,8,99,24,66]
let sumvalue =  scores1.filter(m=>m%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumvalue)

let fruits = ["banana","mango","pomegrante","apple"]
fruits.sort()
console.log(fruits)
console.log(fruits.reverse())

var scores1 =  [12,13,14,15,16,17,8,99,24,66]

console.log(scores1.sort((a,b)=>b-a))