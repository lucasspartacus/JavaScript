//Passa como obj para que na chamada o valor contador possa ser alterado-------------------------------
export let contador = {
    valor:  0,
};

export const maximo =3;

export function conta() {
    if (contador.valor < maximo) {
        contador.valor++;
    }
    return contador.valor;
}