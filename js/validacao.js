function verificaSeOChutePossuiUmValorValido(chute){
    const numero =+ chute // só de somar, o javaScript tenta converter para int

    if (chuteForInvalido(numero)){ 
        //aqui ele mostra o elementoChute(valor que foi dito) e diz que é inválido
       elementoChute.innerHTML += `<div>Valor inválido</div>`
       return 
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)){
        //aqui ele mostra o elementoChute(valor que foi dito) e diz que não está dentro dos valores esperados. 
        elementoChute.innerHTML += `<div >Valor inválido: o numero secreto deve ficar entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = 
            `<h2>Você acertou !</h2>
            <h3>O número secreto era ${numeroSecreto} !!</h3>
            <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>
            `
    }else if (numero > numeroSecreto){
        elementoChute.innerHTML = 
        `
        <div>Você disse: </div>
        <span class="box">20</span>
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }
    else{
        elementoChute.innerHTML = 
        `
        <div>Você disse: </div>
        <span class="box">20</span>
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function numeroMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', evento => {
    if (evento.target.id='jogar-novamente'){
        window.location.reload()
    }
})