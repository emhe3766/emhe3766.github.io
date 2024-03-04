const button = document.querySelector("#js-new-signin");
button.addEventListener('click', getQuote);

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
        alert('Failed to signin');
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
getQuote();
