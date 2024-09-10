function verificaChuteValido(chute) {
    const numero = +chute;

    if (chuteInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {
            document.body.style.backgroundColor ="black";
            document.body.innerHTML =
            `
            <h2 class="texto-gameOver">GAME OVER !</h2>
            <p>O numero secreto era ${numeroSecreto}</p>
            <button id="jogar-novamente" class="btn-jogar bnt-gameOver" >Jogar novamente</button>
            `
            button.classList.remove('btn-jogar');
            button.classList.add('bnt-gameOver');
            return;
            
        } else {

            elementoChute.innerHTML += '<div>Valor Inválido!</div>';
            return;
        }
    }

    if (menorOuMaiorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
        
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `<div>Dica: O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>Dica: O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
    }

    if (numero === numeroSecreto){
        document.body.innerHTML =`
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id='jogar-novamente' class="bnt-botao">Jogar novamente!</button>
        `
    }

    function chuteInvalido(numero) {
        return Number.isNaN(numero);
    }

    function menorOuMaiorPermitido(numero) {
        return numero > maiorValor || numero < menorValor;
    }

}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()}})


