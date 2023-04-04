const button = document.querySelector(".new-quote")
button.addEventListener('click', getQuote);

const answer = document.querySelector("#js-text");
answerButton.addEventListener('click', showAnwser);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";
async function getQuote(){
    // console.log("It works!");
    try{
        const response = await fetch(endpoint)
        if (!response.ok){
            throw Error(response.statusText)
        }
        const json = await response.json();
        // console.log(json.question);
        displayQuote(json.question);
        showAnwser(json.answer);
    }
    catch(err){
        console.log(err);
        alert('Failed to fetch new trivia');
    }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text")
    quoteText.textContent = quote;
}
function showAnwser(quote){
    const answerText = document.querySelector("#js-answer-text")
    answerText.textContent = quote;
}

getQuote();