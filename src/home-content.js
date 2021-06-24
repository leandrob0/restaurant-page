import './style.css';

const body = document.querySelector("body");

function homeContent() {

    body.classList.add("body");

    const homeContainer = document.createElement('div');
    const textHome = document.createElement('p');

    homeContainer.classList.add('home-container');
    textHome.classList.add('text-home');

    textHome.innerText = "Welcome to leandro's Pizzeria!\n We have the best pizza in the region, to know more about our products check the menu tab! And to know about how to contact us, check the contact tab! ENJOY!";

    homeContainer.appendChild(textHome);
    body.appendChild(homeContainer);
}

function removeHome() {
    body.lastChild.remove();
}

export { homeContent , removeHome }