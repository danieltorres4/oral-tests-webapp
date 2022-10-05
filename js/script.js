let rec;

if (!("webkitSpeechRecognition" in window)) {
    alert("Sorry! You can not use the tool! :(");
} else {
    rec = new webkitSpeechRecognition();
    rec.lang = "es-MX";
    rec.continuous = true;
    rec.interim = true;
    rec.addEventListener("result",iniciar);
}

function iniciar(event){

    var sentence;

	for (let i = event.resultIndex; i < event.results.length; i++){
        document.getElementById('texto').innerHTML = event.results[i][0].transcript;
        //console.log(event.results[i][0].transcript)

        sentence = event.results[i][0].transcript;
        console.log(sentence)

        
	}
}

rec.start();