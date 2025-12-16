// Scroll to top button functionality
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.createElement('button');
    scrollButton.textContent = '↑';
    scrollButton.style.position = 'fixed';
    scrollButton.style.bottom = '30px';
    scrollButton.style.right = '30px';
    scrollButton.style.backgroundColor = '#e74c3c';
    scrollButton.style.border = 'none';
    scrollButton.style.padding = '1rem';
    scrollButton.style.color = '#fff';
    scrollButton.style.borderRadius = '50%';
    scrollButton.style.cursor = 'pointer';
    scrollButton.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    document.body.appendChild(scrollButton);

    scrollButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
