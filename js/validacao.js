function verificaSeOChutePossuiUmValorValido(chute){
    const numero =+ chute // só de somar, o javaScript tenta converter para int

    if (chuteForInvalido(numero)){ 
        //aqui ele mostra o elementoChute(valor que foi dito) e diz que é inválido
       elementoChute.innerHTML += `<div>Valor inválido</div>`
    }

    if (numeroMaiorOuMenorQueOValorPermitido(numero)){
//aqui ele mostra o elementoChute(valor que foi dito) e diz que não está dentro dos valores esperados. 
        elementoChute.innerHTML += `<div >Valor inválido: o numero secreto deve ficar entre ${menorValor} e ${maiorValor}</div>`
    }

    if (numero === numeroSecreto){
        document.body.innerHTML = 
            `<h2>Você acertou !</h2>
            <h3>O número secreto era ${numeroSecreto} !!</h3>`
    }
}

function numeroMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

