const findBestEmployee = function(employees) {
    let theBestEmployee = '';
    let numbersOfTasks = 0;
  
  
  for (const employee in employees) {
  if (numbersOfTasks < employees[employee]) {
    numbersOfTasks = employees[employee];
    theBestEmployee = employee;
  }

}
return theBestEmployee;
};

  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); 
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); 
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); 