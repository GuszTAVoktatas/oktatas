// include_nav.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('nav.html') // Győződj meg róla, hogy az útvonal helyes
        .then(response => response.text())
        .then(data => {
            const navElement = document.querySelector('nav');
            if (navElement) {
                navElement.innerHTML = data;
            }
        })
        .catch(error => console.error('Hiba a navigáció betöltésekor:', error));
});