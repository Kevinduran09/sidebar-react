import logo from "../assets/react.svg";
import {
  AiOutlineLeft,
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdOutlineAnalytics, MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../App";
import "../styles/sidebar.css";
export function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const ModSidebaropen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { setTheme, theme } = useContext(ThemeContext);
  const CambiarTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`sidebar-container ${sidebarOpen ? "active" : ""} ${theme}`}
    >
      <button className="sidebar-button" onClick={ModSidebaropen}>
        <AiOutlineLeft />
      </button>
      <div className="logo-content">
        <div className="img-content">
          <img src={logo} alt="logo" />
        </div>
        <h2>codigo369</h2>
      </div>
      <div className="content-navegation">
        <div className="navegation-list">
          {linksArray.map(({ icon, label, to }) => (
            <div className="link-container" key={label}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `links${isActive ? ` active` : ``}`
                }
              >
                <div className="link-icon">{icon}</div>
                {sidebarOpen && <span>{label}</span>}
              </NavLink>
            </div>
          ))}
        </div>
        <div className="divider" />
        {secondarylinksArray.map(({ icon, label, to }) => (
          <div className="link-container" key={label}>
            <NavLink
              to={to}
              className={({ isActive }) => `links${isActive ? ` active` : ``}`}
            >
              <div className="link-icon">{icon}</div>
              {sidebarOpen && <span>{label}</span>}
            </NavLink>
          </div>
        ))}

        <div className="divider" />
        <div className="theme-content">
          {sidebarOpen && <span className="title-theme">Dark mode</span>}
          <div className="toggle-content">
            <div className="grid theme-container">
              <div className="content">
                <div className="demo">
                  <label className="switch">
                    <input
                      type="checkbox"
                      className="theme-swither"
                      onClick={CambiarTheme}
                      checked={theme === "dark"}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//#region Data links
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Estadisticas",
    icon: <MdOutlineAnalytics />,
    to: "/estadisticas",
  },
  {
    label: "Productos",
    icon: <AiOutlineApartment />,
    to: "/productos",
  },
  {
    label: "Diagramas",
    icon: <MdOutlineAnalytics />,
    to: "/diagramas",
  },
  {
    label: "Reportes",
    icon: <MdOutlineAnalytics />,
    to: "/reportes",
  },
];
const secondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/null",
  },
  {
    label: "Salir",
    icon: <MdLogout />,
    to: "/null",
  },
];
//#endregion
