document.addEventListener('DOMContentLoaded', () => {
    addPlayer();
    addObject(new Trashcan());
    addCounter();
});

function addPlayer() {
    const player = document.querySelector('.player');
    const movablePlayer = new MovableObject(player);

    setInterval(() => {
        movablePlayer.updatePosition();
    }, 20);
}

function addObject(type) {
    const container = document.querySelector('.container');
    const obstacle = document.createElement('div');

    obstacle.classList.add('obstacle');
    container.appendChild(obstacle);

    new BaseObstacle(obstacle, type);
}

function addCounter() {
    const counter = document.createElement('div');
    counter.classList.add('counter');
    counter.innerText = 'Jumps: 0';
    document.body.appendChild(counter);
}
