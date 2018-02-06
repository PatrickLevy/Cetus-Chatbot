const $input = $('#chatInput');
const $submitButton = $('#submitButton');
const synth = window.speechSynthesis;
const chatBox = $('#chatbox');

let voices = synth.getVoices();
let voice;

$(voices).each(function(index) {
    if (voices[index].default) {
        voice = voices[index];
    }
});

// Greys out submit button if no input found
if($input.val() === "") {
    $submitButton.prop('disabled', true);
} else {
    $submitButton.prop('disabled', false);
}

// Removes text from input field on reload/load
$(window).unload = function(event) {
    $input.val() = "";
};

$submitButton.on('click', function(event) {
    // Don't reload the page on submit
    event.preventDefault();
    
    // If we have some input
    if($input.val() !== "") {
        $submitButton.prop('disabled', false);
    }

    // Add the text to the chat box
    let htmlString = '<p class="user">';
    htmlString += $input.val() + '</p>';
    chatBox.append(htmlString);

    // Make utterance
    let utterance = new SpeechSynthesisUtterance($input.val());
    utterance.voice = voice;
    utterance.pitch = '1';
    utterance.rate = '1';
    synth.speak(utterance);
});


