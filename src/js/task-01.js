const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories : ${categoriesItems.length}`)

for (let i = 0; i < categoriesItems.length; i++){
    const item = categoriesItems[i];
    const title = item.querySelector("h2").textContent;
    const articles = item.querySelectorAll("ul li").length;

    

    console.log(`Category: ${title}
Elements: ${articles}`)
}

