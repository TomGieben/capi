import Gameover from './Gameover.js';
import Sound from './Sound.js';

export class MovableObject {
    constructor(element, counter, game) {
        this.element = element;
        this.position = 0;
        this.isJumping = false;
        this.counter = counter;
        this.stop = false;
        this.game = game;
        this.init();
    }

    init() {
        document.addEventListener('keydown', (event) => this.handleKeydown(event));
        document.addEventListener('mousedown', (event) => this.handleKeydown(event));
        document.addEventListener('touchstart', (event) => this.handleKeydown(event));
    }

    handleKeydown(event) {
        const isSpacebar = event.key === ' ';
        const isMouse = event.type === 'mousedown';
        const isTouch = event.type === 'touchstart';
        
        if (isSpacebar || isMouse || isTouch) {
            this.jump();
            this.game.playBackgroundMusic();
        }
    }

    jump() {
        if (this.isJumping) {
            return;
        }

        new Sound('jump.mp3');

        this.isJumping = true;
        this.element.classList.add('jumping');
        this.counter.increment();

        const jumpHeight = window.innerHeight * 0.3; // 30% of the screen height
        this.element.style.setProperty('--jump-height', `${jumpHeight}px`);

        setTimeout(() => {
            this.element.classList.remove('jumping');
            this.isJumping = false;
        }, config.jumpDuration);
    }

    inCollision(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.getBoundingClientRect();

        return !(
            playerRect.top > obstacleRect.bottom ||
            playerRect.bottom < obstacleRect.top ||
            playerRect.right < obstacleRect.left ||
            playerRect.left > obstacleRect.right
        );
    }

    updatePosition() {
        this.element.style.transform = `translateY(${this.position}px)`;
        const obstacles = document.querySelectorAll('.obstacle');

        obstacles.forEach(obstacle => {
            if (this.inCollision(obstacle) && !this.stop) {
                this.stop = true;
                new Gameover(this.counter.score);
            }
        });
    }
}