import './style.css';

const body = document.querySelector("body");

function pageLoad() {

    body.classList.add("body");

    /*

    #########################################################

        HEADER CONTENT

    #########################################################

    */
    const header = document.createElement('header');
    const divTitle = document.createElement('div');
    const divLinks = document.createElement('div');
    const title = document.createElement('h1');
    const nav1 = document.createElement('a');
    const nav2 = document.createElement('a');
    const nav3 = document.createElement('a');

    nav1.setAttribute('href','#');
    nav2.setAttribute('href','#');
    nav3.setAttribute('href','#');

    nav1.setAttribute('id', 'home');
    nav2.setAttribute('id', 'menu');
    nav3.setAttribute('id', 'contact');

    divTitle.classList.add('title-container');
    divLinks.classList.add('link-container');
    title.classList.add('title');
    nav1.classList.add('link');
    nav2.classList.add('link');
    nav3.classList.add('link');

    title.textContent = "Pizzeria";

    nav1.textContent = "Home";
    nav2.textContent = "Menu";
    nav3.textContent = "Contact us";

    divTitle.appendChild(title);
    divLinks.appendChild(nav1);
    divLinks.appendChild(nav2);
    divLinks.appendChild(nav3);

    header.appendChild(divTitle);
    header.appendChild(divLinks);

    body.appendChild(header);
}

export { pageLoad }