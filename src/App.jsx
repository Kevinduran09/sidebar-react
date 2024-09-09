import React, { useState, useEffect } from "react";
import { MyRoutes } from "./routers/routes";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import "./index.css"; // Asegúrate de importar el archivo CSS
import { toggleTheme } from "./utils";
export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    toggleTheme(theme);
  }, [theme]);

  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ setTheme, theme }}>
          <div
            className={`container ${sidebarOpen ? "sidebarState active" : ""}`}
          >
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <MyRoutes />
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
