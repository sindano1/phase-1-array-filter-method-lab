// Code your solution here
// findMatching()
// 1) returns all drivers that match the passed in name - what is passed is last
// 2) returns matching drivers if case does not match but letters do
// 3) returns an empty array if there is no match
// fuzzyMatch()
// 4) returns a driver if beginning provided letters match
// 5) does not return drivers if only middle or ending letters match
// 6) does not return drivers if only middle or ending letters match
// matchName()
// 7) accesses the data structure to check if name matches

function findMatching(driversArray, nameValue){
    return driversArray.filter(
        (driverName) => driverName.toLowerCase() === nameValue.toLowerCase()
    )
}

function fuzzyMatch(driversArray, beginningLetters){
    return driversArray.filter(
        (driverName) => driverName.startsWith() === beginningLetters.startsWith()
    )
}


//drivers ? drivers.name : `[]`
// const drivers = [
//     {
//       name: 'Bobby',
//       hometown: 'Pittsburgh' }, ...

// const returnValue = drivers.filter((value, index, array) => {...})

// const findMatching = drivers.filter(driver => drivers.name)
// console.log(findMatching)



// const findMatching = drivers.filter(function(name) {
//    return drivers.name == name;
// })

// return findMatching

// function filter(drivers) {
//     for (const name of collection) {
//         if (drivers.name == name) {
//             console.log(drivers.name)
//         }
//     }
// }


// function findMatching(driver) {
//     return drivers[name] == name
// }





// function filter(drivers, cb) {
//     const findMatching = []

//     for (const  of drivers) {
//         if (cb(name)) === cb {
//             newDriversArray.push(name);
//         }
//     }
//     return findMatching(name)
// }

// [].filter(function(name) {
//     return name == "name"
// })