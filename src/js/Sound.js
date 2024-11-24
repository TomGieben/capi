
export default class Sound {
    constructor(file, loop = false, volume = 1) {
        const prefix = 'storage/sounds/';
        const audio = new Audio(prefix + file);
       
        audio.loop = loop;
        audio.volume = volume;

        audio.play();
    }
}