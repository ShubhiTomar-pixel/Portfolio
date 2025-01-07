// Interactive text area effect
document.getElementById('interactive-text').addEventListener('input', function () {
    const textarea = document.getElementById('interactive-text');
    if (textarea.value.length > 0) {
        textarea.style.backgroundColor = '#dfe6e9';
    } else {
        textarea.style.backgroundColor = '#fff';
    }
});
