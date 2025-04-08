const navLinks = document.querySelectorAll('.nav-list a');




navLinks.forEach(link => {
    link.addEventListener('click', () => {

        navLinks.forEach(l => l.classList.remove('selected'));

        link.classList.add('selected');
    });
});