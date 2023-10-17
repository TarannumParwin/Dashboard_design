import React, { useState } from "react";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsChevronDown 
} from "react-icons/bs";



function Sidebar({ openSidebarToggle, OpenSidebar }) {
  // State to manage the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      {/* Sidebar content */}
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" />
          Dashboard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
      <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Incomes
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Promote
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Help
          </a>
        </li>
      </ul>

      {/* Dropdown */}
      <div onClick={toggleDropdown} >
      <h2>Evano<BsChevronDown /></h2>
      <span>Product Manager</span>
      </div>

      {isDropdownOpen && (
        <ul className="dropdown-menu">
          
          <li className="dropdown-menu-item">Dropdown Item 1</li>
          <li className="dropdown-menu-item">Dropdown Item 2</li>
        </ul>
      )}
        
     
    </aside>
  );
}

export default Sidebar;
