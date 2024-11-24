import Gameover from './Gameover.js';

export class MovableObject {
    constructor(element, counter) {
        this.element = element;
        this.position = 0;
        this.isJumping = false;
        this.counter = counter;
        this.stop = false;
        this.init();
    }

    init() {
        document.addEventListener('keydown', (event) => this.handleKeydown(event));
    }

    handleKeydown(event) {
        const isSpacebar = event.key === ' ';
        
        if (isSpacebar) {
            this.jump();
        }
    }

    jump() {
        if (this.isJumping) {
            return;
        }

        this.isJumping = true;
        this.element.classList.add('jumping');
        this.counter.increment();
        
        setTimeout(() => {
            this.element.classList.remove('jumping');
            this.isJumping = false;
        }, 1500);
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