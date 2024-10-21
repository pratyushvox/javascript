// singleton

// object literals (one method)
 const mysym = Symbol("key1")


const jsuser = {
    name : "pratyush",
    "fullname" : "pratyush khadka" , 
    age : 20,
    location: "biratnagar",

    email:"pratyush@gmail.com",
    [mysym] : "mykey1", 

    isloggedin : false ,
    lastloggedin : ["monday" ,"saturday"],




}

//accesiing of object 
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser.email)
console.log(jsuser.name)
console.log(jsuser["fullname"] )
console.log(jsuser.fullname)
console.log( typeof(jsuser[mysym]))


jsuser.email = "pratyushkhadka@gmail.com"
// Object.freeze(jsuser) // now the object donot changes
jsuser.email = "jvsdjvds"
console.log(jsuser)

//adding funvtion on object
jsuser.greeting = function (){
    console.log("hello")
}
console.log(jsuser)
console.log(jsuser.greeting())

jsuser.greetingtwo = function(){
    console.log(`hello ${this.name}`)
    

}

console.log(jsuser.greetingtwo())


// delclaring objecusing constructor
//here everything is same like declaring above the only difference is it is singleton Object.

const user = new Object() //constructor way of declaring the object

const tinderuser = {

}
tinderuser.id = "pratyush"
tinderuser.name = "khadka"
tinderuser.isloggedin = false


const regularuser = {
    name : "pratyush",
    email : "pratyush@gmail.com",
    fullname : {
        userfullname :{
            firstname:"pratyush",
            lastname : "khadka",
        }
    }

}
console.log(regularuser.fullname.userfullname.firstname);

//merging object
 const object1 ={
    1:"a",
    2:"b",
    3:"c",

}
const object2 = {
    4:"d",
    5:"e",
    6: "f",

}
//
// const obj3 = Object.assign(object1,object2) //joininf two objects

// console.log(obj3)

const obj3 ={...object1, ...object2}

console.log(obj3)

console.log(Object.keys(tinderuser)) //orints the keys of the object
console.log(Object.values(tinderuser)) //prints the value of the object
console.log(tinderuser.hasOwnProperty("isloggedin")) //checks whthere the property is in object or not

//destructring object
const course = {
    coursename : "js",
    price : "999",
    courseinstructor : "ram"
}
const{courseinstructor} = course //another way of pointing the keys value of object just like .
console.log(courseinstructor) ;
const{courseinstructor:ins} =course ; // here i assgngs the courseinstructor name to ins 
console.log(ins)
console.log(course);
 // this is the way of destructring the obj

 
 

































 
