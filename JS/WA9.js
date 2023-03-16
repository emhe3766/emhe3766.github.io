
const randomize = document.querySelector('.randomize');
const customName = document.getElementById('customname');
const story = document.querySelector('.story');

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
let insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
let insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}
randomize.addEventListener('click', result);
function result() {
    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem).replace(':insertx:', xItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
    }
    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14);
        const temperature =  Math.round((94-32) * 0.55);
        newStory = newStory.replace('94', temperature).replace('fahrenheit', 'centigrade').replace('300', weight).replace('pounds','stones');
    }

story.textContent = newStory;
story.style.visibility = 'visible';
}
