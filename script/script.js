document.addEventListener('DOMContentLoaded', function() {
    const element = document.getElementById('myElement');
    if (element) {
        element.classList.add('newClass');
        element.textContent = 'DOM is fully loaded and parsed!';
    }
});
