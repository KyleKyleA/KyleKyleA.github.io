

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



const storytext = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertx = ['Willy the Goblin', 'Big daddy', 'father christmas' ];

const inserty = ['the soup kitchen', 'Disneyland', 'the White House'];

const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];



randomize.addEventListener('click', result);

function result() {
    let newstory = storytext;

    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);

    newstory = newstory.replaceAll(':insertx:',xItem );
    newstory = newstory.replaceAll(':inserty:',yItem )
    newstory = newstory.replaceAll(':insertz:',zItem )

  if(customName.value !== '') {
    const name = customName.value;
    newstory = newstory.replaceAll('bob', name );
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    newstory = newstory.replaceAll('94 fahrenheit',temperature )
    newstory = newstory.replaceAll('300 pounds',weight )
  }

  story.textContent = ;
  story.style.visibility = 'visible';
}