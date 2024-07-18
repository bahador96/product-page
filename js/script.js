const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document
  .getElementById("search-price")
  .querySelector("button");

const changeClass = (value) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === value) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searhHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();

  products.forEach((product) => {
    const productName = product
      .querySelector("p")
      .textContent.toLowerCase()
      .trim();
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
    //   children[1]
    //   .innerText.toLowerCase().trim();
  });
};
const filterHandler = (event) => {
  const filterValue = event.target.dataset.filter;

  changeClass(filterValue);

  products.forEach((product) => {
    const category = product.dataset.category;

    if (category === filterValue || filterValue === "all") {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const searchPirceHandler = (event) => {
  const searchPrice = Number(event.target.parentElement.children[0].value);
  products.forEach((product) => {
    const productPirce = product.children[2].innerText;
    const pirce = +productPirce.split(" ")[1].trim();

    if (!searchPrice || pirce === searchPrice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const start = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", filterHandler);
  });

  searchInput.addEventListener("keyup", searhHandler);

  priceButton.addEventListener("click", searchPirceHandler);
};

window.addEventListener("load", start);
