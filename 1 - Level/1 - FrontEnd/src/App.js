import { useEffect, useRef } from "react";
import { useStickyState } from "./hooks/static";
import "./styles.css";

export default function App() {
  const [theme, setTheme] = useStickyState("theme", "light");
  const appNode = useRef(null);

  const updateTheme = () => {
    if (appNode.current === null) return;
    if (theme === "light") appNode.current.classList.add("light-theme");
    else appNode.current.classList.remove("light-theme");
  };

  const themeHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    updateTheme();
  }, [theme]);

  return (
    <div ref={appNode} className="App">
      <h1>Current theme: {theme}</h1>
      <p>
        Light themes have lighter backgrounds and darker font colors. Meanwhile,
        dark themes have darker backgrounds and lighter font colors. Dark themes
        prevent <strong>Eyes Strain </strong>
        and reduce device energy consumption
      </p>
      <h3>What we expect?</h3>
      <p>The button below should toggle between light and dark mode</p>
      <button onClick={themeHandler}>Toggle theme</button>
    </div>
  );
}
