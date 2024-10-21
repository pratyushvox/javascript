function saymyname (){
    console.log("p")
    console.log("r")
    console.log("a")
    console.log("t")
    console.log("y")
    console.log("")
}
//saymyname()

// function add(a,b){
//     addition = a+b

//     console.log(addition)
// }
//  add(5,6)

function addition(num1,num2){
    let add = num1+num2 
    return add

}
const result = addition(6,9)
console.log(result)


function loginusermessage(username){

    if(username=== undefined){
        console.log("please enter a name of the user name ")
        return

    }
    else{

    
    return `${username} just logged in!!!!!`
    }


}
const log = loginusermessage()
console.log(log)
 
function calculate(... num1){
    return num1

}
console.log(calculate(200,500,600))

const user={
    username: "pratyush",
    price:199
}
function handleobj(anyobj){
    console.log(`user name is ${anyobj.username} and price is${anyobj.price}`)

}
handleobj(user)
handleobj({
    username:"khadka",
    price:522
})
const myarray=[200,400,100,600]

function returnarray(getarray){
    return getarray[1]

}
console.log(returnarray(myarray));

const name = ["p","a","b"]
function getname(hmm){
    return hmm[2]
}
console.log(getname(name))

