/*

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: 
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al
posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia
per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

*/

let image = [
    "./_assets/_resources/imgs/01.webp",
    "./_assets/_resources/imgs/02.webp",
    "./_assets/_resources/imgs/03.webp",
    "./_assets/_resources/imgs/04.webp",
    "./_assets/_resources/imgs/05.webp"
];

const prev = document.querySelector(".handelPrev");
const next = document.querySelector(".handelNext");

next.addEventListener('click', function () {
    let activeItem = document.querySelector('.item.active');
    console.log(activeItem)

    let itemToActive = activeItem.nextElementSibling
    console.log(itemToActive)

    if (activeItem.classList.contains('last')) {
        itemToActive = document.querySelector('item.first');
    }

    if (itemToActive === null) {
        itemToActive = document.querySelector('.item.first');
    }

    activeItem.classList.remove('active');

    itemToActive.classList.add('active');
})

prev.addEventListener('click', function () {
    let activeItem = document.querySelector('.item.active');
    console.log(activeItem)

    let itemToActive = activeItem.previousElementSibling
    console.log(itemToActive)

    if (activeItem.classList.contains('first')) {
        itemToActive = document.querySelector('item.last');
    }

    if (itemToActive === null) {
        itemToActive = document.querySelector('.item.last');
    }

    activeItem.classList.remove('active');

    itemToActive.classList.add('active');
})

let currentIndex = 0;
let slider = document.querySelector('.items');
let carouselImages = '';

for (let i = 0; i < image.length; i++) {
    let className = i === 0 ? 'active ' : '';
    if (i === 0) {
        className += 'first';
    } else if (i === image.length - 1) {
        className += 'last';
    }
    carouselImages += `
    <div class="item ${className}">
        <img src="${image[i]}" alt="Image">
    </div>
    `;
}

slider.innerHTML = carouselImages;