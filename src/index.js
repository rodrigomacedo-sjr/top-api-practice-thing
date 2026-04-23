import "./css/style.css";
import GifBlock from "./components/GifBlock/GifBlock.js";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.js";
import ThemeHandler from "./theme.js";
import Randomizer from "./components/Randomizer/Randomizer.js";
import SearchBar from "./components/SearchBar/SearchBar.js";

const content = document.getElementById("content");

content.appendChild(SearchBar.element)

content.appendChild(GifBlock.element);

content.appendChild(ThemeToggle());

content.appendChild(Randomizer.element);

ThemeHandler.apply();
