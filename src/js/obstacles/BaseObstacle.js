export class BaseObstacle {
    constructor(element, strategy) {
        this.element = element;
        this.strategy = strategy;
        this.init();
    }

    init() {
        this.strategy.apply(this.element);
        this.element.classList.add('moving-obstacle');

        setInterval(() => {
            if (this.isOutOfScreen()) {
                this.element.remove();
            }
        }, 100);
    }

    isOutOfScreen() {
        const obstacleRect = this.element.getBoundingClientRect();
        return obstacleRect.right < 0;
    }
}