class MovableObject {
    constructor(element) {
        this.element = element;
        this.position = 0;
        this.isJumping = false;
        this.jumpCount = 0;
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
        this.incrementCounter();
        
        setTimeout(() => {
            this.element.classList.remove('jumping');
            this.isJumping = false;
        }, 2000);
    }

    incrementCounter() {
        this.jumpCount += 1;
        const counter = document.querySelector('.counter');
        counter.innerText = `Jumps: ${this.jumpCount}`;
    }

    checkCollision(obstacle) {
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
            if (this.checkCollision(obstacle)) {
                alert('Game Over!');
                window.location.reload();
            }
        });
    }
}