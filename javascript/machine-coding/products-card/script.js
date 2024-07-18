document.addEventListener('DOMContentLoaded', () => {
    const divContainer = document.getElementById('container');
    let products = [];

    const fetchProducst = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=12');

            if (response.ok) {
                const data = await response.json();
                if (data) {
                    products = data;
                    console.log(products)
                    generateCardUI();
                }
            }
        } catch (error) {
            alert(error);
        }
    }
    fetchProducst()
    function generateCardUI() {
        products.forEach((item) => {
            const div = document.createElement('div');
            div.classList.add('card')
            div.innerHTML = `
                <h2>${item.title}</h2>
                <p>${item.description}</p>
            `
            divContainer.appendChild(div);
        })
    }
})