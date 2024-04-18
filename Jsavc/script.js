output.innerHTML = 'JavaScript avançado';

/* Try catch exemplo --------------------------------------------------------------------------
let a;
x = -10;

try {
    if(x < 0) throw new error(`Valor ${x} menor que 0`);
    a = x;

} catch (error) {
    output.innerHTML = `${error.message}`
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}*/


/* Copia de  objeto exemplo --------------------------------------------------------------------------
let aluno  = {nome: 'Lucas Spartacus', idade: 22};
let diciplina = {materia: 'Poo', periodo: 6};
let alunos = {...aluno, ...diciplina};

let funcionario = {...aluno, profissao: 'dev Web'}
console.log(funcionario);
console.log(alunos);
*/


/* Split exemplo ------------------------------------------------------------------------------------
let nome = 'Lucas Spartacus';
let pessoas = {};
[pessoas.prenome, pessoas.lstnome] = nome.split(' ');
console.log(pessoas);
*/

/*Getters e stters ----------------------------------------------------------------------------------
let aluno  = {
    prenome: 'Lucas', 
    lstnome : 'Spartacus', 
    salario: 3500,
    nascimento: new Date(2001, 10, 19), 
    get nomeCompleto(){
        return `${this.prenome} ${this.lstnome}`;
    },
    set novoSalario(s){
        if (s<this.salario) {
            throw console.error('Salario não pode ser menor que a anterior');
        }
        else{
            this.salario = s;
        }
    },
    get idade(){
        let ano = (new Date()).getFullYear();
        return ano - this.nascimento.getFullYear();
    }
};

aluno.novoSalario = 3600;

console.log(aluno.nomeCompleto);
console.log(aluno.idade);
console.log(aluno);
*/
//Closure

function dialogo(idioma){

    return function(name){
       if (idioma == 'es') {
        console.log(`Hola, ${name}`);
       }if (idioma == 'en') {
        console.log(`Hello, ${name}`);
       } else {
        console.log(`Oi, ${name}`);
       }
    }
}
let ola = dialogo('en');
ola('Lucas');


function criaContador(){
    let n =0;
    function altera(v){
        n += v;
    }
    return{
        incremente: function(){
            altera(1);
        },
        decrementa: function(){
            altera(-1);
        },
        valor: function(){
          return n;
        }
    }
}

let contador = criaContador();
contador.incremente(); console.log(contador.valor());
contador.incremente(); console.log(contador.valor());
contador.decrementa(); console.log(contador.valor());
contador.incremente(); console.log(contador.valor());



console.log('Fin');
