import Ball from "../Ball";
import Goal from "../Goal";
import Paddle from "../Paddle";
import UI from "../UI";

export type score = [leftPlayer: number, rightPlayer: number];

export enum PowerUp {
  SplitBall,
  SuperHit,
  Shield,
}

export default class Manager extends Phaser.Events.EventEmitter {
  public isGameRunning: boolean = false;
  score: score = [0, 0];
  Ball!: Ball;
  LeftPaddle!: Paddle;
  RightPaddle!: Paddle;
  LeftGoal!: Goal;
  RightGoal!: Goal;
  UI!: UI;
  SplitBalls!: Ball[];
  SFXs: {
    ballPaddle: Phaser.Sound.BaseSound;
    ballBorder: Phaser.Sound.BaseSound;
    lose: Phaser.Sound.BaseSound;
  };

  constructor(private scene: Phaser.Scene) {
    super();

    this.scene.physics.world.fixedStep = false;
    this.scene.input.setPollAlways();
    this.SFXs = {
      ballPaddle: this.scene.sound.add("ballPaddle"),
      ballBorder: this.scene.sound.add("ballBorder"),
      lose: this.scene.sound.add("lose"),
    };

    /**
     * Fire global scene event on score
     */
    this.on("score", (score) => {
      this.scene.events.emit("score", score);
    });
  }

  set(
    Ball: Ball,
    SplitBalls: Ball[],
    LeftPaddle: Paddle,
    RightPaddle: Paddle,
    LeftGoal: Goal,
    RightGoal: Goal,
    UI: UI
  ) {
    this.Ball = Ball;
    this.SplitBalls = SplitBalls;
    this.LeftPaddle = LeftPaddle;
    this.RightPaddle = RightPaddle;
    this.LeftGoal = LeftGoal;
    this.RightGoal = RightGoal;
    this.UI = UI;
    this.start("left");
    return this;
  }

  manage() {
    /**
     * Collide ball with paddles
     */
    this.scene.physics.add.collider(
      [this.Ball, ...this.SplitBalls],
      [this.LeftPaddle, this.RightPaddle],
      () => this.SFXs.ballPaddle.play()
    );
    this.scene.physics.add.collider(this.SplitBalls, this.SplitBalls);

    /**
     * Check when ball hits goal
     */
    this.scene.physics.add.overlap(
      [this.Ball, ...this.SplitBalls],
      this.LeftGoal,
      async () => {
        await this.reset("right");
        this.scene.input.once(Phaser.Input.Events.POINTER_DOWN, () =>
          this.start("right")
        );
      },
      () => this.isGameRunning
    );
    this.scene.physics.add.overlap(
      [this.Ball, ...this.SplitBalls],
      this.RightGoal,
      async () => {
        await this.reset("left");
        this.scene.input.once(Phaser.Input.Events.POINTER_DOWN, () =>
          this.start("left")
        );
      },
      () => this.isGameRunning
    );

    this.scene.physics.world.on(
      Phaser.Physics.Arcade.Events.WORLD_BOUNDS,
      (body: Phaser.Physics.Arcade.Body) => {
        if (body === this.Ball.body) this.SFXs.ballBorder.play();
      }
    );
  }

  async reset(winner: "left" | "right" | "none") {
    /**
     * Play losing sound
     */
    this.SFXs.lose.play();
    /**
     * Update score
     */
    this.score[winner === "left" ? 0 : 1]++;
    this.emit("score", this.score);
    this.isGameRunning = false;
    /**
     * Reset powerup stuff
     */
    this.SplitBalls.forEach((ball) => ball.setHide(true).setBounce(1));
    this.Ball.setBounce(1);
    this.RightPaddle.setSize(20, 96);

    await this.Ball.setHide(false).returnToCenter();
  }

  start(winner: "left" | "right") {
    this.UI.countDown().then(() => {
      this.Ball.start("left");
      this.isGameRunning = true;
    });
  }

  activatePowerup(powerup: PowerUp) {
    if (!this.isGameRunning) return;
    switch (powerup) {
      case PowerUp.SplitBall:
        const { x, y } = this.Ball;
        const velocity = this.Ball.body.velocity.length();
        this.Ball.setHide(true).setPosition(
          this.scene.cameras.main.centerX,
          this.scene.cameras.main.centerY
        );
        this.SplitBalls.forEach((ball, index) => {
          const angle = (index / this.SplitBalls.length) * 2 * Math.PI;
          const cos = Math.cos(angle);
          const sin = Math.sin(angle);
          ball
            .setPosition(
              x + cos * this.Ball.body.radius,
              y + sin * this.Ball.body.radius
            )
            .setScale(1 / this.SplitBalls.length)
            .setVelocity(cos * velocity, sin * velocity)
            .setHide(false);
        });
        break;
      case PowerUp.SuperHit:
        this.Ball.setBounce(1.2);
        this.SplitBalls.forEach((ball) => ball.setBounce(1.7));
        break;
      case PowerUp.Shield:
        this.RightPaddle.setSize(20, 144);
        break;
    }
  }

  on(event: "score", callback: (score: score) => void): this;
  on(event: string, callback: (...args: any[]) => void): this;
  on(event: string, callback: (...args: any[]) => void): this {
    return super.on(event, callback);
  }
}
