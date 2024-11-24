import Sound from './Sound.js';

export default class Gameover {
    constructor(score) {
        this.score = score;
        this.init();
    }

    init() {
        new Sound('gameover.mp3');
        this.showModal();
    }

    showModal() {
        const modalHtml = `
            <div class="modal fade" id="gameoverModal" tabindex="-1" aria-labelledby="gameoverModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="gameoverModalLabel">Game Over</h5>
                        </div>
                        <div class="modal-body">
                            Amount of Jumps: ${this.score}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" id="reloadButton">Play Again</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const modal = new bootstrap.Modal(document.getElementById('gameoverModal'));
        
        modal.show();

        document.getElementById('reloadButton').addEventListener('click', () => {
            location.reload();
        });
    }
}