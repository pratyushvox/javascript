//loops
//for loop
for(let i = 0; i<10 ; i++){
    const number = i ;
    if (number == 7 ){
        continue
    }
    console.log(i)

}

for(let i = 0 ; i<=100 ; i++){
    console.log(`outerloop ${i}`)
    for(let j = 0; j<=10; j++){
        // console.log(`innerloop value ${j} and innerloop${i}`)
        console.log(i + '*' + j + '=' +  i*j )


    }




}

let myarray = ["flash", "batman", "superman"]

for (let i = 0 ; i< myarray.length ;  i++){
    const element = myarray[i] ;
    console.log(element)
}

//break and contiue
for(let i =0 ; i<=20 ; i++){
    if(i  == 5){
        console.log("detected 5") 
        break ;
    }
    console.log(`value of i is ${i}`)

    

}
for(let i =0 ; i<=20 ; i++){
    if(i  == 5){
        console.log("detected 5") 
        continue ;
    }
    console.log(`value of i is ${i}`)

    

    

}