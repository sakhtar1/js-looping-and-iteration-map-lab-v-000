// Code your solution in this file.
// Code your solution in this file.
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function lowerCaseDrivers(list) {
  return list.map(function (driver) {
  return driver.toLowercase();
});
}

function nameToAttributes(list) {
  return list.map( function (driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return {firstName, lastName;
  });
}
