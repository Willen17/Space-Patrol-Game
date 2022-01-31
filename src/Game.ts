
class Game implements IGame {
    public pauseMenu: PauseMenu;
    //public startMenu: StartMenu;
    //private startMenu: StartMenu;
    private score: number;
    private gameOver: boolean;
    private gameEngine: GameEngine;
    public gameState: GameState;

    constructor() {
        this.gameState = "start";
        this.pauseMenu = new PauseMenu(this);
        //this.startMenu = new StartMenu(this);
        //this.startMenu = new StartMenu(this);
        this.gameEngine = new GameEngine();
        this.score = 0;
        this.gameOver = false;
        this.playSound();
    }

    // private restartGame() {
    //    this.gameEngine = new GameEngine();
    // }

     public playSound() {
         
             sound[0].setVolume(.05);
             sound[0].loop(); 
         
     }
    
    public update() {
        if (this.gameState === 'running') {
            this.gameEngine.update();
            
            
            if (keyIsDown(80)) {
                this.gameState = 'paused';
                this.pauseMenu.open();
            }
        }
    }
    
    
    public draw() {
        if (this.gameState === 'running') {
            this.gameEngine.draw();
        }
    }

}