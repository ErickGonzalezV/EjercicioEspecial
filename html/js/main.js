const btnLoad = document.getElementById("btnLoad");
const URLMain = "https://api.escuelajs.co/api/v1/products";
const main = document.querySelector("main.container");
const prod = document.getElementById("prod");
const ulMenu = document.getElementById("ulMenu");

function getData(cat) {
    const options={"method":"GET"}
    fetch(`${URLMain}`, options)
        .then((response) => {
            console.log(response)
            response.json().then((res) => {
                // console.log(res.length);//20
                // console.log(res[0].title);
                createCards(res)
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

    const btnLoad = document.getElementById("btnLoad");
    btnLoad.addEventListener("click", () => getData(""));
});//btnLoad

function createCards(prods) {
    prod.innerHTML="";
    prods.forEach((objetoIndividual, i) =>
    {
        prod.insertAdjacentHTML("beforeend",
        `
        <div class="card" style="width: 18rem" >
               <img src="${prods[i].image}" class="card-img-top" alt="${prods[i].title}">
           <div class="card-body">
             <h5 class="card-title">${prods[i].title}</h5>
             <p class="card-text">${prods[i].description}</p>
             <a href="#" class="btn btn-primary" id=${i}>Go somewhere</a>
           </div>
         </div>`);
    });//createCards
};
