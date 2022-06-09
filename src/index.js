
import '../styles/index.scss';

const loadProducts = async () => {
    try {
        const res = await fetch("http://localhost:3000/products");
        const json = await res.json();

        const productsSection = document.getElementById("products");

        for (let i = 0; i < json.length; i++) {

            const element = json[i];
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
                <button>Buy Now</button>
            `;

            productsSection.appendChild(itemsDiv);
        }

        console.log(json);
    } catch (error) {
        
    }
}

loadProducts()