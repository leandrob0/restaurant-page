import './style.css';

const body = document.querySelector('body');

function loadMenu() {
    let i = 0;
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');
    while(i < 6) {
        const newDiv = document.createElement('div');
        const titleProduct = document.createElement('h2');
        const descProduct = document.createElement('p');

        newDiv.classList.add('product');

        titleProduct.innerText = "This is a product";
        descProduct.innerText = "The best product we have!\n Try it out for $19,99";

        newDiv.appendChild(titleProduct);
        newDiv.appendChild(descProduct);

        menuContainer.appendChild(newDiv);
        body.appendChild(menuContainer);

        i++
    }
}

export { loadMenu }