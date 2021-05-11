const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

for (let i = 1; i <= 5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/pic${i}.jpg`);
    thumbBar.appendChild(newImage); 

    let imageSelect = () => newImage.getAttribute('src', `./images/pic${i}.jpg`);

    newImage.addEventListener('click', e => {
        displayedImage.setAttribute('src', imageSelect())
    })
}


/* Wiring up the Darken/Lighten button */

let lighten = () => {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}

let darken = () => {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

}

btn.addEventListener('click', () => {
    let btnAtt = btn.getAttribute('class');
    
    if (btnAtt === 'dark') {
        darken();
    } else if (btnAtt === 'light') { 
        lighten();
    }
})