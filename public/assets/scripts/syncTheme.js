const getBrowserDefaultTheme = () => {
  if (window?.matchMedia && window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches) return "dark";
  if (window?.matchMedia && window?.matchMedia?.('(prefers-color-scheme: light)')?.matches) return "light";
  return "dark";
}
const theme = JSON.parse(window.localStorage?.getItem("theme")) || getBrowserDefaultTheme();

const htmlElement = document.getElementsByTagName("html").item(0);

htmlElement.classList.add(theme);