function criarContador() {
    let contador = 0;
    return function (){
        contador ++;
        return contador;
    }
}

const cont1 = criarContador();
const cont2 = criarContador();

console.log(`Contador 1: ${cont1}`)
console.log(`Contador 2: ${cont2}`)
console.log(`Contador 1: ${cont1}`)
console.log(`Contador 2: ${cont2}`)