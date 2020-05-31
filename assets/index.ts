import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'


const video = document.querySelector("video"); //Selecciona el unico tag video del HTML

const player = new MediaPlayer({
  myVideo: video, 
  plugins: [new AutoPlay(), new AutoPause()]
})

const btnPlay: HTMLElement = document.querySelector("#play"); //Unico botón en todo nuestro HTML
const btnMute: HTMLElement = document.querySelector("#mute");

btnPlay.onclick = () => {
  if (player.media.paused) {
    player.play() //Todos los elementos del DOM tienen un API, por eso a player puedo ponerle ||.play()||
  } else {
    player.pause()
  }
}

btnMute.onclick = () => player.toggleMute()

if ('serviceWorker' in navigator) { //Condicional de saber si el navegador le da servicio a los Service Workers
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message)
  })
}






