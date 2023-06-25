import './style.css';
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const btn = document.getElementById('getbtn');
 
 const getQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    const { content, author } = data;
    quoteElement.innerText = content;
    authorElement.innerText = author;
  } catch (error) {
    console.log('Error!', error);
  }
 };

 btn.addEventListener('click', getQuote);
 window.addEventListener('load', getQuote);