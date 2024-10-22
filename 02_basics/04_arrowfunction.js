// arrow function

const user ={
    username:"pratyudsh",
    price : 999,
    welcomemessage:function(){
        console.log(`you are welcome ${this.username}`)
        console.log(this)
    }
}

user.welcomemessage()

user.username = "sam"
user.welcomemessage()

function chai(){
    console.log(this)
}
chai()

const name  = ()=> {
    let username = "pratyush"
    console.log(this.username)

}

name()


const addtwo = (num1,num2)=> {
    return num1 +num2 
}
console.log(addtwo(9,5))

const addtwoo = (num1, num2)=>(num1+num2)

console.log(addtwoo(6,7))
// this way can also be used here we havenot used a return keyword we can say that if we used curly braces return keyword should be used but if paranthesis are used no need of return keywords


const myarray =[2,5,4,6]
