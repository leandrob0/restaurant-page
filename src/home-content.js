import './style.css';

function homeContent() {
    const body = document.querySelector("body");

    body.classList.add("body");

    const homeContainer = document.createElement('div');
    const textHome = document.createElement('p');

    homeContainer.classList.add('home-container');
    textHome.classList.add('text-home');

    textHome.innerText = "Cras dignissim scelerisque ante. Suspendisse finibus sit amet sapien vel pellentesque. Nunc rhoncus eget lorem ut porttitor. Nunc vitae mi vulputate, euismod arcu eget, sodales lacus. Mauris sit amet nulla nibh. Curabitur vel nisi odio. Proin aliquam ultrices commodo.";

    homeContainer.appendChild(textHome);
    body.appendChild(homeContainer);
}

export { homeContent }