export default class PreloadSene extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.setBaseURL("./assets/game/");
    this.load.atlas("balls", "balls.png", "balls_atlas.json");
    this.load.atlas("powerups", "powerups.png", "powerups_atlas.json");
    this.load.image("circle", "circle.png");
    this.load.image("paddle", "paddle.png");

    this.load.audio("ballPaddle", "ball-paddle.mp3");
    this.load.audio("ballBorder", "ball-border.mp3");
    this.load.audio("lose", "lose.mp3");
  }

  create() {
    this.scene.start("Game");
  }
}
