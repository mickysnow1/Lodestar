// Basic interactivity for buttons
document.querySelectorAll('.book-call, .sign-up, .contact-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = '#1e3a8a';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = '#1e40af';
    });
});
