// import fetchProducts from './utility';
'use strict';

let prodList = [];
let productEndPont = window.location.origin+'/src/data/products.json';
const init = () => {
    if(window.localStorage.getItem("productList") !== undefined && window.localStorage.getItem("productList") !== null && window.localStorage.getItem("productList") !== '') {
        prodList = JSON.parse(window.localStorage.getItem("productList"));
        renderPlp(prodList);
    } else {
        fetch(productEndPont)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            prodList = json;
            window.localStorage.setItem("productList",JSON.stringify(prodList));
            renderPlp(prodList);
        })
    }
    document.getElementById("plpfilter").addEventListener("change", filterPlp);
    document.getElementById("changeView").addEventListener("click", toggleView);
};

const cardGenerator = product => {
    return (`
    <div class="card" id="${product._id}">
        <span class="card__fav ${product.isFav}"></span>
        <a href="${product.url}">                            
            <picture>
                <source srcset="${product.picture}" media="(min-width: 1200px)">
                <source srcset="${product.picture}" media="(min-width: 992px)">
                <source srcset="${product.picture}" media="(max-width: 991px)">
                <img src="${product.picture}" alt="image Alt"/>
            </picture>                
            <div class="card__details">
                <h3>${product.name}</h3>
                <p>${product.size} <span class="card__details--rating star${product.rating}" title="${product.rating}">${product.rating}</span></p>
                <p class="card__price"><strong>${product.price}</strong> <del>${product.oldPrice === undefined ? `` : `${product.oldPrice}` }</del><span>${product.savings === undefined ? `` : `You save ${product.savings}` }</span></p>
            </div>
        </a>
      </div>`)
};

const renderPlp = (prodList) => {
    let cardsMarkup = prodList.map(cardGenerator).join('');
    document.querySelector(".plp__cardcontainer").innerHTML = cardsMarkup;
    document.getElementsByClassName("plp__cardcount")[0].innerHTML = prodList.length;
};

const filterPlp = (e) =>{
    let filteredProducts = parseInt(e.currentTarget.value) === -1 ? prodList : prodList.filter(product => product.rating === parseInt(e.currentTarget.value));
    renderPlp(filteredProducts);
}

const toggleView = () => {
    let plpClass = document.querySelector('#viewChange').classList,
        gridLink = document.querySelector('#grid'),
        listLink = document.querySelector('#list');
    if (plpClass.contains('list')) {
        plpClass.remove('list');
        gridLink.classList.add("active");
        listLink.classList.remove("active");
    } else {
        plpClass.add('list');
        listLink.classList.add("active");
        gridLink.classList.remove("active");
    }
}
init();

