// Code your solution here


// function findMatching(drivers) {
//     for (const driverName of drivers) {
//         if (drivers.name === driverName) {
//             return (drivers.driverName);
//         }
//         return [""];
//     }
// }

// findMatching(drivers, "Bobby", "Sammy")



function findMatching(drivers, string) {
    return drivers.filter(function (driver){
        return driver.toLowerCase() === string.toLowerCase();
    });
}

console.log(drivers)



function fuzzyMatch(drivers, string) {
    return drivers.filter(function (driver){
        return driver.slice(0, 2) === string;
    });
}

console.log(drivers)




function matchName(drivers, string) {
    return drivers.filter(function (driver) {
        return driver.name === string;
    });
}

console.log(drivers)