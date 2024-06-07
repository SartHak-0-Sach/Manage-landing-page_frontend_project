const formItem = document.querySelectorAll(".form._input");
const formError = document.querySelectorAll(".form.-errorMessage");

let viewport = document.querySelector('.wrapper.-testimonials');
let testimonials = document.getElementsByClassName('card _testimonials');
let cardWidth = getElementDimensions(testimonials[0])[0]
let viewRange = Math.ceil(viewport.clientWidth / cardWidth);
let initCardContainer = [];
let currentImg = 0;
let delay = 6500;

window.onload = auto;

/* email check */
function formCheck(event) {
    for (let i = 0; i < formItem.length; i++) {
        console.log(formItem[i].checkValidity())
        if (!formItem[i].checkValidity()) {
            if (formItem[i].type == 'email') {
                formError.innerHTML = 'Looks like this is not an email';
            }
            formItem[i].oninvalid = function (e) {
                e.preventDefault();
            }

            if (!formError[i].classList.contains('-active')) {
                formError[i].classList.toggle('-active');
                formItem[i].classList.toggle('-error');
            }

            formItem[i].addEventListener('keydown', function () {
                formItem[i].style.color = 'rgb(0,0,0)';
            });
        } else {
            formItem[i].value = '';
            formError[i].classList.toggle('-active');
            formItem[i].classList.toggle('-error');
        }

    }
}


/* get element Margin / Border / Width / Height / total Dimensions */
function getMargin(element) {
    let margin = [];
    let style = getComputedStyle(element);

    margin.push(parseInt(style.marginTop));
    margin.push(parseInt(style.marginRight));
    margin.push(parseInt(style.marginBottom));
    margin.push(parseInt(style.marginLeft));

    return margin;
}

function getBorder(element) {
    let border = [];
    let style = getComputedStyle(element);

    border.push(parseInt(style.borderTopWidth) || 0);
    border.push(parseInt(style.borderRightWidth) || 0);
    border.push(parseInt(style.borderBottomWidth) || 0);
    border.push(parseInt(style.borderLeftWidth) || 0);

    return border;
}

function getDimensions(element) {
    let dimensions = [];

    dimensions.push(element.clientWidth);
    dimensions.push(element.clientHeight);

    return dimensions;
}

function getElementDimensions(element) {
    let dimensions = [];
    let margin = getMargin(element);
    let border = getBorder(element);
    let xy = getDimensions(element);

    dimensions.push(xy[0] + border[1] + border[3] + margin[1] + margin[3]);
    dimensions.push(xy[1] + border[0] + border[2] + margin[0] + margin[2]);

    return dimensions;
}

/* testimonial slider */
function initCards(cards) {
    let maxItems = cards.length;
    let emptyContainer;

    if (initCardContainer.length === 0) {
        initCardContainer.push([(maxItems - 1), true]);
        emptyContainer = true;
    }

    for (let i = 0; i < maxItems; i++) {
        initCardContainer.push([i, false]);
    }

    addCard(initCardContainer, emptyContainer, cards);
}

function addCard(initCards, isEmpty = true, cards) {
    for (let i = 0; i < initCards.length - 1; i++) {
        let newChild = cards[i].cloneNode(true);

        if (initCards[i][1]) {
            cards[0].parentNode.insertBefore(cards[(cards.length - 1)].cloneNode(true), cards[0]);
        }

        if (isEmpty) {
            isEmpty = false;
            return;
        } else if (!initCards[i][1])
            cards[0].parentNode.appendChild(newChild);
    }
}

function moveCards(elements, reset = false) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('-move');

        if (i === 3)
            elements[3].classList.add('-active');
        else
            elements[i].classList.remove('-active');
    }
}

function switchCards(elements) {
    arrangeCards(elements);
    moveCards(elements);
}

function arrangeCards(elements) {
    elements[0].parentNode.appendChild(elements[1].cloneNode(true));
    elements[0].parentNode.removeChild(elements[0]);
}

function wait(ms = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function go(cards, timeWaiting) {
    await wait(timeWaiting / 2);
    moveCards(cards);
    showCardSelection(cards);
    await wait(timeWaiting);
    switchCards(cards);
    await wait(timeWaiting / 2);
}

function auto() {

    initCardsSelectionCircle(testimonials);
    initCards(testimonials);
    testimonials[3].classList.add('-active');
    showCardSelection(testimonials, true);

    setTimeout(function cardCarussel(cards, time) {
        go(cards, delay * .9);
        setTimeout(cardCarussel, delay, testimonials, delay)
    }, 1000, testimonials, delay);
}



function initCardsSelectionCircle(elements) {
    let slider = document.createElement('div');
    slider.classList.add('slider', '_testimonials');
    elements[0].parentNode.insertAdjacentElement('afterend', slider);

    for (let i = 0; i < elements.length; i++) {
        let cardCircle = document.createElement('div');

        if (elements[i].classList.contains('-active')) {
            cardCircle.classList.add('circle', '_slider', '-active');
        } else
            cardCircle.classList.add('circle', '_slider');

        slider.insertAdjacentElement('beforeend', cardCircle);
    }
}

function showCardSelection(elements, init = false) {
    let selections = document.querySelectorAll('.circle._slider');
    let slider = document.querySelector('.slider');

    if (window.outerWidth > 1190)
        slider.style.display = 'none';
    else if (init) {
        selections[0].classList.add('-active');
    } else
        for (let i = 0; i < selections.length; i++) {
            if (selections[selections.length - 1].classList.contains('-active')) {
                selections[selections.length - 1].classList.remove('-active');
                selections[0].classList.add('-active');
            } else if (selections[i].classList.contains('-active')) {
                selections[i].classList.remove('-active');
                selections[i + 1].classList.add('-active');
                return;
            }
        }
}