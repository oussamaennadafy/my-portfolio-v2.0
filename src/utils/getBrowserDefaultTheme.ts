/**
 * get the default browser them
 */
const getBrowserDefaultTheme = (): "dark" | "light" => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return "dark";
  return "light";
}


export default getBrowserDefaultTheme;