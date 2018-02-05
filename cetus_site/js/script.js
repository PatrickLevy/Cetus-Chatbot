const $input = $('#chatInput');
const $submitButton = $('#submitButton');
const synth = window.speechSynthesis;

let voices = synth.getVoices();
let voice;

$(voices).each(function(index) {
    if (voices[index].default) {
        voice = voices[index];
    }
});



if($input.val() === "") {
    $submitButton.prop('disabled', true);
} else {
    $submitButton.prop('disabled', false);
}

$submitButton.on('click', function(event) {
    event.preventDefault();
    

    let utterance = new SpeechSynthesisUtterance($input.val());
    utterance.voice = voice;
    utterance.pitch = '1';
    utterance.rate = '1';
    synth.speak(utterance);
});


