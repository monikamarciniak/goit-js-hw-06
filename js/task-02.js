const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(".ingredients");
//const list = document.createElement("ul");
list.textContent = "ingredients";
listItem.prepend(list);

const listItem = document.createElement("li");
listItem.textContent = 'Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments';

listItem.classListItem.add("item");


list.after('Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments');

console.log(list); 

