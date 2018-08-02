// Code your solution in this file.
// Code your solution in this file.
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
  return driver.toLowercase();
  })
}
console.log(lowerCaseDrivers(drivers));

function nameToAttributes(list) {
  return list.map( function (driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return {firstName, lastName;
  });
}
