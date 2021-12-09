export default class Goal extends Phaser.GameObjects.Zone {
  constructor(scene: Phaser.Scene, private readonly side: "left" | "right") {
    super(
      scene,
      side === "left" ? 0 : scene.cameras.main.width,
      scene.cameras.main.height / 2,
      20,
      165
    );

    this.addToScene().setOrigin(this.side === "left" ? 0 : 1, 0.5);
  }

  private addToScene() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    return this;
  }
}
