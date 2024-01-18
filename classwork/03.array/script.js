// // Array methods

// // let firstName = "Ulfat Nergiz Nezrin Kenan Arife";

// // console.log(firstName.indexOf("i", 3));
// // console.log(firstName.lastIndexOf("at", 8));

// // if (firstName.includes("Ulfat")) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// // }

// // let firstName = "Ulfatl";
// // const newName = firstName.replaceAll("l", "L");
// // // console.log(firstName);
// // console.log(newName);
// // let surname = "Zakirli";

// // let fullName = name.concat(" ",surname, 'something');
// // console.log(fullName);

// // object

// // object
// // array
// // date
// // Error
// // etc..
// // let surname = "sss";
// // let name = "sss";
// // let age = "88";

// // // const obj1 = new Object();
// // // obj1.name = "Ulfat";
// // // obj1.surname = "ZAkirli";
// // // obj1.age = "66";
// // // console.log("obj1", obj1);

// const obj2 = {
//   "first-name": "Ulfat",
//   surname: "Zakirli",
//   age: 77,
//   city: "Baku",
//   isAdmin: true,
//   salary: null,
//   address: undefined,
//   info: {
//     location: "28 may",
//     arr: {
//       users: [],
//     },
//   },
// };

// // 1.Add 'street, position, and uni' to 'info' of obj2 form outside
// // 2.Remove salary and uni
// // 3.change location to  'Genclik'
// // 4.console 'Arif'
// // 5.make isAdmin false
// // 6.make city key as array like that ['Baku','Gence','Shirvan']
// // 7.console type of users
// // 8.console indexOf('e') of location and lastIndexOf
// // 9.console 'Genclik' like that 'gEnClik'

// obj2.info.arr.users.push("Ilkin")


// 1.Multiply 12 with 8, and console the result:
//const a=12
//const b=8

//console.log(a*b);

// 2.Divide 10 by 2 add result to variables x, and console x:
// const x=10/2
// console.log(x);

// // 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
// const num1=20
// const num2=17
// console.log(num1+num2);

// /* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
//   then add them to varibale name (info) and console info. */
//   const ad="nazrin"
//   const soyad="huseynli"
//   const year=2004
//   const info= ad + " " + soyad + " " + year
//   console.log(info);

// // 5.Console the remainder(%) when 17 is divided by 12.
// const z=17%12
// console.log(z);

// // 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
// //  and reassign value Gence,console result.

// cityName= "Baku"
// cityName= "Gence"
// console.log(cityName);

////// TASK 2 //////////////

// let a = 1, b = 4;
// let c = ++a;
// let d = ++;

// console.log(c); // ?
// console.log(d); // ?
// console.log(b); // ?

////////////// TASK 3 //////////////

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // ?


////////////// TASK 5 //////////////

//Find the type of all the following cases

// let name = "Ulfat"
// let surname = Zakirli
// let year = 2000
// // year = "2000"
// // let city;
// let qualification = null
// let obj = { name: 'ulfat' }
// // let arr = ['a', 'b', 'c']

// console.log(typeof  year );

////////////// TASK 6 //////////////
const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
console.log(arr1.reduce((a, b) => a + b, 0))
// 2.Add two numbers (10,88) to end of arr1 (push methods)
arr1.push(10,88)
console.log(arr1);
// 3.Remove first two numbers from arr1
arr1.pop()
arr1.pop()
console.log(arr1);
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
arr1.unshift(0,9,11)
console.log(arr1);
// 5.Remove four numbers in front of arr1(shift)
arr1.shift()
arr1.shift()
arr1.shift()
arr1.shift()
console.log(arr1);

////////////// TASK 7 //////////////
const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"
console.log(arr2.slice(arr2.indexOf("Rufet"), arr2.indexOf("Fuad") + 1));
// 2.Change Gulshen to Rovshen 
index=arr2.indexOf('Gulshen')
arr2[index]="Rovshen"
console.log(arr2);
// 3.Console each name with map
console.log("");
arr2.map(name => console.log(name));
// 4.Console only names which is Anar
let filarr2=arr2.filter(name => name === "Anar")
console.log(filarr2)
// 5.Console all names where name is Anar change it to "Perviz"
index2=arr2.indexOf('Anar')
arr2[index2]='Perviz'
index2=arr2.indexOf('Anar')
arr2[index2]='Perviz'
index2=arr2.indexOf('Anar')
arr2[index2]='Perviz'
console.log(arr2);
// 6.Console second to last value of arr2
console.log(arr2[arr2.length-2]);
// 7.Console length of arr2
console.log(arr2.length);