const countTotalSalary = function(employees) {
    let totalSalaries = 0;

    for (const salaries of Object.values(employees)) {
        totalSalaries += salaries;
    }

    return totalSalaries;
  };

  console.log(countTotalSalary({})); 
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); 
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); 