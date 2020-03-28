// JavaScript Document
function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;
    xhr.onload = function() {   
        var products = callback(xhr.response);
        displayArticle(products);
        };
    xhr.send();
}

function displayArticle(jsonObj) {
    let strangeProducts = jsonObj.strangeProducts;
    for (let i = 0; i < strangeProducts.length; i++) {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let list = document.createElement('ul');
        let section = document.querySelector('section');

        img.setAttribute('src', 'https://mark-boyd-gc.github.io/Lab4/img/' + strangeProducts[i].image);
        img.setAttribute('alt', strangeProducts[i].name);
        img.setAttribute('width', 200);
        img.setAttribute('height', 300);

        h2.textContent = strangeProducts[i].name;

        p1.textContent = 'Price: ' + strangeProducts[i].price;
        p2.textContent = 'Details: ' + strangeProducts[i].details;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(list);
        section.appendChild(article);
        }    
}

loadAsset('https://mark-boyd-gc.github.io/Lab4/strange-products.json', 'json', displayArticle);
    
