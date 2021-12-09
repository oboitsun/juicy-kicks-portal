import { NineSlice } from "phaser3-nineslice";
import Manager from "../Manager";

type ValuesOf<T> = T[keyof T];
export interface inputConfiguration {
  keys?: {
    up: ValuesOf<typeof Phaser.Input.Keyboard.KeyCodes>;
    down: ValuesOf<typeof Phaser.Input.Keyboard.KeyCodes>;
  };
  touch?: boolean;
}

export default class Paddle extends NineSlice {
  static readonly keyboardVerticalMovement = 15;

  body!: Phaser.Physics.Arcade.Body;
  constructor(
    scene: Phaser.Scene,
    private manager: Manager,
    public readonly color: number,
    public readonly side: "left" | "right",
    private readonly inputConfiguration?: inputConfiguration
  ) {
    super(
      scene,
      {
        sourceKey: "paddle",
        sourceLayout: {
          topLeft: {
            width: 6,
            height: 6,
          },
          topRight: {
            width: 7,
            height: 6,
          },
          bottomRight: {
            width: 7,
            height: 7,
          },
          bottomLeft: {
            width: 6,
            height: 7,
          },
        },
      },
      {
        x: 0,
        y: 0,
        width: 20,
        height: 96,
      }
    );

    this.addToScene()
      .setOrigin(0.5)
      .setTint(color)
      .setPosition(
        this.scene.cameras.main.width * (this.side === "left" ? 0.125 : 0.875),
        this.scene.cameras.main.height / 2
      )
      .setUpControls();

    this.body
      .setCollideWorldBounds(true)
      .setImmovable(true)
      .setSize(this.width, this.height, true);
  }

  setUpControls(): this {
    if (!this.inputConfiguration) {
      /**
       * set up computer controls
       */

      this.scene.events.on(Phaser.Scenes.Events.UPDATE, () => {
        this.y = Phaser.Math.Linear(this.y, this.manager.Ball.y, 0.05);
      });
    } else {
      const { keys: keyCodes, touch } = this.inputConfiguration;

      /**
       * Set up keyboard input if defined
       */
      if (keyCodes) {
        const keys = this.scene.input.keyboard.addKeys(
          keyCodes,
          true,
          true
        ) as {
          [key in keyof Required<inputConfiguration>["keys"]]: Phaser.Input.Keyboard.Key;
        };

        this.scene.events.on(Phaser.Scenes.Events.UPDATE, () => {
          if (this.scene.input.keyboard.checkDown(keys.up))
            this.y -= Paddle.keyboardVerticalMovement;
          else if (this.scene.input.keyboard.checkDown(keys.down))
            this.y += Paddle.keyboardVerticalMovement;
        });
      }

      if (touch) {
        /**
         * add extra pointer to be managed by phaser inputManager
         */
        this.scene.input.addPointer();
        // keep pointer to current pointer
        let activePointer: Phaser.Input.Pointer | undefined;
        this.scene.input.on(
          Phaser.Input.Events.POINTER_DOWN,
          (pointer: Phaser.Input.Pointer) => {
            if (
              (this.side === "left" &&
                pointer.worldX < this.scene.cameras.main.width / 2) ||
              (this.side === "right" &&
                pointer.worldX > this.scene.cameras.main.width / 2)
            )
              activePointer = pointer;
          }
        );
        this.scene.input.on(
          Phaser.Input.Events.POINTER_MOVE,
          (pointer: Phaser.Input.Pointer) => {
            if (activePointer === pointer) this.setY(pointer.worldY);
          }
        );
        this.scene.input.on(
          Phaser.Input.Events.POINTER_UP,
          (pointer: Phaser.Input.Pointer) => {
            if (activePointer === pointer) activePointer = undefined;
          }
        );
      }
    }

    return this;
  }

  setSize(width: number, height: number) {
    this.body?.setSize(width, height, false).setOffset(0, 0);
    return super.setSize(width, height);
  }

  addToScene(): this {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this, false);

    return this;
  }
}
