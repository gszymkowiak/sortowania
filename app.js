const simple = document.querySelector(".simple");
const advanced = document.querySelector(".advanced");
const special = document.querySelector(".special");
const sorting = document.querySelectorAll(".sorting");

function boxHidden() {
  [...sorting].map(el => el.classList.add("visually-hidden"));
}

simple.addEventListener("click", () => {
  boxHidden();
  simple_sorting.classList.remove("visually-hidden");
});

advanced.addEventListener("click", () => {
  boxHidden();
  advanced_sorting.classList.remove("visually-hidden");
});

special.addEventListener("click", () => {
  boxHidden();
  special_sorting.classList.remove("visually-hidden");
});
