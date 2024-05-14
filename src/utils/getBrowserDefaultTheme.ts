/**
 * get the default browser them
 */
const getBrowserDefaultTheme = (): "dark" | "light" => {
  if (window?.matchMedia && window?.matchMedia?.('(prefers-color-scheme: dark)')?.matches) return "dark";
  if (window?.matchMedia && window?.matchMedia?.('(prefers-color-scheme: light)')?.matches) return "light";

  return "dark";
}


export default getBrowserDefaultTheme;