import {Config} from "../Config";
import {DeviceDetector} from "./DeviceDetector";

export interface Controller
{
    goingLeft(): boolean;
    goingRight(): boolean;
    goingDown(): boolean;
    goingUp(): boolean;
    shooting(): boolean;
    switchingWeapon(): boolean;
    supported(): boolean;
    identifier(): string;
}

export class KeyBoardController implements Controller
{
    private cursors: Phaser.CursorKeys;
    private shotKey: Phaser.Key;
    private switchKey: Phaser.Key;

    constructor(game: Phaser.Game)
    {
        this.cursors = game.input.keyboard.createCursorKeys();
        this.shotKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.switchKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    }

    goingLeft(): boolean
    {
        return this.cursors.left.isDown;
    }

    goingRight(): boolean
    {
        return this.cursors.right.isDown;
    }

    goingDown(): boolean
    {
        return this.cursors.down.isDown;
    }

    goingUp(): boolean
    {
        return this.cursors.up.isDown;
    }

    shooting(): boolean
    {
        return this.shotKey.isDown;
    }

    switchingWeapon(): boolean
    {
        return this.switchKey.isDown;
    }

    supported(): boolean
    {
        return true;
    }

    identifier(): string
    {
        return 'keyboard';
    }
}