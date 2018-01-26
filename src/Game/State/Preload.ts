
import {Config} from "../../Config";

export default class Preload extends Phaser.State
{
    public preload ()
    {
        this.loadAudio();
        this.loadLevels();
        this.loadGameImages();
        this.loadFonts();
    }

    public create ()
    {
        this.game.state.start('Menu');
    }

    private loadAudio()
    {
    }

    private loadLevels()
    {
        //this.load.text('levels', 'assets/data/levels.json');
    }

    private loadGameImages()
    {
        //this.load.spritesheet('ControllerIndicator', 'assets/controllers/controller-indicator.png', 16,16);
        //this.load.spritesheet('Top', 'assets/sprites/top.png', 1, 1);
    }

    private loadFonts()
    {
        //this.load.bitmapFont('carrier-command', 'assets/fonts/carrier_command.png', 'assets/fonts/carrier_command.xml');
    }
}
