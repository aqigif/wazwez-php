
// const dataColors = ["white", "black", "red", "green"]
// // initial          // limit looping           // action setelah setiap loop
// for (let index = 0; index < dataColors.length; index++) {
//     console.log(dataColors[index], index)
// }

// dataColors.sort().map((color, index) => {
//     console.log(color, index);
// })

const products = [
    {
        id: 1,
        name: "Headshet",
        merk: "JBL",
        price: 2000000
    } ,{
        id: 2,
        name: "Smarphone",
        merk: "Samsung",
        price: 10000000000
    } ,{
        id: 2,
        name: "Smarphone",
        merk: "Samsung",
        price: 10000000000
    } ,{
        id: 1,
        name: "Smarphone",
        merk: "Samsung",
        price: 10000000000
    } ,{
        id: 3,
        name: "Smarphone",
        merk: "Samsung",
        price: 10000000000
    } ,{
        id: 8,
        name: "Smarphone",
        merk: "Samsung",
        price: 10000000000
    } ,{
        id: 10,
        name: "Smarphone",
        merk: "Samsung",
        price: 10000000000
    } 
]

// for (let index = 0; index < products.length; index++) {
//     console.log(products[index].name, index)
// }

products.sort((a, b) => {
    return a.id - b.id
}).map((product, index) => {
    console.log(product, index);
})

// function getDataProductsMerk (data, maxPrice) {
//     return data.filter((product) => {
//         if (product.price <= maxPrice) {
//             return true
//         }
//         return false
//     }).map((product, index) => {
//         return product.merk
//     })
// }

// console.log(getDataProductsMerk(products, 2000000))

// console.log(parseInt("190999.09") + 1999)

// const data = "hi aku wara dari fazztrack fazztrack";
// console.log(data)
// console.log(data.replaceAll("fazztrack", "wazwez"))

// console.log(new Date().getFullYear())