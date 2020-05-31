class MediaPlayer {
  
  media: HTMLMediaElement
  plugins: Array<any>

  constructor(config) {
    this.media = config.myVideo;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  //Metodos de la clase MediaPlayer
  //En JS la sintaxis es, clase a la cual le creamos el metodo, ||prototype|| haciendo referencia al constructor y el nombre del metodo igualado a la función
  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  toggleMute() {
    if (this.media.muted) {
      this.media.muted = false;
    }
    else {
      this.media.muted = true;
    }
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
};


export default MediaPlayer