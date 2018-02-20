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

function appendMessage(message, identity) {
    let htmlString = identity === 'user' ? '<p class="message user">': '<p class="message bot">' ;
    htmlString += message + '</p>';
    chatBox.append(htmlString);
}

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

    // Put user message onto chat window
    appendMessage($input.val(), 'user');

    // Send value to api and then put bot's message onto chat window
    $.get( "http://138.68.45.183:3001/cetus", { userText: $input.val() } )
      .done(function( data ) {
        appendMessage(data, 'bot');
      });

});

// Voice input event

