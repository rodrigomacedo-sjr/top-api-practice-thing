import "./css/theme.css";

const ThemeHandler = (function () {
  const body = document.querySelector("body");
  let curTheme = localStorage.getItem("theme");

  const apply = () => {
    if (curTheme === "dark") {
      body.style.setProperty("background-color", "var(--dk-bg)");
    } else {
      body.style.setProperty("background-color", "var(--lg-bg)");
    }
  };

  const togglePreference = () => {
    if (curTheme === "dark") {
      curTheme = "light";
      localStorage.setItem("theme", "light");
    } else {
      curTheme = "dark";
      localStorage.setItem("theme", "dark");
    }
  };

  return {
    apply,
    togglePreference,
  };
})();

export default ThemeHandler;
