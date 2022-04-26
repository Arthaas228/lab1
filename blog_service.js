let products = JSON.stringify([
    {
        "name": "Blog name",
        "date": "15/01",
        "description": "I`m a nice blog",
        "image":"./images/photo1.webp"
    },
    {
        "name": "Blog name",
        "date": "15/01",
        "description": "I`m a nice blog",
        "image":"./images/photo1.webp"
    },
    {
        "name": "Blog name",
        "date": "15/01",
        "description": "I`m a nice blog",
        "image":"./images/photo1.webp"
    }
    ,
    {
        "name": "Blog name",
        "date": "15/01",
        "description": "I`m a nice blog",
        "image":"./images/photo1.webp"
    }
    ,
    {
        "name": "I'm a blog",
        "date": "15/01",
        "description": "I`m a nice blog",
        "image":"./images/photo1.webp"
    }
]);


window.onload = function() {
const container = document.querySelector(".blog_list");
JSON.parse(products).forEach(e => {
    container.insertAdjacentHTML('beforeend', 
    `<div class="blog">
        <img class= "blog_image" src="${e.image}">
        <span class="blog_name">${e.name}</span>
        <span class="blog_date">${e.date}</span>
        <span class="product_description">${e.description}</span>
    </div>` 
    );
})}