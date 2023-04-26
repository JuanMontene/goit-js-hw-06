const ingredientsList = document.querySelector("#ingredients");

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (let i = 0; i < ingredients.length; i++){
  const listItem = document.createElement("li");
  listItem.textContent = ingredients[i];
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
}

