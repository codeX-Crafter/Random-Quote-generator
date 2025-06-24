const btn= document.getElementById('btn')
const quoteTxt= document.getElementById('quoteTxt')
const quoteAuthor= document.getElementById('quoteAuthor')

// const apii= 'https://www.quoterism.com/api/quotes/random'
// const proxyUrl = "https://api.allorigins.win/raw?url=";
// const targetUrl = "https://www.quoterism.com/api/quotes/random";
// let apii = proxyUrl + encodeURIComponent(targetUrl + "?nocache=" + Math.random());
const apii= 'https://api.kanye.rest/'

async function fetchQuote(){
    // apii = proxyUrl + encodeURIComponent(targetUrl + "?nocache=" + Math.random());
 try{
    const res = await fetch(apii);
    console.log(res);
    const data= await res.json();
   
    quoteTxt.innerText= `"${data.quote}"`
    quoteAuthor.innerText= `— Kanye` // This API doesn't return author
    
 }
 catch (error){
    quoteTxt.innerText= "Error Fetching the quote"
    quoteAuthor.innerText= ""
    console.error('Error fetching quote: ', error)
 }
}

btn.addEventListener('click', fetchQuote)


