let pi = Math.PI.toFixed(5);
let raio = parseFloat(lines.shift());

function AreaCirculo(raio, pi) {
    let x = parseFloat((Math.pow(raio, 2) * pi)).toFixed(4);
    return console.log(`A=${x}`);
}

AreaCirculo(raio, pi);