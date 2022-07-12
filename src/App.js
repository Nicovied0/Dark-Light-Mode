
import './App.css';
import Form from './components/Form';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className='button'>
          <label className='label'> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

        <Form submit={() => alert('enviado')} />
      </div>
    </ThemeContext.Provider>
  );
}
//{theme === "Light Mode" ? "light"   : "Dark Mode"}
export default App;
