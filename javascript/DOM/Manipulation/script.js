const fetchButton = document.querySelector('#fetch');
const divContainer = document.querySelector('#container');
const ulElement = document.createElement('ul');
const loader = document.querySelector('.loader');

const fetchData = async () => {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json();
        loader.style.display = 'none'
        divContainer.appendChild(ulElement);
        for (let i = 0; i < data.length; i++) {
            const listElemet = document.createElement('li');
            listElemet.textContent = data[i].name;
            ulElement.appendChild(listElemet);
        }
    } catch (error) {
        alert(error);
    }
}
fetchButton.addEventListener('click', () => {
    loader.style.display = 'block'
    fetchData();
})