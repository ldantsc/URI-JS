let employee = parseInt(25);
let workhours = parseInt(100);
let salaryhour = parseFloat(5.0);

function salary(employee, workhours, salaryhour) {
    const result = workhours * salaryhour;
    console.log(`NUMBER = ${employee}`)
    console.log(`SALARY = U$ ${result.toFixed(2)}`)
}

salary(employee, workhours, salaryhour)