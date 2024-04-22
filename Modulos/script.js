import {Circulo} from  './geometria.js'
let c = new Circulo(10);
console.log('Area do circulo é', c.area());

import {contador, conta} from  './contador.js'
for (let i = 0; i < 5; i++) {
    console.log(conta());
}

console.log(contador.valor);
