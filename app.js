function changeTextAndStyle() {
    var heading = document.getElementById("myHeading");
    var text = document.getElementById("myText");

   
    heading.innerHTML = "This is Our Website";
    text.innerHTML = "Please Find Your Item of Interest Here.";

    
    heading.style.color = "blue";
    heading.style.backgroundColor = "red";

    const listItems = document.querySelectorAll("li");

listItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        alert(`You clicked on item ${index + 1}: ${item.textContent}`);
    });
});



   
}
document.getElementById("myButton").addEventListener("click", changeTextAndStyle);
document.getElementById("mybutton").addEventListener("click", changeTextAndStyle);
document.getElementById("navList").addEventListener("click",  changeTextAndStyle);
