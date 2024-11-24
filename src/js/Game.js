import { MovableObject } from './MovableObject.js';
import { Highscore } from './Highscore.js';
import { Counter } from './Counter.js';
import { BaseObstacle } from './obstacles/BaseObstacle.js';
import { Bin } from './obstacles/Bin.js';
import { Cube } from './obstacles/Cube.js';

export default class Game {
    constructor() {
        this.highscore = new Highscore();
        this.counter = new Counter(this.highscore);

        this.addPlayer();
        this.addObstacles();
    }

    addObstacles() {
        const obstacles = [
            new Bin(),
            new Cube()
        ];

        const timeBetweenObstacles = 2000;
       
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * obstacles.length);
            const randomObstacle = obstacles[randomIndex];
    
            this.addObstacle(randomObstacle);
        }, timeBetweenObstacles);
    }

    addPlayer() {
        const player = document.querySelector('.player');
        const movablePlayer = new MovableObject(player, this.counter);
    
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
}
