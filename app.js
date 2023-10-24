function changeTextAndStyle() {
    var heading = document.getElementById("myHeading");
    var text = document.getElementById("myText");

   
    heading.innerHTML = "This is Our Website";
    text.innerHTML = "Please Find Your Item of Interest Here.";

    
    heading.style.color = "blue";
    heading.style.backgroundColor = "red";
   
}
document.getElementById("myButton").addEventListener("click", changeTextAndStyle);
document.getElementById("mybutton").addEventListener("click", changeTextAndStyle);



