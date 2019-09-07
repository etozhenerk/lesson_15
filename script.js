let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let main = document.getElementById("main");
let myList = document.getElementById("list");
let ul = document.getElementsByTagName("ul");
let story = myList.getElementsByClassName("item");
let popup = document.getElementsByClassName("popup")[0];
let close = document.querySelector(".close");

function addItem() {
  let newLi = document.createElement("li");
  newLi.innerHTML = "Новая задача!";
  newLi.className = "item";
  myList.appendChild(newLi);
  popup.style.display = "none";
}

function delItem() {
  myList.removeChild(story[0]);

  if (story.length == 0) {
    popup.style.display = "block";
  }
}

function closePopup() {
  popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup);
