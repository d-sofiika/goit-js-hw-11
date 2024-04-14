import {fetch} from './js/pixabay-api';
import { createMarkup } from "./js/render-functions";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";




const form = document.querySelector(".form-search");
const placeImg = document.querySelector(".card-container");
const loader = document.querySelector(".loader");
loader.style.borderColor = 'white';
loader.style.borderBottomColor = 'transparent';

const book = new SimpleLightbox('.card .card-container a', {
  captionsData: 'alt',
  captionDelay: 250,
});


form.addEventListener("submit", handleSubmit);

    
async function handleSubmit(event) {
    event.preventDefault();
    placeImg.innerHTML = "";

    loader.style.borderColor = 'black';
    loader.style.borderBottomColor = 'transparent';
    const nameImg = form.elements.text.value.trim();
    
    fetch(nameImg, loader, placeImg)
        .then(data => {
            if (data.total === 0) {
                return
            } else {
                placeImg.insertAdjacentHTML("beforeend", createMarkup(data))
                book.refresh();
                form.elements.text.value = '';
            }
           
        })
        .catch(error => {
            iziToast.show({
                title: 'Ops.',
                titleColor: 'white',
                message: error,
                messageColor: 'white',
                color: 'red',
                position: 'topCenter',
                timeout: '5000',
            });
        })
        .finally(() => {
            loader.style.borderColor = 'white';
            loader.style.borderBottomColor = 'transparent';
        })
    
}

