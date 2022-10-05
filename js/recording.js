const btnRecord = document.querySelector('.btn-record')
const myContent = document.querySelector('.content')

const voiceRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new voiceRecognition()

recognition.onstart = () =>{
    myContent.innerHTML = "You're recording..."
}

recognition.onresult = (e) =>{
    let message = e.results[0][0].transcript
    //read(message)
    readCondition(message)
    console.log("You're not recording now!")
    myContent.innerHTML = e.results[0][0].transcript;
}

const readCondition = (message)=>{
    const voice = new SpeechSynthesisUtterance()

    if(message.includes("adiós")){
        voice.text = 'Hasta pronto'
    } else {
        voice.text = message
    }

    window.speechSynthesis.speak(voice)
}

const read = (message)=>{
    const voice = new SpeechSynthesisUtterance()
    voice.text = message
    window.speechSynthesis.speak(voice)
}

btnRecord.addEventListener('click', ()=>{
    recognition.start()
    recognition.lang = "es-MX";
})
