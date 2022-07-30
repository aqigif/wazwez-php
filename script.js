// tipe data
// number|int|float text|string boolean|true-false

// number|int|float
console.log(typeof 20);
console.log(20);

console.log("=======================");
// string|text
console.log(typeof "wazwez");
console.log("wazwez");
console.log("wazwez fdsfdsfds d");

console.log('wazwez berkata:"hi saya aplikasi todo app" ');
console.log("i'm wazwez");

console.log(`hi wazwez
wazwez ""''`);

// boolean
console.log(true);
console.log(false);

//variable
const appName = "wazwez"; // auto pilih const
let appNameLet = "wazwez let"; // klo ada perubahan pilih let

var appNameVar = "wazwez var2";

//expression == === != !==
console.log("" == 0)

// algoritma
// statement: if-else switch-case 
//gate logical && => AND        || => OR       ! => NOT

if (appName != "wazwez2") {
  console.log("iya benar wazwez");
} else {
  console.log("bukan bukan, tapi", appName);
}

switch (appName) {
  case "wazwez":
    console.log("iya wazwez");

    break;
  case "fazztrack":
    console.log("iya fazztrack");

    break;
  default:
    console.log("bukan, tapi", appName);
    break;
}

// looping 
for (let index = 1; index <= 10; index++) {
    console.log("render ke ", index)
}

const dataColors = ["white", "black", "red", "green"]
     // initial     // limit looping           // action setelah setiap loop
for (let index = 0; index < dataColors.length; index++) {
    console.log("ini warna ", dataColors[index])
}




//operation + - * / % ==> shortcut operation ==> ++ --

console.log(20 + 40)
console.log(20 - 40)
console.log(20 * 40)
console.log(40 / 20)
console.log(40 % 20)

console.log("hi this is," + " fazztrack")


// tipe data gouping

// object => klasifikasi data
// array => kelompok data

// object => klasifikasi data
const name = "Ahmad"
const age = 24
const city = "Jakarta"

const people = {
    name: "Ahmad",
    age: 24,
    city: "Jakarta"
} 
const product = {
    name: "Headshet",
    merk: "JBL",
    price: 2000000
} 
console.log(name)
console.log(product)
console.log(product.name)
console.log(product.merk)
console.log(product['merk'])

// array => kelompok data
const colors = ["white", "black", "red", "green"]
const numbers = [1, 2, 3, 4, 5]
const products = [
    {
        name: "Headshet",
        merk: "JBL",
        price: 2000000
    } ,{
        name: "Smarphone",
        merk: "Samsung",
        price: 10000000000
    } 
]
console.log(colors)
console.log(colors.length)
console.log(colors[1])
console.log(products[1].merk)


// method or function
function operationPlus (number1, number2) {
    return number1 + number2
}
console.log(operationPlus(10, 20))
console.log(operationPlus(30, 20))
