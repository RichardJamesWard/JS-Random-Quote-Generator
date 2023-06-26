const url = "https://api.quotable.io/random";
const para = document.getElementById('quote')
const author = document.getElementById('author-name');

const getQuoteContent = (data) => {
    let quote = data.content;
    let author = data.author

    console.log(quote + " -- " + author);
    console.log(data);

    para.innerText = quote;
    author.innerText = author;
}

const btn = document.getElementById('btn').addEventListener('click' , () => {
    // calling the api .
    fetch(url).then((response) => response.json()).then((data) => getQuoteContent(data));
})