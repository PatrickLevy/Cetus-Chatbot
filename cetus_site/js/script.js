// Variables
const $input = $('#chatInput');
const $submitButton = $('#submitButton');
const synth = window.speechSynthesis;
const chatBox = $('.chatbox');

let voices = synth.getVoices();
let voice;

$(voices).each(function(index) {
    if (voices[index].default) {
        voice = voices[index];
    }
});

// Removes text from input field on reload/load
$(window).unload = function(event) {
    $input.val() = "";
};

// Disable/enable button
$submitButton.hover(function() {
    // Hover in
    // Greys out submit button if no input found
    if($input.val() === "") {
        $submitButton.prop('disabled', true);
    } else {
        $submitButton.prop('disabled', false);
    }
}, function() {
    // Hover out
    if($input.val() === "") {
        $submitButton.prop('disabled', true);
    } else {
        $submitButton.prop('disabled', false);
    } 
});

// Submit event
$submitButton.on('click', function(event) {
    // Don't reload the page on submit
    event.preventDefault();

    // Make utterance
    let utterance = new SpeechSynthesisUtterance($input.val());
    utterance.voice = voice;
    utterance.pitch = '1';
    utterance.rate = '1';
    synth.speak(utterance);

    // Add the text to the chat box
    let htmlString = '<p class="message user">';
    htmlString += $input.val() + '</p>';
    chatBox.append(htmlString);
});

// Voice input event

