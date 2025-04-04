/**
 * Get references to elements
 */
const DisplayedImage = document.querySelector('.displayed-image ');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');
/**
 * Declare an array of image filenames
 */
const images = [
  'pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg',];
/**
 * Declare an object for alt texts
 */
const alts = {
        'pic1.jpg' : 'Closeup of a human eye',
        'pic2.jpg' : 'Rock that looks like a wave',
        'pic3.jpg' : 'Purple and white pansies',
        'pic4.jpg' : 'Section of wall from a pharoahs\'s tomb',
        'pic5.jpg' : 'Large moth on a leaf',
}
/**
 * Using a loop through images and add them to the thumb-bar
 */
for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', (e) => {
      DisplayedImage.src = e.target.src;
      DisplayedImage.alt = e.target.alt;
  });
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

