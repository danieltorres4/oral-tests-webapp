const myText = document.querySelector('.myText')
const btnRead = document.querySelector('.btn-read')

btnRead.addEventListener('click', () =>{
    const locutor = new SpeechSynthesisUtterance()
    const voice = window.speechSynthesis
    
    locutor.text = myText.value
    voice.speak(locutor)
})