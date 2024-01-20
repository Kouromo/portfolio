function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');

    // Ajout de cette ligne pour cacher le menu lors d'un deuxième clic
    if (!menu.classList.contains('show')) {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

function sendMail() {
    
}