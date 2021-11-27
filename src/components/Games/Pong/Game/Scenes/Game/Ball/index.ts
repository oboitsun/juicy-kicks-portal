import Manager from "../Manager";

export default class Ball extends Phaser.Physics.Arcade.Image {
  static readonly velocity = 400;
  static readonly angularVelocity = 600;

  body!: Phaser.Physics.Arcade.Body;
  constructor(scene: Phaser.Scene, private manager: Manager) {
    super(
      scene,
      scene.cameras.main.centerX,
      scene.cameras.main.centerY,
      "balls"
    );

    this.addToScene().addTrail().setDepth(10);

    this.body
      .setCircle(this.width / 2, 0, 0)
      .setBounce(1, 1)
      .setAllowRotation(true)
      .setAngularDrag(0)
      .setCollideWorldBounds(true, 1, 1);
  }

  private particles!: Phaser.GameObjects.Particles.ParticleEmitterManager;
  private addTrail() {
    this.particles = this.scene.add
      .particles("circle", {
        follow: this,
        frequency: 0,
        scale: { start: 0.8, end: 0.2 },
        alpha: { start: 0.6, end: 0 },
        lifespan: 200,
        reserve: 20,
        tint: 0xffffff,
      })
      .setDepth(9);

    return this;
  }

  setScale(x: number, y?: number | undefined) {
    this.particles.emitters.first
      .setScale({ start: 0.8 * x, end: 0.2 * x })
      .setLifespan(200 * x);
    return super.setScale(x, y);
  }

  start(winner: "left" | "right") {
    this.body
      .setVelocity(Ball.velocity * (winner === "left" ? -1 : 1))
      .setAngularVelocity(Ball.angularVelocity * (winner === "left" ? -1 : 1));
  }

  returnToCenter(): Promise<void> {
    return new Promise((onComplete) =>
      this.scene.tweens.add({
        targets: [this],
        scale: { from: this.scale, to: 0 },
        yoyo: true,
        onStart: () => this.body.reset(this.x, this.y),
        onYoyo: () =>
          this.setPosition(
            this.scene.cameras.main.centerX,
            this.scene.cameras.main.centerY
          ),
        onComplete,
        duration: 100,
      })
    );
  }

  setHide(value: boolean) {
    this.setVisible(!value);
    this.body.setEnable(!value);
    if (value) this.particles.emitters.first.stop();
    else this.particles.emitters.first.start();
    return this;
  }

  private addToScene() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    return this;
  }
}
