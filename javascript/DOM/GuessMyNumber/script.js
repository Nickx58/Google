'use strict';

document.querySelector('.check').addEventListener('click', function() {
    const inputValue = Number(document.querySelector('.guess').value);
    if(!inputValue) {
        document.querySelector('.message').textContent = 'No Number'
        return;
    }
})