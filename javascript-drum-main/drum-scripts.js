
function playSound(e) {
  audios.forEach(audio => {
    if (audio.dataset.key === e.key) {
      let divKey = document.querySelector(`.key[data-key="${e.key}"]`);
      audio.currentTime = 0; //rewinds to start
      audio.play();
      divKey.classList.add("playing");

    } else if (!audio.paused) { //check audio is playing
      audio.pause();
    }
  });
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skips the transform

  //"this" equals to the key "called" in the event, i.e console.log(this)
  this.classList.remove("playing")
}


const allDivKeys = document.querySelectorAll(".key");
allDivKeys.forEach(key => key.addEventListener("transitionend", removeTransition));

/*alternative to querySelectorAll is using template literals
  like the "divKey" variable */
const audios = document.querySelectorAll("audio");

window.addEventListener("keydown", playSound);