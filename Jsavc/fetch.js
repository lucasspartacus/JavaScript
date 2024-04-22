//Exemplo de função asyncrona -------------------------------------------------------------------------

let numero = 10;
let resposta = fnMetade(numero);
resposta.then(
    (resp) => console.log(`A metade de ${numero} é ${resp}`),
    (erro) => console.log(erro.message)
);

async function fnMetade(numero) {
    if (numero % 2 ==0) return numero/2;
    else throw new Error('Número não é par');
}


/*Carregando dasdos do usuario usando Fetch------------------------------------------------------------
function carga(n) {
 fetch('https://reqres.in/api/users/' +n)
 .then(function(resp) {
    console.log(resp);
    if (resp.ok) {
        return resp.json();
    }
 })
 .then(function(obj) {
   carregaImagem(obj.data.avatar);
 })
 .catch((erro)=>console.log(erro));   
} 

function carregaImagem(avatar) {
    fetch(avatar)
    .then((resp) => resp.blob())
    .then((b) => {
        imagem.src = URL.createObjectURL(b);
    })
    .catch((erro)=>console.log(erro));
}

output.innerHTML = `
<p>
<input id="idUser" type="number" value="1">
<button id="btn">Ver avatar</button>
</p>
<p>
<img id="imagem">
</p>
`;

btn.onclick = () => carga(idUser.value);
*/
