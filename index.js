// Code your solution in this file.
// Code your solution in this file.
function lowerCaseDrivers (list) {
  return list.map(function (driver) {
    return driver.toLowerCase();
  });
}


function nameToAttributes(list) {
  return list.map( function (driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return {firstName, lastName
  })
}
