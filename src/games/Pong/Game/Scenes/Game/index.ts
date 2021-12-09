import Background from "./Background";
import Ball from "./Ball";
import Goal from "./Goal";
import Manager from "./Manager";
import Paddle from "./Paddle";
import UI from "./UI";

export default class GameSene extends Phaser.Scene {
  Ball!: Ball;
  Background!: Background;
  leftPaddle!: Paddle;
  rightPaddle!: Paddle;
  Manager!: Manager;
  leftGoal!: Goal;
  rightGoal!: Goal;
  UI!: UI;
  SplitBalls!: Ball[];
  constructor() {
    super("Game");
  }

  create() {
    this.Manager = new Manager(this);

    this.UI = new UI(this, this.Manager);
    this.Background = new Background(this);
    this.Ball = new Ball(this, this.Manager);
    this.SplitBalls = Array(3)
      .fill(false)
      .map((_) => new Ball(this, this.Manager).setHide(true));

    this.leftPaddle = new Paddle(this, this.Manager, 0xbde407, "left");
    this.rightPaddle = new Paddle(this, this.Manager, 0x3a3a3a, "right", {
      touch: true,
    });

    this.leftGoal = new Goal(this, "left");
    this.rightGoal = new Goal(this, "right");

    this.Manager.set(
      this.Ball,
      this.SplitBalls,
      this.leftPaddle,
      this.rightPaddle,
      this.leftGoal,
      this.rightGoal,
      this.UI
    ).manage();
  }
}
