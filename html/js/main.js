const btnLoad = document.getElementById("btnLoad");
const URLMain = "https://api.escuelajs.co/api/v1/products";
const main = document.querySelector("main.container");
const prod = document.getElementById("prod");
const ulMenu = document.getElementById("ulMenu");

function getData(cat) {
    const options={"method":"GET"}
    const url = cat ? `${URLMain}/?categoryId=${cat}` : URLMain;
fetch(url, options)
        .then((response) => {
            console.log(response)
            response.json().then((res) => {
                // console.log(res.length);//20
                // console.log(res[0].title);
                insertCards(res)
            })
        })
        .catch((err) => {
            main.insertAdjacentHTML("beforeend",
                `<div class="alert alert-danger" role="alert">
                 ${err.message}
            </div>`);
        })
}//getData



document.addEventListener("DOMContentLoaded", () => {
    getData("");

    btnLoad.addEventListener("click", () => getData(""));
});//btnLoad

function insertCards(prods) {
    prod.innerHTML="";
    prods.forEach((objetoIndividual, i) =>
    {
        prod.insertAdjacentHTML("beforeend",
        `
        <div class="card" style="width: 18rem" >
               <img src="${objetoIndividual.images[0]}" class="card-img-top" alt="${objetoIndividual.title}">
           <div class="card-body">
             <h5 class="card-title">${objetoIndividual.title}</h5>
             <p class="card-text">${objetoIndividual.description}</p>
           </div>
         </div>`);
    });//createCards
};
