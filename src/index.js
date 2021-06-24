import { pageLoad } from './page-load.js';
import { homeContent } from './home-content.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

//DELETES THE CURRENT CONTENT SHOWING
const body = document.querySelector('body');
function removeCurrent() {
    body.lastChild.remove();
}

pageLoad();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeContent();

homeButton.addEventListener('click', () => {
    removeCurrent();
    homeContent();
});
menuButton.addEventListener('click', () => {
    removeCurrent();
    loadMenu();
});
contactButton.addEventListener('click', () => {
    removeCurrent();
    loadContact();
});
