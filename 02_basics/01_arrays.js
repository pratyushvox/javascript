//array
const myarray = [0,1,2,3,4,5]
console.log(myarray[0]);


// array methods

myarray.push(6) //add the value in arrays
console.log(myarray);
myarray.pop() //delets the last value in array
console.log(myarray);
myarray.unshift(100); // put the value 100 on the start of the array
console.log(myarray);
myarray.shift();
console.log(myarray)
myarray.shift(); //deletes the first value

console.log(myarray)

const newarr = myarray.join() // hered comes the value of myarray with datatypes string

console.log(newarr)

//slice and splice
const myn1 = myarray.slice(1,3);
console.log(myarray)
console.log(myn1)
console.log("B",myarray)
const myn2 = myarray.splice(1,3)
console.log(myn2)
console.log("c",myarray)

// here in slice it slices the arrays within the range and doesnot modify the array but in splice it slices the array to range and also modifies the array.

const name = ["raj","pratyush","neeshan","samar"]
const caste = ["singh", "khadka" , "gurung" , "koirala"]

// name.push(caste)
// console.log(name) // here it pushes on the same array

 const fullname = name.concat(caste) // here it makes new array
console.log(fullname)

console.log("pratyush")
console.log(Array.isArray("pratyush"))
console.log(Array.from("pratyush"))

console.log(Array.from ({name:"pratyush"}))










