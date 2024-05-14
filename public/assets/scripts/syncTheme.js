const getBrowserDefaultTheme = () => {
  if (window?.matchMedia && window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches) return "dark";
  if (window?.matchMedia && window?.matchMedia?.('(prefers-color-scheme: light)')?.matches) return "light";
};

const theme = JSON.parse(window.localStorage?.getItem("theme")).state.theme || getBrowserDefaultTheme();

const htmlElement = document.getElementsByTagName("html").item(0);

htmlElement.classList.add(theme);