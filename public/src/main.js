import config from "./firebase.js";
import firebase from 'firebase/app';
import 'firebase/database';


console.log(config);

function takeTurn(event = null) {
    let aAnswers = ["outlook is good", "It's not in the cards", "definitely not", "don't count on it", "certainly", "my sources say yes", "It wasn't me", "The answer is yes!"];
    let nAnswer = Math.floor(Math.random() * aAnswers.length);
    document.getElementById("answer").innerHTML = aAnswers[nAnswer];
    if(event) {
        event.preventDefault();
    }
}

document.getElementById("myForm").addEventListener("submit", takeTurn);


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('../worker.js').then(function (registration) {
            console.log('Worker registration successful', registration.scope);
        }, function (err) {
            console.log('Worker registration failed', err);
        }).catch(function (err) {
            console.log(err);
        });
    });
} else {
    console.log('Service Worker is not supported by browser.');
}
