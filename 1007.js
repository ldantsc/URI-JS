let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
let d = parseInt(lines.shift());

function difference(a, b, c, d) {
    let result = ((a * b) - (c * d))
    return console.log(`DIFERENCA = ${result}`)
};

difference(a, b, c, d);