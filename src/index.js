import "./css/style.css";
import GifBlock from "./components/GifBlock/GifBlock.js";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle.js";
import ThemeHandler from "./theme.js";

const content = document.getElementById("content");

content.appendChild(GifBlock.element);
GifBlock.reload();

content.appendChild(ThemeToggle());

ThemeHandler.apply();
