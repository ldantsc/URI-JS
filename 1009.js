let seller = 'JOÃO';
let salary = parseFloat(500.00);
let salesMonth = parseFloat(1250.0);

function bonusSalary(salary, salesMonth) {
    let result = (salary + (salesMonth * 0.15))
    return console.log(`TOTAL = ${result.toFixed(2)}`)
}

bonusSalary(salary, salesMonth)