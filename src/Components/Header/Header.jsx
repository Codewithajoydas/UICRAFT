import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

/**
 * Header component
 *
 * @param {Object} props - Component props
 * @param {string} props.logo - Logo URL
 * @param {string} props.title - Title text for the header
 * @param {Array} props.link - List of link objects [{ href, label, icon, showIcon }]
 * @param {boolean} props.search - Whether to show search input
 * @param {Function} props.sOnclick - Callback for search button click
 * @param {string} props.purl - Profile image URL
 * @param {Object} props.style - Additional styles for header
 * @param {Function} props.pOnClick - Callback for profile click
 * @param {boolean} props.showIcons - Whether to show icons in links
 * @param {boolean} props.showLabel - Whether to show labels in links
 * @param {boolean} props.showboth - Whether to show both icons and labels
 */

const Header = ({
  logo,
  title,
  link = [],
  search,
  sOnclick,
  purl,
  style,
  pOnClick,
  showIcons = false,
  showLabel = false,
  showboth = false,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <header style={style}>
      <span className="logo">
        <img src={logo} alt="Logo" draggable="false" />
        <span>{title}</span>
      </span>

      {search && (
        <div className="search-bar">
          <label htmlFor="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="searchIcon"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
            <input
              type="search"
              id="search"
              placeholder="Search..."
              autoComplete="off"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={() => sOnclick(searchValue)}>Search</button>
          </label>
        </div>
      )}

      <div className="smscreen">
        <nav>
          <ul className={isActive ? "active" : ""}>
            {link.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  title={item.label}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 10,
                    alignItems: "center",
                  }}
                >
                  {item.showIcon && (showIcons || showboth) && item.icon}
                  {item.showLabel && (showLabel || showboth) && item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* Search icon */}
        <svg
          style={{ display: "none" }}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="searchIcon lucide lucide-search-icon lucide-search"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
        {/* Menu */}
        <svg
          style={{ display: "none" }}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={toggleClass}
          className="menu"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>

        <div className="profile" onClick={pOnClick}>
          <img src={purl} alt="Profile" draggable="false" />
        </div>
      </div>
    </header>
  );
};

export default Header;
