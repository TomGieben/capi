
class BaseObstacle {
    constructor(element, strategy) {
        this.element = element;
        this.strategy = strategy;
        this.init();
    }

    init() {
        this.strategy.apply(this.element);
    }
}