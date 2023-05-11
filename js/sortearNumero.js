const menorValor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroAleatorio()


function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor +1)
}

console.log(`NumeroSecreto: ${numeroSecreto}`)

const elementoMenorValor = document.getElementById("menor-valor")
const elementoMaioValor = document.getElementById("maior-valor")

elementoMenorValor.innerHTML = menorValor
elementoMaioValor.innerHTML = maiorValor