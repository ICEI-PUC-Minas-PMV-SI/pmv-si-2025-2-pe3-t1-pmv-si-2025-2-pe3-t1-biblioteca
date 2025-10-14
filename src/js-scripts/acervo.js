const selectSearch = document.getElementById("selectSearch");
const tipoDeBusca = document.getElementById("tipo-de-busca");
const listHidden = document.getElementById("list-hidden");
const listItems = document.querySelectorAll(".listItem");

tipoDeBusca.addEventListener("click", (event) => {
  event.preventDefault();

  listHidden.classList.toggle("hidden");
});

for (const item of listItems) {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    listHidden.classList.toggle("hidden");

    selectSearch.textContent = item.textContent;

    listItems.forEach((li) => {
      li.style.opacity = li == item ? 1.0 : 0.7;
    });
  });

  if (item.textContent === selectSearch.textContent) {
      item.style.opacity = 1.0;
    } else {
        item.style.opacity = 0.7
    }
}
