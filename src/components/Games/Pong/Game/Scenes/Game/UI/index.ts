import Manager, { PowerUp } from "../Manager";

export default class UI extends Phaser.GameObjects.Layer {
  powerups!: {
    splitBall: Phaser.GameObjects.Image;
    superHit: Phaser.GameObjects.Image;
    shield: Phaser.GameObjects.Image;
  };
  private countdownText: Phaser.GameObjects.Text;
  private countdownTween: Phaser.Tweens.Tween;
  constructor(scene: Phaser.Scene, private manager: Manager) {
    super(scene);

    /**
     * Create count down text
     */
    this.countdownText = this.scene.add
      .text(
        this.scene.cameras.main.centerX,
        this.scene.cameras.main.centerY,
        "3",
        {
          fontFamily: '"Exo", sans-serif',
          fontSize: "80px",
          color: "white",
          stroke: "black",
          strokeThickness: 15,
        }
      )
      .setOrigin(0.5);

    this.add(this.countdownText);

    this.countdownTween = this.scene.add.tween({
      targets: this.countdownText,
      duration: 4000,
      scale: { from: 1, to: 1 },
      onUpdate: (tween) => {
        this.countdownText.setText(
          ["3", "2", "1", "LET'S GO!"][Math.floor(tween.progress * 4)]
        );
      },
      paused: true,
    });

    this.addToScene().createPowerups().setDepth(Infinity);
  }

  private addToScene() {
    this.scene.add.existing(this);
    return this;
  }
  private createPowerups() {
    this.powerups = {
      splitBall: this.scene.add
        .image(0, 0, "powerups", "split_balls")
        .setInteractive({ cursor: "pointer" })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
          this.manager.activatePowerup(PowerUp.SplitBall);
        }),
      superHit: this.scene.add
        .image(0, 0, "powerups", "super_hit")
        .setInteractive({ cursor: "pointer" })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
          this.manager.activatePowerup(PowerUp.SuperHit);
        }),
      shield: this.scene.add
        .image(0, 0, "powerups", "shield")
        .setInteractive({ cursor: "pointer" })
        .on(Phaser.Input.Events.POINTER_DOWN, () => {
          this.manager.activatePowerup(PowerUp.Shield);
        }),
    };

    /**
     * align powerups with correct margin and position
     */
    const margin = 20,
      spacing = 16;
    Object.values(this.powerups).forEach((powerup, powerupIndex, powerups) =>
      powerup
        .setOrigin(0, 1)
        .setPosition(
          margin +
            powerups.reduce(
              (width, object, i) =>
                i < powerupIndex
                  ? width + object.displayWidth + spacing
                  : width,
              0
            ),
          this.scene.cameras.main.height - margin
        )
    );

    /**
     * Add cooldown
     */
    Object.values(this.powerups).forEach((powerup) =>
      powerup.on(Phaser.Input.Events.POINTER_DOWN, () => {
        if (!this.manager.isGameRunning) return;
        powerup.setAlpha(0.5).disableInteractive();
        this.scene.time.delayedCall(5000, () =>
          powerup.setAlpha(1).setInteractive()
        );
      })
    );

    /**
     * Add to this layer
     */
    Object.values(this.powerups).forEach((powerup) => this.add(powerup));

    return this;
  }

  public countDown(): Promise<void> {
    return new Promise((res) =>
      this.countdownTween.play().once(Phaser.Tweens.Events.TWEEN_COMPLETE, res)
    );
  }
}
