import React, { useState } from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsChevronDown,
} from "react-icons/bs";

import { SlPeople } from "react-icons/sl";
import { TbSettings2 } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  // State to manage the dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const iconStyle = {
    marginLeft: "5cm",
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      {/* Sidebar content */}
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <TbSettings2 className="icon_header" />
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
            <AiOutlineRight style={iconStyle} />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Products
            <AiOutlineRight style={iconStyle} />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" /> Customers
            <AiOutlineRight style={iconStyle} />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Incomes
            <AiOutlineRight style={iconStyle} />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Promote
            <AiOutlineRight style={iconStyle} />
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Help
            <AiOutlineRight style={iconStyle} />
          </a>
        </li>
      </ul>

      {/* Dropdown */}
      <div>
        <ul className="sidebar-list-item">
          <a href="" style={{ color: "white" }}>
            <SlPeople style={{marginInline:"2px"}} />
            Evano
          </a>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
