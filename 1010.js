let parts1 = [12, 1, 5.30];
let parts2 = [16, 2, 5.10];

function partsPayment(parts1, parts2) {
    let result = (parts1[1] * parts2[2]) + (parts2[1] * parts2[2])
    return console.log(`VALOR A PAGAR = R$${result.toFixed(2)}`)
}

partsPayment(parts1, parts2)