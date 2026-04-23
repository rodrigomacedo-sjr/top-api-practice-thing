import "./randomizer.css";
import GifBlock from "../GifBlock/GifBlock.js";

const Randomizer = (function () {
  const rand = document.createElement("button");
  rand.classList.add("rand-button");
  rand.textContent = "Randomize";

  const apply = function () {
    if (localStorage.getItem("theme") === "dark") {
      rand.classList.add("dark-mode");
      rand.classList.remove("light-mode");
    } else {
      rand.classList.add("light-mode");
      rand.classList.remove("dark-mode");
    }
  };

  rand.addEventListener("click", (event) => {
    event.preventDefault();

    GifBlock.reload();
  });

  return {
    element: rand,
    apply,
  };
})();

export default Randomizer;
