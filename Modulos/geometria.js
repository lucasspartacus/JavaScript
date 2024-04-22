export class Circulo {
    constructor(r){
        this.raio = r;
    }

    perimetro(){
        return 2 * Math.PI * this.raio; 
    }

    area(){
        return Math.PI * Math.pow(this.raio, 2);
    }
}