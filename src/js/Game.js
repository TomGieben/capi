import { MovableObject } from './MovableObject.js';
import { Highscore } from './Highscore.js';
import { Counter } from './Counter.js';
import { BaseObstacle } from './obstacles/BaseObstacle.js';
import { Bin } from './obstacles/Bin.js';
import { Cube } from './obstacles/Cube.js';
import { Goose } from './obstacles/Goose.js';
import Sound from './Sound.js';

export default class Game {
    constructor() {
        this.highscore = new Highscore();
        this.counter = new Counter(this.highscore);
        this.backgroundMusicIsPlaying = false;

        this.addPlayer();
        this.addObstacles();
    }

    addObstacles() {
        const obstacles = [
            new Bin(),
            new Cube(),
            new Goose()
        ];

        const timeBetweenObstacles = window.innerWidth > 768 ? 2000 : 3000; // 2s for desktop, 3s for mobile
       
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * obstacles.length);
            const randomObstacle = obstacles[randomIndex];
    
            this.addObstacle(randomObstacle);
        }, timeBetweenObstacles);
    }

    addPlayer() {
        const player = document.querySelector('.player');
        const movablePlayer = new MovableObject(player, this.counter, this);
    
        setInterval(() => {
            movablePlayer.updatePosition();
        }, 20);
    }

    addObstacle(type) {
        const container = document.querySelector('.game-container');
        const obstacle = document.createElement('div');
    
        obstacle.classList.add('obstacle');
        container.appendChild(obstacle);
    
        new BaseObstacle(obstacle, type);
    }

    playBackgroundMusic() {
        if (this.backgroundMusicIsPlaying) {
            return;
        }

        new Sound('background.mp3', true, 0.5);

        this.backgroundMusicIsPlaying = true;
    }
}
