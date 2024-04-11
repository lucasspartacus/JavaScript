/*function soma(a, b){
    return a+b;
}*/

onmessage =function(evento){
    let soma = evento.data[0] + evento.data[1];
    this.postMessage(soma); //Worker se comunica pos mensagem
}
