const local = location.href;
const url = document.querySelectorAll(".header-menu a");

url.forEach((element) => {
  if (local.includes(element.href)) {
    element.classList.add("ativo");
  }
  console.log(element.href);
});
console.log(local);
