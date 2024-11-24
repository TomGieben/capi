export class Counter {
    constructor(highscore) {
        this.score = 0;
        this.highscore = highscore;
        this.element = document.querySelector('.counter');
        this.#update();
    }

    increment() {
        this.score++;

        this.#update();
        this.highscore.update(this.score);
    }

    reset() {
        this.score = 0;

        this.#update();
    }

    #update() {
        this.element.innerText = `Jumps: ${this.score}`;
    }
}