const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', function () {
    const trimValue = inputName.value.trim();
    outputName.textContent = trimValue || 'Anonymous';
});