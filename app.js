// app.js - Main Application Logic

// 1. Tab Navigation Logic
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        navBtns.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));

        // Add active class to clicked
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// 2. Translation & RTL Logic
const langSwitch = document.getElementById('lang-switch');
const translatableElements = document.querySelectorAll('[data-i18n]');

function setLanguage(lang) {
    const dictionary = i18n[lang];
    translatableElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dictionary[key]) {
            el.textContent = dictionary[key];
        }
    });

    if (lang === 'he') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'he');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }
}

langSwitch.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

// Initialize
setLanguage('en');
