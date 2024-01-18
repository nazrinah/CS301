// // let a = "nazrin huseynli";
// // console.log(a.at(0).toUpperCase() + a.slice(1, 6));
// // console.log(
// //   a.at(0).toUpperCase() +
// //     a.slice(1, 7) +
// //     a.at(-8).toUpperCase() +
// //     a.slice(8, 15)
// // );
// // console.log(
// //   a.at(0) +
// //     a.slice(1, 7).toUpperCase() +
// //     a.slice(7, 14) +
// //     a.at(-1).toUpperCase()
// // );

// // let b = "nazrin huseynli alim";

// // console.log(
// //   b.at(-4).toUpperCase() +
// //     b.slice(17, 20) +
// //     " " +
// //     a.at(7).toUpperCase() +
// //     a.slice(8, 16) +
// //     " " +
// //     a.at(0).toUpperCase() +
// //     a.slice(1, 7)
// // );


// const countries = ["Kazakhstan", "Tajikistan", "Uzbekistan", "Kyrgyzs", "Turkmenistan", "Afghan", "Pakistan"];

// for (let i=0; i<countries.length; i++){
//   if (countries[i].endsWith("stan")) {
//     console.log(countries[i]);
//   }
  
// }

const users = [
    {
        id: 1,
        username: 'Yaqut',
        age: 26,
    },
    {
        id: 2,
        username: 'Nezrin',
        age: 20,
    },
    {
        id: 3,
        username: 'Yaqub',
        age: 26,
    },
    {
        id: 4,
        username: 'Murad',
        age: 29,
    },
    {
        id: 5,
        username: 'Tural',
        age: 23,
    },
    {
        id: 6,
        username: 'Murad',
        age: 30,
    },
]
let result = 1

function hasilitap() {
    return users.map((item) => item.age >= 25 ? result *= item.age : null)

}
hasilitap()
console.log(result);

let sum=0
function cemitap(){
    return users.map((item, index) => {
        if (item.username.startsWith("Y") || item.username.startsWith("M")){
            sum += index
        }
    } )
}
cemitap()
console.log(sum);