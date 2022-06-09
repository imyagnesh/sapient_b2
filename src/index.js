import '../styles/home.scss'

const onExploreClick = (event) => {
    event.preventDefault();
    history.pushState({category:event.target.value }, null, `products.html?category=${event.target.value}`);
    // alert(event.target.data-key)
}

const loadData = async () => {
    try {
        
        const res = await fetch("http://localhost:3000/categories");

        const json = await res.json();

        const categories = document.getElementById("categories")

        for (let i = 0; i < json.length; i++) {
            const element = json[i];
            const div = document.createElement("div");

            div.className = "categories__item";

            div.innerHTML = `
                <div>
                    <img src="${element.imageUrl}" alt="fruits">
                </div>
                <div>
                    <h1>${element.name}</h1>
                    <p>${element.description}</p>
                    <button type="button" class="btn" value="${element.id}">Explore ${element.name}</button>
                `

                categories.appendChild(div);
            
        }

        const btns = document.getElementsByClassName("btn");

        for (let i = 0; i < btns.length; i++) {
            const btn = btns[i];
            btn.addEventListener("click", onExploreClick, false)
        }





    } catch (error) {
        
    }
}

loadData();