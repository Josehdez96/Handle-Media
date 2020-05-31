import MediaPlayer from '../MediaPlayer'

class AutoPlay {
  constructor() { }
  run(player: MediaPlayer) {
    player.toggleMute()
    player.play()
  }
}


export default AutoPlay