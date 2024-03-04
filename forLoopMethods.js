// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

array = [1,2,3,4,9]

// result = [2,4,6,8]

result =[]
// array.forEach((ele, index, array) => {
//     console.log(index, " -> ", ele)
//     result.push(ele * 2)
// })

// map() method: array.map()
// map always takes a func as arguments: that func is called cb

function double(num) {
    return num*2
}
let doubledArray = array.map((ele) => double(ele))

// console.log(result)
console.log(doubledArray)
//console.log(array)
// console.log(array.indexOf(4))

// find()
// filter()
// reduce()

arr2 = [
    ["vivek", "vishal", 2140124],
    ["Sumit", "Narayan"]
    ]
console.log(arr2)
let arr = array.filter(ele => ele % 3 == 0)
console.log(arr)

numbers = [2140128, 2140148, 2140124]
for (number in numbers) {
    console.log(numbers[number])

}