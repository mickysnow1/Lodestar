document.querySelectorAll('.book-call, .sign-up, .contact-btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.style.background = 'linear-gradient(90deg, #2563eb, #3b82f6)';
    });
    btn.addEventListener('mouseout', () => {
        btn.style.background = 'linear-gradient(90deg, #3b82f6, #60a5fa)';
    });
});

document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = 'inset 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(59, 130, 246, 0.2)';
    });
    input.addEventListener('blur', () => {
        input.style.boxShadow = 'inset 0 2px 5px rgba(0, 0, 0, 0.05)';
    });
});
