const button = document.querySelector("#js-new-quote");
button.addEventListener('click', getQuote);

const answerButton = document.querySelector("#js-tweet");
answerButton.addEventListener('click', getPuppy);

const endpoint = "https://www.boredapi.com/api/activity";
const endpoint1 = "https://dog.ceo/api/breeds/image/random";

async function getQuote() {
    // console.log("It works!");
    try {
        const response = await fetch(endpoint)
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        console.log(json.activity);
        displayQuote(json.activity);
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}
async function getPuppy() {
    // console.log("It works!");
    try {
        const response = await fetch(endpoint1)
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        document.getElementById("puppy").src = json.message;
        console.log(json.message);
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}
function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}
function showAnswer(quote){
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = quote;
}
getQuote();
