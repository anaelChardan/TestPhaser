
import {Config} from "../../Config";
import {Controller, KeyBoardController} from "../Controller";
import {DeviceDetector} from "../DeviceDetector";

export default class Menu extends Phaser.State {

    private startText : Phaser.BitmapText;
    private keyboardController: KeyBoardController;
    private isMobile: boolean;

    public create ()
    {
        const detector = new DeviceDetector(this.game.device);
        this.isMobile = detector.isMobile();
    }

    public update()
    {
    }

    public shutdown ()
    {
    }
}
