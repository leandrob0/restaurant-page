import { pageLoad } from './page-load.js';
import { homeContent, removeHome} from './home-content.js';
import { loadMenu } from './menu.js';

pageLoad();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

homeContent();

homeButton.addEventListener('click', homeContent);
menuButton.addEventListener('click', () => {
    removeHome();
    loadMenu();
});
contactButton.addEventListener('click', () => {console.log("hello!")});
