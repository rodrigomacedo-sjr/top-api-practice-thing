import "./search-bar.css";
import GifBlock from "../GifBlock/GifBlock.js";

const SearchBar = (function () {
  const PREFIX = "sbar";
  const raw = `
  <form id="${PREFIX}">
    <input type="text" id="${PREFIX}-input" name="search">
    <button>search</button>
  </form>
  `;

  const parsed = document.createRange().createContextualFragment(raw);

  const form = parsed.querySelector("form");
  const searchBtn = parsed.querySelector("button");

  searchBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const obj = Object.fromEntries(data.entries());

    GifBlock.search(obj.search);

    form.reset();
  });

  const apply = function () {
    if (localStorage.getItem("theme") === "dark") {
      form.classList.add("dark-mode");
      form.classList.remove("light-mode");
    } else {
      form.classList.add("light-mode");
      form.classList.remove("dark-mode");
    }
  };

  apply();

  return {
    element: form,
    apply,
  };
})();

export default SearchBar;
