import './style.css';

const body = document.querySelector("body");

function loadContact() {
    const newDiv = document.createElement('div');
    const titleContact = document.createElement('h2');
    const emailText = document.createElement('p');
    const phoneText = document.createElement('p');

    newDiv.classList.add('contact-container');
    titleContact.classList.add('contact-title');

    titleContact.innerText = "CONTACT US!";
    emailText.innerText = "Email: pizzeria.leandro@gmail.com";
    phoneText.innerText = "Phone: (+34) 44213";

    newDiv.appendChild(titleContact);
    newDiv.appendChild(emailText);
    newDiv.appendChild(phoneText);
    body.appendChild(newDiv);
}

export { loadContact }