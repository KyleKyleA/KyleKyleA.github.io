/**
 * Get references to elements
 */
const DisplayedImage = document.querySelector('.DisplayedImage ');
const thumbBar = document.querySelector('.thumb-Bar');
const btn = document.querySelector('.button');
const overlay = document.querySelector('.overlay');
/**
 * Declare an array of image filenames
 */
const ImageFileNames = ['pic1.jpg' , 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg' ];
/**
 * Declare an object for alt texts
 */
const altTexts = {
        'pic1.jpg' : 'A beautiful sunrise over the mountains',
        'pic2.jpg' : 'A tranquil lake in the forest',
        'pic3.jpg' : 'A vast desert landscape',
        'pic4.jpg' : 'A stunning waterfall',
        'pic5.jpg' : 'A colorful sunset at the beach'
};
/**
 * Using a loop through images and add them to the thumb-bar
 */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${images}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        DisplayedImage.src = e.target.src;
        DisplayedImage.alt = e.target.alt;
    })
}
/**
 * Writing a handler that runs the darken and lightn button
 */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});

