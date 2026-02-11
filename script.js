// ===== HAMBURGER MENU - SIMPLE & GUARANTEED =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.onclick = function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
}

// ===== CLOSE MENU WHEN LINK CLICKED =====
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.onclick = function() {
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});
