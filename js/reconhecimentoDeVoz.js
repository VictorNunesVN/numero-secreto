const elementoChute = document.getElementById('chute')
// Veio do site da mozila 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

// Veio do site da mozila 
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
const recognition = new SpeechRecognition();
//Configurando o RECOGNITION para o português do Brasil.
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
   chute = evento.results[0][0].transcript
   console.log(evento) // mostra a class SpeechRecognition() com seus atributos na tela
   exibeChuteNaTela(chute)
   verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class= 'box'>${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())


