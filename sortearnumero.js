const menorValor = 1
const maiorValor = 100


const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio(){
    //Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    return Math.floor(Math.random() * (maiorValor - menorValor + 1)) + menorValor;
}

console.log(numeroSecreto);

const atualizarValores = () => {
    document.getElementById('numero-menor').innerHTML = menorValor;
    document.getElementById('numero-maior').innerHTML = maiorValor;
};

atualizarValores();





