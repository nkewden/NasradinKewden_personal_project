
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const showGipphy = document.querySelector("#show-giphy");

const apiKey = "nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H";


const api_Key = null;
const limit = null;
const rating = null;
console.log("You are here")

document.addEventListener("submit", getResults);

async function getResults (e) {
    console.log("Get results")
    e.preventDefault();
    let x = "http://api.giphy.com/v1/gifs/search?api_key=nOjzgnRK5wSxGHruvjd3HVSux7Zxk46H&q=" + e.target.giphy.value
    const response = await fetch (x);
    console.log(response)
    const jsonresult = await response.json();
    console.log(jsonresult)
    return jsonresult.data;
}


function displayResults (results) {
    results.forEach((element, index)=> {
        let gifUrl = element.imges.fixed_height.url;
        let title = element.title;

        gifArea.innerHTML += `
        <div>class="gif ${index + rating}">
         <img src = "${gifUrl}" alt = "${title}">
        </div>
        `;
    });
}