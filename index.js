const form = document.querySelector("form");
const result = document.querySelector(".results");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { target } = e;
  const formData = Object.fromEntries(new FormData(target).entries());

  const variable = +formData.variable || 1;
  const variable_2 = +formData.variable_2 || 1;
  const fixed = +formData.fixed || 1;

  result.textContent = ((variable / fixed) * variable_2)
    .toFixed(2)
    .replace(".", ",");
});
