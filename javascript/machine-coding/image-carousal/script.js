document.addEventListener('DOMContentLoaded', () => {
    const divContainer = document.getElementById('image-container');
    const nextBTN = document.getElementById('next');
    const prevBTN = document.getElementById('prev');

    let images = [];
    let index = 0;

    const fetchImages = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products?limit=5');
            if (response.ok) {
                const data = await response.json();
                data.forEach((item) => {
                    images.push(item.image);
                });

                const image = document.createElement('img');
                image.id = "img";
                image.src = images[index];
                image.classList.add('image');
                divContainer.appendChild(image);

                // Disable previous button initially
                prevBTN.setAttribute('disabled', true);
            }
        } catch (error) {
            alert(error);
        }
    };

    fetchImages();

    nextBTN.addEventListener('click', () => {
        const image = document.getElementById('img');
        index++;

        if (index === images.length - 1) {
            nextBTN.setAttribute('disabled', true);
        }

        if (index > 0) {
            prevBTN.removeAttribute('disabled');
        }

        image.src = images[index];
    });

    prevBTN.addEventListener('click', () => {
        const image = document.getElementById('img');
        index--;

        if (index === 0) {
            prevBTN.setAttribute('disabled', true);
        }

        if (index < images.length - 1) {
            nextBTN.removeAttribute('disabled');
        }

        image.src = images[index];
    });
});
