const getBrowserDefaultTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return "dark";
  return "light";
}

const theme = JSON.parse(localStorage?.getItem("theme")).state.theme || getBrowserDefaultTheme();

const htmlElement = document.getElementsByTagName("html").item(0);
htmlElement.classList.add(theme);