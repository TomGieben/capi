export class Highscore {
    constructor() {
        this.highscore = 0;
        this.element = document.querySelector('.highscore');
        this.load();
    }

    load() {
        const highscore = localStorage.getItem('highscore');

        if (highscore) {
            this.highscore = highscore;
        }

        this.element.innerText = `Highscore: ${this.highscore}`;
    }

    save() {
        localStorage.setItem('highscore', this.highscore);
        this.load();
    }

    update(score) {
        if (score > this.highscore) {
            this.highscore = score;
            this.save();
        }
    }
}