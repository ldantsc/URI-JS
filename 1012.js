/*Class Area {
    constructor(){

    }
}*/ 

let area = {
    a: 3.0,
    b: 4.0,
    c: 5.2,
    pi: Math.PI,
    result: function() {
        let triangle = ((this.a * this.c) / 2);
        let circle = this.pi * (Math.pow(this.c, 2)); 
        let trapeze = ((this.a + this.b) * this.c) / 2; 
        let square = Math.pow(this.b, 2); 
        let rectangle = this.a * this.b; 
       console.log(`TRIANGULO: ${triangle.toFixed(3)}`)
       console.log(`CIRCULO: ${circle.toFixed(3)}`)
       console.log(`TRAPEZIO: ${trapeze.toFixed(3)}`)
       console.log(`QUADRADO: ${square.toFixed(3)}`)
       console.log(`RETANGULO: ${rectangle.toFixed(3)}`)

    }
}

area.result()