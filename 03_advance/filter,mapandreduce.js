
const mynums = [1,2,3,4,5,6,7,8,9,10]
const val = mynums.filter( (num)=>{
    return num > 4
})
console.log(val)


const books = [
    { title: "To Kill a Mockingbird", published: 1960, edition: "1st" },
    { title: "1984", published: 1949, edition: "1st" },
    { title: "Pride and Prejudice", published: 1813, edition: "3rd" },
    { title: "The Great Gatsby", published: 1925, edition: "2nd" },
    { title: "Moby-Dick", published: 1851, edition: "1st" },
    { title: "War and Peace", published: 1869, edition: "4th" },
    { title: "Ulysses", published: 1922, edition: "1st" },
    { title: "The Catcher in the Rye", published: 1951, edition: "1st" },
    { title: "Brave New World", published: 1932, edition: "2nd" },
    { title: "The Odyssey", published: -800, edition: "Ancient" }
  ];

  const newbook = books.filter((bk)=>{
    return bk.edition === "1st"
    
  })
  console.log(newbook)

  const nk = books.filter((bk)=>{
    return bk.published > 1920 && bk.edition === "2nd"
  })
  console.log(nk)



  const number = [1,2,3,4,5,6,7,8]

  const mynumber = number.map((num)=>{
     return num+40
  })
console.log(mynumber)


const newnum = number.map((num)=>{
    return num*10
}
).map((num)=>{
    return num+1
}).filter((num)=>{
    return num>30

})
console.log(newnum)

//reduce 
const nu = [1,2,3]
// const total = nu.reduce(function(acc,crtv){
//     console.log(acc,crtv)
//     return acc + crtv

// },0)
// console.log(total)

const total = nu.reduce((acc,currval)=>{
    console.log(acc,currval)
    return acc + currval

},0)
console.log(total)


const shoppingcart = [{
    itemname : "js course", 
    price : 3999


},
{
    itemname : "IT coursr", 
    price : 1999


},
{
    itemname : "mobile course", 
    price : 113999


},
{
    itemname : "data course", 
    price : 13999


}]

const totalprice = shoppingcart.reduce((acc, item)=>{
    return acc + item.price






},0)
console.log(totalprice)

const products = [
    { name: "Laptop", price: 1200, quantity: 2 },
    { name: "Phone", price: 800, quantity: 5 },
    { name: "Tablet", price: 300, quantity: 3 },
    { name: "Monitor", price: 400, quantity: 4 }
  ];

  const priceproduct = products.reduce((acc,items)=>{
    return acc + (items.price * items.quantity)
  },0)
  console.log(priceproduct)

  const filterer = products.filter((items)=>{
    return items.quantity >2
  })
  console.log(filterer)

  const mapper = products.map((item)=>{
    return item.price +60
  })
  console.log(mapper)