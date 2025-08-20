document.addEventListener('DOMContentLoaded', () => {
    // Find the button on the page
    const pronounceButton = document.querySelector('.heading-circle');

    // Make sure the button actually exists before adding a listener
    if (pronounceButton) {
        pronounceButton.addEventListener('click', () => {
            // Cancel any speech that is currently happening
            window.speechSynthesis.cancel();

            // Create a new "utterance" (the thing to be spoken)
            const utterance = new SpeechSynthesisUtterance("Technical Skills");

            // Optional: Configure the voice, pitch, and rate
            utterance.lang = 'en-US'; // Set the language
            utterance.pitch = 4000;    // Make it slightly higher pitched
            utterance.rate = 1.0;     // Speak at a normal speed

            // Tell the browser to speak the utterance
            window.speechSynthesis.speak(utterance);
        });
    }

    const track = document.querySelector('.carousel-track');
    let speed = 0.8; // px per frame
    let pos = 0;

    function animate() {
    pos -= speed;
    if (Math.abs(pos) >= track.scrollWidth / 2) {
        pos = 0; // reset seamlessly at half
    }
    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(animate);
    }

    animate();

});

