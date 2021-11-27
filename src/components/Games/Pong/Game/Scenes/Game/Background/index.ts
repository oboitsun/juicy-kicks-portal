export default class Background extends Phaser.GameObjects.Graphics {
  constructor(scene: Phaser.Scene) {
    super(scene);

    this.addToScene().setDepth(-Infinity);
  }

  preUpdate() {
    this.clear();
    const { width, height } = this.scene.cameras.main;
    /**
     * Draw Background lines
     */
    this.lineStyle(1, 0xffffff, 0.25);
    this.lineBetween(width * 0.125, 0, width * 0.125, height);
    this.lineBetween(width * 0.875, 0, width * 0.875, height);
    //
    this.lineStyle(2, 0xffffff, 0.25);
    this.lineBetween(width * 0.25, 0, width * 0.25, height);
    this.lineBetween(width * 0.75, 0, width * 0.75, height);
    //
    this.lineStyle(3, 0xffffff, 0.25);
    this.lineBetween(width * 0.375, 0, width * 0.375, height);
    this.lineBetween(width * 0.625, 0, width * 0.625, height);
    //
    this.lineStyle(5, 0xffffff, 0.25);
    this.lineBetween(width * 0.5, 0, width * 0.5, height);
    this.strokeCircle(width / 2, height / 2, 63);
  }

  private addToScene() {
    return this.scene.add.existing(this);
  }
}
