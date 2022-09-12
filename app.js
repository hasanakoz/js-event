console.log("**** app.js *******");

const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const dltBtn = document.querySelector("#dlt-btn");
const langList = document.getElementById("lang-list");

const newUl = document.createElement("ul");
langList.appendChild(newUl);

addBtn.addEventListener("click", () => {
  if (!langInput.value) {
    alert("please enter a language");
  } else {
    newUl.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = "";
  }
});

window.addEventListener("load", () => {
  langInput.focus();
});
