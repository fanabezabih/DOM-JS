
// Question 1: Change document background color to silver
document.body.style.backgroundColor = "silver";

// Question 2: Change font color for h1 title to green
const color = document.getElementById("title");
color.style.color = "green";

// Question 3: Change font case for h3 tags to uppercase

document.querySelectorAll("h3").forEach(element => {
  element.classList.add("uppercase"); 
});

// Question 4: Add one more fruit to the fruits list
const newFruit = document.createElement("li");
newFruit.textContent = "Apples";
document.getElementById("fruList").appendChild(newFruit);

// Question 5: Add one more vegetable to the vegetables list
const newVeg = document.createElement("li");
newVeg.textContent = "Carrots";
document.getElementById("vegList").appendChild(newVeg);
