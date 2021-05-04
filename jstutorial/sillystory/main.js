// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
document.querySelector('html').style.backgroundColor = '#ddd';

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = `It was 94 fahrenheit outside, so ${xItem} went for a walk. When they got to ${yItem}, they stared in horror for a few moments, then ${zItem}. Bob saw the whole thing, but was not surprised — ${xItem} weighs 300 pounds, and it was a hot day.`;

let insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"];

let insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"];

let insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  if(customName.value !== '') {
    let name = customName.value;
    newStory = newStory.replace('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14) + ' stone';
    let temperature =  Math.round((94 - 32) * (5/9)) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}



const customAge = document.getElementById('customage');
const generateAge = document.querySelector('generateage');
const displayAge = document.querySelector('displayage');

generateAge.addEventListener('click', display);

function display() {
  displayAge.textContent = customAge;
  displayAge.style.visibility = 'visible';
}