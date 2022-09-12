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

dltBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("there is no item to delete");
});

// enter key event handler
langInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    addBtn.click();
  }

  if (event.code === "Delete") {
    dltBtn.click();
  }
});

window.addEventListener("load", () => {
  langInput.focus();
});
