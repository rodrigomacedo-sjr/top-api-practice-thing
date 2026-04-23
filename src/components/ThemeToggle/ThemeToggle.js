import "./theme-toggle.css";
import ThemeHandler from "../../theme.js";
import Randomizer from "../Randomizer/Randomizer.js";
import SearchBar from "../SearchBar/SearchBar.js";

const ThemeToggle = function () {
  const outer = document.createElement("div");
  outer.id = "theme-toggle";
  const button = document.createElement("button");
  outer.appendChild(button);

  const apply = function () {
    if (localStorage.getItem("theme") === "dark") {
      button.className = "dark-mode";
    } else {
      button.className = "light-mode";
    }
  };

  outer.addEventListener("click", (event) => {
    event.preventDefault();

    document.startViewTransition(() => {
      ThemeHandler.togglePreference();
      ThemeHandler.apply();
      Randomizer.apply();
      SearchBar.apply();

      apply();
    });
  });

  apply();

  return outer;
};

export default ThemeToggle;
