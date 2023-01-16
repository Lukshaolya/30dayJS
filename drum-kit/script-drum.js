console.log('hi')

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key.classList.add('playing');
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
}
 



    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
      }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);
    
