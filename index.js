//? doing the recognition function
let btn = document.querySelector("#main-button");
btn.addEventListener("click", () => {
    recognition.start();
})

let SpeechRecognition = window.SpeechRecognitionResult || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.onstart = () => {
    console.log("started");
}
recognition.onresult = (event) => {
    console.log(event);
    let resultIndex = event.resultIndex;
    let result = event.results[resultIndex][0].transcript;
    console.log(result);
    speakOut(result);
}

function speakOut(something) {
    let voice = something;
    if (voice.includes("YouTube")) {
        window.open("https://youtube.com", "_blank");
        voice = "opening youtube for you";
    } else if (voice.includes("Instagram")) {
        window.open("https://instagram.com", "_blank");
    } else if (voice.includes("Facebook")) {
        window.open("https://facebook.com", "_blank");
    } else if (voice.includes("Twitter")) {
        window.open("https://twitter.com", "_blank");
    } else if (voice.includes("Github")) {
        window.open("https://github.com", "_blank");
    } else if (voice.includes("about Prithviraj")) {
        voice = "He is an fraud ,four twenty,funny goose and bloody bugger";
    } else if (voice.includes("about Gokul")) {
        voice = "He is an fraud ,four twenty,funny goose and bloody bugger";
    } else if (voice.includes("about Vetrivel")) {
        voice = "Please don't talk  me about him,ask anything else";
    } else if (voice.includes("what's your name")) {
        voice = "I don't have any specific name , you can call me what ever you want ";
    } else if (voice.includes("life")) {
        let sound = document.getElementById("demonte");
        voice = "";
        sound.play();
    } else if (voice.includes("motivational song")) {
        let sound = document.getElementById("motivation");
        sound.play();
        voice = "";
    } else if (voice.includes("dedicate")) {
        let sound = document.getElementById("poda");
        sound.play();
        voice = "";
    } else if (voice.includes("about Pradeep")) {
        let sound = document.getElementById("singam");
        sound.play();
        voice = "";
    } if (voice.includes("richest")) {
        let sound = document.getElementById("yennena");
        sound.play();
        voice = "";
    } else if (voice.includes("boy")) {
        let sound = document.getElementById("non-sense");
        sound.play();
        voice = "";
    } else if (voice.includes("wife")) {
        let sound = document.getElementById("ponnu");
        sound.play();
        voice = "";
    } else if (voice.includes("play")) {
        let sound = document.getElementById("goiyala");
        sound.play();
        voice = "";
    }






    let SpeechSynthesisUtterance = window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;
    let utterance = new SpeechSynthesisUtterance();
    console.log(utterance);
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.text = voice;


    let speechSynthesis = window.speechSynthesis || window.webkitspeechSynthesis;
    speechSynthesis.speak(utterance);
}