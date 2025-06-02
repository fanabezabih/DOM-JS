//Question1 
document.body.style.backgroundColor = "silver";

//Question 2

const color= document.getElementById('title')
color.style.color='green'


//Question 3
const element = document.getElementById('heading');
const originalText = element.textContent; 

const uppercaseText = originalText.toUpperCase();
element.textContent = uppercaseText; 


//Question4
const newFruit = document.createElement("li");
newFruit.textContent = "Apples";
document.getElementById("fruList").appendChild(newFruit);

//Question5
const newVeg = document.createElement("li");
newVeg.textContent = "Carrots";
document.getElementById("vegList").appendChild(newVeg);

