class Trashcan {
    apply(element) {
        element.style.width = '50px';
        element.style.height = '50px';
        element.style.backgroundImage = 'url("/storage/images/bin-windows.png")';
        element.classList.add('moving-obstacle');
    }
}
