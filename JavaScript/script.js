let nome = 'Lucas';
const IDADE = 22;
console.log(IDADE, nome);

soma(4, 5)
function soma(a, b){
    console.log(
        `A soma de ${a} e ${b}
        É igual a: ${a+b}`
    );
}

function argumentos(){
    return arguments[1] + arguments [2];
}

console.log(argumentos(3, 7, 12));

//Exemplo array------------------------------------------
let array = ['Lucas','Laura', 'Camilla']
console.log(array[2]);
array.sort();
console.log(array);

//Exemplo objeto------------------------------------------

let usuario = {
    nome: 'Lucas',
    idade: 22,
    maioridade: function(){
        return this.idade>=18;
    }
}

if('idade' in usuario){
    console.log('Sim!');
}

for (let chave in usuario) {
    console.log(`${chave} = ${usuario[chave]}`);  
}
console.log(usuario.maioridade());
//Clonar o objeto

let cliente ={};

for (let chave in usuario) {
    cliente[chave] = usuario[chave];
}

/* Função contrutura 
function Usuario(nome, idade){
    
    this.nome =  nome;
    this.idade =  idade;
    this.maioridade = function(){
        this.idade>=18;
    };
}
let joao = new Usuario('Jõao', 31)
*/

//classe --------------------------------------

class User{
    constructor(nome, idade){
        this.nome = nome;
        this.idade =  idade;
    }
    maioridade(){
        return this.idade>=18;
    }
}

let joao = new User('Jõao', 31);
console.log(joao);