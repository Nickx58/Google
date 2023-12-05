const btn = document.querySelector('button');
const form = document.querySelector('form');
const input = document.querySelector('input');

input.addEventListener('input', e => {
    console.log(e.target.value === '')
});

form.addEventListener('submit', e => {
    e.preventDefault();
});

btn.addEventListener('click', () => {
    console.log('Clicked')
});