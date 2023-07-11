const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(e) {
    // console.log(this.classList.value);
    console.log(this);
    e.stopPropagation(); // stops bubbling
}

// document.body.addEventListener('click', logText);

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true  // only allows one click (e.g. store checkouts)
}));

button.addEventListener('click', () => {
    console.log('Click!');
}, {
    once: true
})
