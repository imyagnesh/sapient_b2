
import '../styles/index.scss';

window.addEventListener("popstate", (e) => {
    const category = e.state;
    console.log(category);
    loadProducts()
})

const loadProducts = async () => {
    try {
        const productsUrl = "http://localhost:3000/products"

        const params = new URLSearchParams(window.location.search);
        console.log(params);

        const res = await Promise.all([
            fetch("http://localhost:3000/categories"),
            fetch(productsUrl),
        ]);
        const json = await Promise.all([
            res[0].json(),
            res[1].json(),
        ]);

        console.log(json);

        const productsSection = document.getElementById("products");

        // display categories

        const aside = document.getElementsByTagName("aside")


        for (let i = 0; i < json[0].length; i++) {
            const element = json[0][i];
            const a = document.createElement("a");
            a.innerHTML = `${element.name}`
            a.href = `${element.key}`
            aside[0].appendChild(a);
        }

        // display products
        for (let i = 0; i < json[1].length; i++) {

            const element = json[1][i];
            const itemsDiv = document.createElement("div");

            itemsDiv.className = "products__item";

            itemsDiv.innerHTML = `
                <h2>${element.name}</h2>
                <img src="${element.imageURL}" alt="${element.name} Image" />
                <p>${element.description}</p>
                <span>MRP ${new Intl.NumberFormat("en-IN", {
                    currency: "INR",
                    style: "currency"
                }).format(element.price)}</span>
                <button class="btn">Buy Now</button>
            `;

            productsSection.appendChild(itemsDiv);
        }

        console.log(json);
    } catch (error) {
        
    }
}

loadProducts()