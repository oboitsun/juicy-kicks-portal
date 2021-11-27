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
  }

  create() {
    this.scene.start("Game");
  }
}
